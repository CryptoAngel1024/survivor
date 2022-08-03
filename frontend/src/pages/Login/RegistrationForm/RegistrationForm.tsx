import React, {PureComponent} from 'react';
import TextBox from "../../../components/TextBox";
import DatePicker from "../../../components/DatePicker";

export interface Props {
  onSignUpSubmit?: (body) => any,
  changeView?: (view: string) => any,
}

interface State {
  name: string;
  surname: string;
  dateBirth: any;
  email: string;
  password: string;
  passwordCopy: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isNameCompiled: boolean;
  isSurnameCompiled: boolean;
  isDateCompiled: boolean;
  isPasswordCompiled: boolean;
  isEmailCompiled: boolean;
}

const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const regexpPassword = /^(?=.*[a-z])(?!.*(.)\1{2})[\w!@#$%^&*]{8,}$/;

class RegistrationForm extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      surname: undefined,
      dateBirth: undefined,
      email: undefined,
      password: undefined,
      passwordCopy: undefined,
      isEmailValid: undefined,
      isPasswordValid: undefined,
      isNameCompiled: undefined,
      isSurnameCompiled: undefined,
      isDateCompiled: undefined,
      isPasswordCompiled: undefined,
      isEmailCompiled: undefined
    }

    this.validateAndSubmit = this.validateAndSubmit.bind(this);

  }

  render() {
    return (
      <div className="login-form login-signup">
        <form className="form" id="kt_login_signup_form">
          <div className="pb-13 pt-lg-0 pt-5">
            <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Registrazione</h3>
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
            <label>Nome
              <span className="text-danger">*</span></label>
            <TextBox className="form-control" placeholder="Inserisci il nome"
                     value={this.state.name}
                     valid={this.state.isNameCompiled}
                     onChange={(value) => this.setState({name: value, isNameCompiled: true})}/>
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
                     valid={this.state.isEmailValid && this.state.isEmailCompiled}
                     onChange={(value) => this.setState({
                       email: value,
                       isEmailCompiled: true,
                       isEmailValid: regexpEmail.test(value)
                     })}/>
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
              <input type="checkbox" name="agree"/>
              <span></span>
              <div className="ml-2">Accetto i&nbsp;
                <a href="#">termini e le condizioni</a>.
              </div>
            </label>
          </div>
          <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
            <button type="button" id="kt_login_signup_submit"
                    className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                    onClick={this.validateAndSubmit}>Invia
            </button>
            <button type="button" id="kt_login_signup_cancel"
                    className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                    onClick={() => this.props.changeView("loginOn")}>Torna al login
            </button>
          </div>
        </form>
      </div>
    )
  }

  validateAndSubmit() {
    let isEmailValid = !!this.state.email && regexpEmail.test(this.state.email);
    let isPasswordValid = !!this.state.password && this.state.password === this.state.passwordCopy && regexpPassword.test(this.state.password);
    this.setState(
      {
        isEmailValid: isEmailValid, isPasswordValid: isPasswordValid,
        isNameCompiled: !!this.state.name, isSurnameCompiled: !!this.state.surname,
        isDateCompiled: !!this.state.dateBirth, isEmailCompiled: !!this.state.email,
        isPasswordCompiled: !!this.state.password
      })
    if (isEmailValid && isPasswordValid && this.state.name && this.state.surname && this.state.dateBirth)
      return this.props.onSignUpSubmit(
        {
          name: this.state.name, surname: this.state.surname,
          dateBirth: this.state.dateBirth, email: this.state.email,
          password: this.state.password
        })
  }
}

export default RegistrationForm;