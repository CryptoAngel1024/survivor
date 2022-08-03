const express = require('express');
const userController = require('../controller/user.controller')
const User = require('../db/schema/user')
const {v4: uuidv4} = require('uuid');
const mailService = require('../services/mail.service')
const confirmationEmail = require('../../templates/confirmationEmail')
const forgotPasswordEmail = require('../../templates/forgotPasswordEmail')
const inviteUserEmail = require('../../templates/inviteUserEmail')
const leagueController = require('../controller/league.controller')


async function CreateUser(req, res) {
  try {
    let userByEmail = await userController.getUserByEmail(req.body.email);
    if (userByEmail)
      return res.send({response: "Error", result: "User with email already exist"});
    let confirmationCode = uuidv4();
    await userController.saveUser(req.body.name, req.body.surname, req.body.dateBirth, req.body.email,
      req.body.username, req.body.password, req.body.telephone, req.body.favouriteTeam, confirmationCode);
    mailService.sendEmail(req.body.email, "Conferma email Survivor",
      confirmationEmail, [req.body.email, confirmationCode], () => (console.log("sent")))
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function ForgotPassword(req, res) {
  try {
    let user = await userController.getUserByEmail(req.body.email);
    if (!user)
      return res.send({response: "Ok", result: "Ok"});
    let confirmationCode = uuidv4();
    await userController.updateUser({email: user.email}, {confirmation_code: confirmationCode});
    mailService.sendEmail(req.body.email, "Recupero Password Survivor",
      forgotPasswordEmail, [req.body.email, confirmationCode], () => (console.log("sent")))
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function NewPassword(req, res) {
  try {
    let user = await userController.getUserByEmail(req.body.email);
    if (!user)
      return res.send({response: "Ok", result: "Ok"});
    if (user.confirmation_code !== req.body.confirmation_code)
      return res.send({response: "Ok", result: "Ok"});
    await userController.updateUser({email: user.email}, {confirmation_code: null, password: req.body.password});
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function ConfirmUser(req, res) {
  try {
    let user = await userController.getUserByEmail(req.body.email);
    if (!user)
      return res.send({response: "Error", result: "User with email already exist"});
    if (user.confirmation_code !== req.body.confirmation_code)
      return res.send({response: "Error", result: "Confirmation code not match"});
    user.confirmation_code = null;
    await userController.updateUser({email: user.email}, {confirmation_code: null});
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function UserExist(req, res) {
  try {
    let user = await userController.getUserByEmail(req.query.email.toLowerCase());
    if (!user || (req.query.isRegistrationComplete && user.confirmation_code !== null))
      return res.send({response: "Ok", result: {exist: false}});
    else
      return res.send({response: "Ok", result: {exist: true}});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function UserExistByUsername(req, res) {
  try {
    let user = await userController.getUserByUsername(req.query.username.toLowerCase());
    if (!user || (req.query.isRegistrationComplete && user.confirmation_code !== null))
      return res.send({response: "Ok", result: {exist: false}});
    else
      return res.send({response: "Ok", result: {exist: true}});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function DeleteUser(req, res) {
  try {
    let user = await userController.getUser("survivor1");
    if (user) {
      await userController.deleteUser("survivor1");
      res.send({response: "Ok", result: "Ok"});
    } else
      return res.status(200).send({response: "Error", result: "User not found"})
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function InviteUser(req, res) {
  try {
    let ownerUser = await userController.getUserByEmail(res.locals.oauth.token.user.email);
    if (!ownerUser)
      return res.send({response: "Error", result: "User not found"});
    let leagueName = req.body.league;
    let inviteCode = uuidv4();
    await userController.updateUser({email: req.body.email}, {
      $push: {
        league: {
          name: leagueName,
          inviteCode: inviteCode,
          status: "PENDING",
          role: "USER"
        }
      }
    });
    mailService.sendEmail(req.body.email, "Hai ricevuto un invito a Survivor",
      inviteUserEmail, [leagueName, ownerUser.username, req.body.email, inviteCode], () => (console.log("sent")))
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function AcceptInvite(req, res) {
  try {
    let user = await userController.getUserByEmail(req.body.email);
    if (!user)
      return res.status(422).send({response: "Error", result: "User not found"});
    let inviteCodeFound = false;
    user.league.map((l) => {
      if (l.inviteCode === req.body.inviteCode) {
        inviteCodeFound = true;
        l.inviteCode = null;
        l.status = "ACTIVE"
      }
    })
    if (!inviteCodeFound)
      return res.status(422).send({response: "Error", result: "Invite code not found"});
    let mongoUser = new User(user);
    mongoUser.isNew = false;
    await mongoUser.save();
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function getUserList(req, res) {
  try {
    let ownerUserEmail = res.locals.oauth.token.user.email;
    let league = await checkOwnerUserPermissionAndGetLeague(ownerUserEmail, res, req.body.league_name);
    let objectFields = {"league.name": league.name};
    if (req.body.status)
      objectFields = {...objectFields, "league.status": req.body.status}
    if (req.body.search) {
      objectFields = {$and: [objectFields, { $or: req.body.search}]};
    }
    let userList = await userController.getUserListByObjectFields(objectFields, req.body.limit, req.body.skip)
    let userCount = await userController.getUserCountByObjectFields(objectFields)
    return res.send({response: "Ok", result: {users: userList, totalCount: userCount}});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function checkOwnerUserPermissionAndGetLeague(ownerUserEmail, res, leagueName) {
  let ownerUser = await userController.getUserByEmail(ownerUserEmail);
  if (!ownerUser)
    return res.status(400).send({response: "Error", result: "Owner user not found"});
  if (!leagueName)
    return res.status(422).send({response: "Error", result: "League name field is mandatory"});
  let league = await leagueController.getOneLeagueByObjectFields({name: leagueName, owner: ownerUser.username});
  if (!league)
    return res.status(400).send({response: "Error", result: "League " + leagueName + " for owner " + ownerUser.username + " not found"});
  return league;
}

async function changeUserStatus(req, res) {
  try {
    let ownerUserEmail = res.locals.oauth.token.user.email;
    await checkOwnerUserPermissionAndGetLeague(ownerUserEmail, res, req.body.league_name);
    let status = req.body.status;
    if (status !== "ACTIVE" && status !== "DISABLED")
      return res.send({response: "Error", result: "Accepted only ACTIVE and DISABLED status"});
    let username = req.body.username;
    let userToModify = await userController.getOneUserByObjectFields({username: username});
    let leagueFound = false;
    userToModify.league.map((l) => {
      if (l.name === req.body.league_name) {
        leagueFound = true;
        l.status = status;
      }
    })
    if (!leagueFound)
      return res.send({response: "Error", result: "League " + req.body.league_name + " about user " + username + " not found"});
    let mongoUser = new User(userToModify);
    mongoUser.isNew = false;
    await mongoUser.save();
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function changeUserRole(req, res) {
  try {
    let ownerUserEmail = res.locals.oauth.token.user.email;
    await checkOwnerUserPermissionAndGetLeague(ownerUserEmail, res, req.body.league_name);
    let role = req.body.role;
    if (role !== "ADMIN" && role !== "USER")
      return res.send({response: "Error", result: "Accepted only ADMIN and USER role"});
    let username = req.body.username;
    let userToModify = await userController.getOneUserByObjectFields({username: username});
    let leagueFound = false;
    userToModify.league.map((l) => {
      if (l.name === req.body.league_name) {
        leagueFound = true;
        l.role = role;
      }
    })
    if (!leagueFound)
      return res.send({response: "Error", result: "League " + req.body.league_name + " about user " + username + " not found"});
    let mongoUser = new User(userToModify);
    mongoUser.isNew = false;
    await mongoUser.save();
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

module.exports = authenticate => {
  const userRoutes = express.Router();
  userRoutes.post('/create', CreateUser);
  userRoutes.get('/exist', UserExist);
  userRoutes.get('/exist/username', UserExistByUsername);
  userRoutes.post('/confirmation', ConfirmUser);
  userRoutes.get('/delete', authenticate, DeleteUser);
  userRoutes.post('/forgotpassword', ForgotPassword);
  userRoutes.post('/newpassword', NewPassword);
  userRoutes.post('/invite', authenticate, InviteUser);
  userRoutes.post('/invite/accept', AcceptInvite);
  userRoutes.post('/', authenticate, getUserList);
  userRoutes.post('/status', authenticate, changeUserStatus);
  userRoutes.post('/role', authenticate, changeUserRole);
  return userRoutes;
};