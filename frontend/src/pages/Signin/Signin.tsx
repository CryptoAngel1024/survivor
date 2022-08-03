import React, {PureComponent} from 'react';

import TextBox from "../../components/TextBox";
import DatePicker from "../../components/DatePicker";
import Request from "../../lib/Request";
import history from "../../lib/history";

export interface Props {
  urlParams: any;
}

interface State {
  name: string;
  surname: string;
  username: string;
  dateBirth: any;
  email: string;
  telephone: string;
  favouriteTeam: string;
  password: string;
  passwordCopy: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isNameCompiled: boolean;
  isSurnameCompiled: boolean;
  isUsernameCompiled:boolean;
  isUsernameValid:boolean;
  usernameExist:boolean;
  isDateCompiled: boolean;
  isPasswordCompiled: boolean;
  isEmailCompiled: boolean;
  isTelephoneCompiled: boolean;
  emailExist: boolean;
  isTermChecked: boolean;
  isTelephoneValid: boolean;
}

const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const regexpPassword = /^(?=.*[a-zA-Z])(?!.*(.)\1{2})[\w!@#$%^&*]{8,}$/;
const regexpUsername = /^[a-zA-Z0-9]{6,}$/;
const regexTelephone = /^(\+?\d*)$/;

class Signin extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.urlParams.name,
      surname: this.props.urlParams.surname,
      dateBirth: undefined,
      email: this.props.urlParams.email,
      username: undefined,
      password: undefined,
      passwordCopy: undefined,
      isEmailValid: undefined,
      isUsernameValid:undefined,
      isPasswordValid: undefined,
      isNameCompiled: undefined,
      isUsernameCompiled:undefined,
      usernameExist:false,
      isSurnameCompiled: undefined,
      isDateCompiled: undefined,
      isPasswordCompiled: undefined,
      isEmailCompiled: undefined,
      isTelephoneCompiled: undefined,
      telephone: undefined,
      favouriteTeam: undefined,
      emailExist: false,
      isTermChecked: undefined,
      isTelephoneValid: undefined,
    }

    this.validateAndSubmit = this.validateAndSubmit.bind(this);
    this.checkUserExistence = this.checkUserExistence.bind(this);
    this.checkUserExistenceByUsername = this.checkUserExistenceByUsername.bind(this);
  }

  render() {
    return (
      <>
        <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
          <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <div className="d-flex align-items-center flex-wrap mr-1">
              <div className="d-flex align-items-baseline flex-wrap mr-5">
                <h5 className="text-dark font-weight-bold my-1 mr-5">Registrazione Utente</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="card card-custom gutter-b example example-compact">
                  <div className="card-header">
                    <h3 className="card-title">Registrati a Survivor!</h3>
                  </div>
                  <form className="form" id="kt_login_signup_form">
                    <div className="card-body">
                      <div className="form-group mb-8">
                        <div className="alert alert-custom alert-default" role="alert">
                          <div className="alert-icon">
                            <span className="svg-icon svg-icon-primary svg-icon-xl">
                                <svg width="24px" height="24px" viewBox="0 0 24 24"
                                      version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none"
                                        fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <path
                                          d="M7.07744993,12.3040451 C7.72444571,13.0716094 8.54044565,13.6920474 9.46808594,14.1079953 L5,23 L4.5,18 L7.07744993,12.3040451 Z M14.5865511,14.2597864 C15.5319561,13.9019016 16.375416,13.3366121 17.0614026,12.6194459 L19.5,18 L19,23 L14.5865511,14.2597864 Z M12,3.55271368e-14 C12.8284271,3.53749572e-14 13.5,0.671572875 13.5,1.5 L13.5,4 L10.5,4 L10.5,1.5 C10.5,0.671572875 11.1715729,3.56793164e-14 12,3.55271368e-14 Z"
                                          fill="#000000" opacity="0.3"/>
                                        <path
                                          d="M12,10 C13.1045695,10 14,9.1045695 14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 C10,9.1045695 10.8954305,10 12,10 Z M12,13 C9.23857625,13 7,10.7614237 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,10.7614237 14.7614237,13 12,13 Z"
                                          fill="#000000" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </span>
                          </div>
                          <div className="alert-text">
                            Inserisci i dati per registrarti a survivor!
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Nome
                          <span className="text-danger">*</span></label>
                        <TextBox className="form-control" placeholder="Inserisci il nome"
                                 value={this.state.name}
                                 valid={this.state.isNameCompiled}
                                 onChange={(value) => this.setState({name: value, isNameCompiled: true})}/>
                      </div>
                      <div className="form-group">
                        <label>Cognome
                          <span className="text-danger">*</span></label>
                        <TextBox className="form-control" placeholder="Inserisci il cognome"
                                 value={this.state.surname}
                                 valid={this.state.isSurnameCompiled}
                                 onChange={(value) => this.setState({surname: value, isSurnameCompiled: true})}/>
                      </div>
                      <div className="form-group">
                        <label>Data di nascita
                          <span className="text-danger">*</span></label>
                        <div className="input-group date">
                          <DatePicker className="form-control"
                                      date={this.state.dateBirth}
                                      handleChange={(date: Date = undefined) => this.setState({
                                        dateBirth: date === undefined ? new Date() : new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON(),
                                        isDateCompiled: this.state.isDateCompiled
                                      })}
                                      valid={this.state.isDateCompiled}
                                      maxDate={new Date()}
                                      placeholderText={"Inserisci data di nascita"}/>
                          <div className="input-group-append">
                                                        <span className="input-group-text">
                                                        <i className="la la-calendar-check-o"></i>
                                                        </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email
                          <span className="text-danger">*</span></label>
                        <TextBox type="email" className="form-control" placeholder="Inserisci email"
                                 value={this.state.email}
                                 valid={this.state.isEmailValid && this.state.isEmailCompiled && !this.state.emailExist}
                                 onChange={(value) => {
                                   let isEmailValid = regexpEmail.test(value);
                                   this.setState({
                                     email: value,
                                     isEmailCompiled: true,
                                     isEmailValid: isEmailValid
                                   })
                                   if (isEmailValid) {
                                     this.checkUserExistence(value);
                                   }
                                 }}/>
                        {this.state.emailExist &&
                        <div className={"ErrorLabel"}>Email già esistente</div>
                        }
                      </div>
                      <div className="form-group">
                        <label>Telefono
                          <span className="text-danger">*</span></label>
                        <TextBox className="form-control" placeholder="Inserisci telefono"
                                 value={this.state.telephone}
                                 valid={this.state.isTelephoneValid && this.state.isTelephoneCompiled}
                                 onChange={(telephone) => {
                                   let isTelephoneValid = regexTelephone.test(telephone);
                                   this.setState({telephone: telephone, isTelephoneCompiled: true, isTelephoneValid: isTelephoneValid})
                                 }}
                        />
                      </div>
                      <div className="form-group">
                        <label>Squadra preferita
                          <span className="text-danger"></span></label>
                        <TextBox className="form-control" placeholder="Inserisci squadra preferita"
                                 value={this.state.favouriteTeam}
                                 onChange={(favouriteTeam) => this.setState({favouriteTeam: favouriteTeam})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Username
                          <span className="text-danger">*</span></label>
                        <TextBox type="username" className="form-control" placeholder="Inserisci username"
                                 value={this.state.username}
                                 valid={this.state.isUsernameValid && this.state.isUsernameCompiled && !this.state.usernameExist}
                                 onChange={(value) => {
                                  let isUsernameValid = regexpUsername.test(value);
                                   this.setState({
                                    username: value,
                                    isUsernameCompiled: true,
                                    isUsernameValid: isUsernameValid
                                  })
                                  if(isUsernameValid){
                                    this.checkUserExistenceByUsername(value);
                                  }
                                }}/>
                        {this.state.usernameExist &&
                        <div className={"ErrorLabel"}>Username già esistente</div>
                        }
                        <div className="text-muted">Minimo 6 caratteri alfanumerici</div>
                      </div>
                      <div className="form-group">
                        <label>Password
                          <span className="text-danger">*</span></label>
                        <TextBox type="password" className="form-control" placeholder="Inserisci password"
                                 value={this.state.password}
                                 valid={this.state.isPasswordCompiled && this.state.isPasswordValid && (this.state.passwordCopy && this.state.passwordCopy === this.state.password)}
                                 onChange={(value) => this.setState({
                                   password: value,
                                   isPasswordCompiled: true,
                                   isPasswordValid: regexpPassword.test(value)
                                 })}/>
                        <div className="text-muted">Minimo 8 caratteri, almeno un numero e una lettera</div>
                      </div>
                      <div className="form-group">
                        <label> Conferma Password
                          <span className="text-danger">*</span></label>
                        <TextBox type="password" className="form-control" placeholder="Inserisci di nuovo password"
                                 value={this.state.passwordCopy}
                                 valid={this.state.passwordCopy && this.state.passwordCopy === this.state.password}
                                 onChange={(value) => this.setState({passwordCopy: value})}/>
                      </div>
                      <div className="form-group">
                        <label className="checkbox mb-0">
                          <input type="checkbox" name="agree" onChange={e => this.setState({isTermChecked: e.target.checked})}/>
                          <span></span>
                          <div className="ml-2">Accetto i&nbsp;
                            <a href="#">termini e le condizioni</a>.
                          </div>
                        </label>
                        {this.state.isTermChecked === false ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">Accettare i termini e le condizioni</div>
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                        <button type="button" id="kt_login_signup_submit"
                                className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                                onClick={this.validateAndSubmit}>Registrati
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-custom bg-danger card-stretch gutter-b">
                  <div className="card-body">
                                    <span className="svg-icon svg-icon-2x svg-icon-white">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16"
                                                      rx="1.5"/>
                                                <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5"/>
                                                <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5"/>
                                                <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5"/>
                                            </g>
                                        </svg>
                                    </span>
                    <span
                      className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 d-block">00000</span>
                    <span className="font-weight-bold text-white font-size-sm">PUBBLICITA'</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  validateAndSubmit() {
    let isEmailValid = !!this.state.email && regexpEmail.test(this.state.email) && !this.state.emailExist;
    let isPasswordValid = !!this.state.password && this.state.password === this.state.passwordCopy && regexpPassword.test(this.state.password);
    let isUsernameValid= !!this.state.username && regexpUsername.test(this.state.username) && !this.state.usernameExist;
    let isTelephoneValid= !!this.state.telephone && regexTelephone.test(this.state.telephone);
    this.setState(
      {
        isEmailValid: isEmailValid, isPasswordValid: isPasswordValid,
        isUsernameValid: isUsernameValid,
        isNameCompiled: !!this.state.name, isSurnameCompiled: !!this.state.surname,
        isUsernameCompiled:!!this.state.username,
        isDateCompiled: !!this.state.dateBirth, isEmailCompiled: !!this.state.email,
        isPasswordCompiled: !!this.state.password,
        isTelephoneCompiled: !!this.state.telephone,
        isTermChecked: !(this.state.isTermChecked === undefined || this.state.isTermChecked === false),
        isTelephoneValid: isTelephoneValid
      })
    if (isEmailValid && isPasswordValid && isUsernameValid && this.state.name && this.state.surname &&
      this.state.dateBirth && this.state.telephone && this.state.username && this.state.isTermChecked && isTelephoneValid)
      Request.api("POST", "/api/user/create",
        {
          name: this.state.name, surname: this.state.surname,
          dateBirth: this.state.dateBirth, email: this.state.email, username:this.state.username,
          password: this.state.password, telephone: this.state.telephone,
          favouriteTeam: this.state.favouriteTeam
        },
        () => history.push("/Home"),
        () => console.log("Error"))
  }

  checkUserExistence(email) {
    Request.api("GET", "/api/user/exist",
      {email: email},
      (response) => this.setState({emailExist: response.exist}),
      () => console.log("Error"))
  }

  checkUserExistenceByUsername(username) {
    Request.api("GET", "/api/user/exist/username",
      {username: username},
      (response) => this.setState({usernameExist: response.exist}),
      () => console.log("Error"))
  }

}

export default Signin;
