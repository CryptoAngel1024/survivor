import React, {PureComponent} from 'react';
import TextBox from "../../../components/TextBox";
import Request, {url} from "../../../lib/Request";
import TableAdvanced from "../../../components/TableAdvanced";
import {BsPersonDashFill, BsPersonPlusFill} from "react-icons/bs"
import {MdAdminPanelSettings, MdOutlineAdminPanelSettings} from "react-icons/md"
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {createStandaloneToast} from "@chakra-ui/react"
import history from "../../../lib/history";

import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon
} from "react-share";


export interface Props {
  league: string;
}

interface State {
  playerEmailToInvite: string;
  isEmailCompiled: boolean;
  isEmailValid: boolean;
  emailExist: boolean;
  userLeagueList: any;
  leagueData: any;
  selectedPage: number;
  totalCount: number;
  searchQuery: any;
  searchText: string;
  status: string;
}

const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const sizePerPage = 15;

class PlayerManagement extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    league: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      playerEmailToInvite: undefined,
      isEmailCompiled: undefined,
      isEmailValid: undefined,
      emailExist: undefined,
      userLeagueList: undefined,
      leagueData: [],
      selectedPage: 1,
      totalCount: 1,
      searchText: undefined,
      searchQuery: undefined,
      status: undefined,
    }

    this.sendEmailInviteToPlayer = this.sendEmailInviteToPlayer.bind(this);
    this.checkUserExistence = this.checkUserExistence.bind(this);
    this.getUserLeagueList = this.getUserLeagueList.bind(this);
    this.handleActionTable = this.handleActionTable.bind(this);
    this.renderStatusTable = this.renderStatusTable.bind(this);
    this.renderRoleTable = this.renderRoleTable.bind(this);
    this.changeUserStatus = this.changeUserStatus.bind(this);
    this.changeUserRole = this.changeUserRole.bind(this);
    this.getLeagueData = this.getLeagueData.bind(this);
  }

  renderStatusTable(
    cellContent,
    row,
    rowIndex
  ) {
    let userLeague = row?.league?.find(l => l.name === this.props.league);
    return <span
      className={`label font-weight-bold label-lg 
      ${userLeague.status === "ACTIVE" ? "label-light-success" :
        (userLeague.status === "PENDING" || userLeague.status === "TO_ACCEPT") ? "label-light-warning" :
          "label-light-danger"} label-inline`}>
      {userLeague.status}
    </span>
  };

  renderRoleTable(
    cellContent,
    row,
    rowIndex
  ) {
    let userLeague = row?.league?.find(l => l.name === this.props.league);
    return <span
      className={`label font-weight-bold label-lg 
      ${userLeague.role === "OWNER" ? "label-light-info" :
        userLeague.role === "ADMIN" ? "label-light-warning" :
          "label-light"} label-inline`}>
      {userLeague.role}
    </span>
  };

  handleActionTable(
    cellContent,
    row,
    rowIndex
  ) {
    let userLeague = row?.league?.find(l => l.name === this.props.league);
    let isUserActive = userLeague.status === "ACTIVE";
    return userLeague.role !== "OWNER" && userLeague.status !== "PENDING" ?
      <>
        {!userLeague.tournament?.find((t) => t.flg_out === false) &&
        <OverlayTrigger
          overlay={<Tooltip id="products-edit-tooltip">{`${isUserActive ? "Disattiva" : "Attiva"} utente`}</Tooltip>}
        >
          <a className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
             onClick={() => this.changeUserStatus(row.username, isUserActive ? "DISABLED" : "ACTIVE")}>
            <span className="svg-icon svg-icon-md svg-icon-primary">
             {isUserActive ? <BsPersonDashFill/> : <BsPersonPlusFill/>}
            </span>
          </a>
        </OverlayTrigger>}
        {userLeague.status !== "TO_ACCEPT" ?
          !userLeague?.role || userLeague?.role === "USER" ?
            <OverlayTrigger
              overlay={<Tooltip id="products-edit-tooltip">Promuovi come Admin</Tooltip>}
            >
              <a className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                 onClick={() => this.changeUserRole(row.username, "ADMIN")}>
            <span className="svg-icon svg-icon-md svg-icon-primary">
             <MdAdminPanelSettings/>
            </span>
              </a>
            </OverlayTrigger> :
            <OverlayTrigger
              overlay={<Tooltip id="products-edit-tooltip">Rimuovi da Admin</Tooltip>}
            >
              <a className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                 onClick={() => this.changeUserRole(row.username, "USER")}>
            <span className="svg-icon svg-icon-md svg-icon-primary">
             <MdOutlineAdminPanelSettings/>
            </span>
              </a>
            </OverlayTrigger>
          : null}
      </>
      : null
  };

  componentDidMount() {
    this.getUserLeagueList();
    this.getLeagueData();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    if (this.props.league !== prevProps.league) {
      this.getUserLeagueList();
      this.getLeagueData();
    }
  }

  render() {
    let columns = [
      {
        dataField: "username",
        text: "Username",
        sort: true,
        style: {
          minWidth: "130px",
          maxWidth: "130px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        dataField: "name",
        text: "Nome",
        sort: true,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        dataField: "surname",
        text: "Cognome",
        sort: true,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        dataField: "email",
        text: "Email",
        sort: true,
        style: {
          minWidth: "220px",
          maxWidth: "220px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        dataField: "status",
        text: "Status",
        sort: true,
        formatter: this.renderStatusTable,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
        },
      },
      {
        dataField: "role",
        text: "Ruolo",
        sort: true,
        formatter: this.renderRoleTable,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
        },
      },
      {
        dataField: "action",
        text: "Actions",
        classes: "text-right pr-0",
        headerClasses: "text-right pr-3",
        style: {
          minWidth: "130px",
          maxWidth: "130px",
        },
        formatter: this.handleActionTable
      },
    ];
    let leagueInviteCodeUrl = window.location.hostname + "/JoinLeague?leagueName=" + this.props.league + "&leagueInviteCode=" + this.state.leagueData[0]?.invite_code;
    const toast = createStandaloneToast();
    return (
      <div>

        <div className="card card-custom card-stretch gutter-b">
          <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">Link invito</h3>
          </div>
          <div className="card-body pt-0">
            <div className="form-group">
              <label>Link</label>
              <div className="input-group">
                <TextBox className="form-control"
                         value={leagueInviteCodeUrl}
                         disabled={true}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary"
                          type="button" onClick={() => {
                    navigator.clipboard.writeText(leagueInviteCodeUrl)
                    return toast({
                      title: 'Link copiato',
                      status: 'success',
                      duration: 3000,
                      isClosable: false,
                    });
                  }}>
                    Copia
                  </button>
                  <WhatsappShareButton className="ml-2" url={leagueInviteCodeUrl}>
                    <WhatsappIcon size={24} round/>
                  </WhatsappShareButton>
                  <FacebookShareButton className="ml-2" url={leagueInviteCodeUrl}>
                    <FacebookIcon size={24} round/>
                  </FacebookShareButton>
                  <TelegramShareButton className="ml-2" url={leagueInviteCodeUrl}>
                    <TelegramIcon size={24} round/>
                  </TelegramShareButton>
                </div>
                {this.state.emailExist !== undefined && !this.state.emailExist &&
                <div className={"ErrorLabel"}>Email non trovata</div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="card card-custom card-stretch gutter-b">
          <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">Invita partecipanti</h3>
          </div>
          <div className="card-body pt-0">
            <div className="form-group">
              <label>Email
                <span className="text-danger">*</span></label>
              <div className="input-group">
                <TextBox className="form-control" placeholder="Inserisci l'email della persona che vuoi invitare"
                         value={this.state.playerEmailToInvite}
                         valid={this.state.isEmailValid && this.state.isEmailCompiled && this.state.emailExist}
                         onChange={(value) => {
                           let isEmailValid = regexpEmail.test(value);
                           this.setState({
                             playerEmailToInvite: value,
                             isEmailCompiled: true,
                             isEmailValid: isEmailValid
                           })
                           if (isEmailValid) {
                             this.checkUserExistence(value);
                           }
                         }}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button" onClick={this.sendEmailInviteToPlayer}>Invia
                  </button>
                </div>
                {this.state.emailExist !== undefined && !this.state.emailExist &&
                <div className={"ErrorLabel"}>Email non trovata</div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="card card-custom card-stretch gutter-b">

          <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">Lista partecipanti</h3>
          </div>

          <div className="card-body pt-0">

            <div className="row align-items-center mb-6">

              <div className="col-md-4 my-2 my-md-0">
                <div className="input-icon">
                  <TextBox className="form-control" placeholder="Ricerca"
                           value={this.state.searchText}
                           onChange={(value) =>
                             this.setState(
                               {
                                 searchQuery:
                                   [
                                     {name: {$regex: value, $options: 'i'}},
                                     {surname: {$regex: value, $options: 'i'}},
                                     {email: {$regex: value, $options: 'i'}},
                                     {username: {$regex: value, $options: 'i'}},
                                   ],
                                 searchText: value
                               })}/>
                  <span>
                            <i className="flaticon2-search-1 text-muted"/>
                          </span>
                </div>
              </div>

              <div className="col-md-4 my-2 my-md-0">
                <div className="d-flex align-items-center">
                  <label className="mr-3 mb-0 d-none d-md-block">Stato:</label>
                  <select onChange={(e) => this.setState({status: e.target.value})} className="form-control">
                    <option value="">Tutti</option>
                    <option value="ACTIVE">Attivo</option>
                    <option value="PENDING">In attesa</option>
                    <option value="TO_ACCEPT">Da accettare</option>
                  </select>
                </div>
              </div>

              <div className="col-md-1 my-2 my-md-0">
                <div className="d-flex align-items-center">
                  <button onClick={this.getUserLeagueList}
                          className="btn btn-light-primary px-6 font-weight-bold">Cerca
                  </button>
                </div>
              </div>

              <div className="col-md-2 my-2 my-md-0">
                <div className="d-flex align-items-center">
                  <a onClick={() => this.setState({
                    searchQuery: undefined,
                    searchText: undefined,
                    status: undefined
                  }, this.getUserLeagueList)}
                     className="px-6 font-weight-bold cursor-pointer">Reset
                  </a>
                </div>
              </div>

            </div>

            <TableAdvanced
              columns={columns}
              data={this.state.userLeagueList}
              sizePerPage={sizePerPage}
              totalCount={this.state.totalCount}
              onTableChange={(type, {
                page,
                sizePerPage
              }) => this.setState({selectedPage: page}, () => this.getUserLeagueList())}/>

          </div>

        </div>

      </div>
    );
  }

  checkUserExistence(email) {
    Request.api("GET", "/api/user/exist",
      {email: email, isRegistrationComplete: true},
      (response) => this.setState({emailExist: response.exist}),
      () => console.log("Error"))
  }

  sendEmailInviteToPlayer() {
    if (this.state.isEmailCompiled && this.state.isEmailValid && this.state.emailExist)
      Request.authenticatedApi("POST", "/api/user/invite",
        {email: this.state.playerEmailToInvite, league: this.props.league},
        (response) => this.setState({
          playerEmailToInvite: undefined,
          isEmailValid: undefined,
          isEmailCompiled: undefined
        }),
        () => console.log("Error"))
  }

  changeUserStatus(username: string, status: string) {
    Request.authenticatedApi("POST", "/api/user/status",
      {username: username, league_name: this.props.league, status: status},
      (response) => this.getUserLeagueList(),
      () => console.log("Error"))
  }

  changeUserRole(username: string, role: string) {
    Request.authenticatedApi("POST", "/api/user/role",
      {username: username, league_name: this.props.league, role: role},
      (response) => this.getUserLeagueList(),
      () => console.log("Error"))
  }

  getUserLeagueList() {
    Request.authenticatedApi("POST", "/api/user/",
      {
        league_name: this.props.league,
        limit: sizePerPage,
        skip: sizePerPage * (this.state.selectedPage - 1),
        search: this.state.searchQuery,
        status: this.state.status
      },
      (response) => this.setState({userLeagueList: response.users, totalCount: response.totalCount}),
      () => window.location.href = "/Leghe?name=" + this.props.league)
  }

  getLeagueData() {
    Request.authenticatedApi("GET", "/api/league/",
      {name: this.props.league},
      (response) => this.setState({leagueData: response}),
      () => window.location.href = "/Leghe?name=" + this.props.league)
  }
}

export default PlayerManagement;