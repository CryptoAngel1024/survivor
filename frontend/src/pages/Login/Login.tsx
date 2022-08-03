import React, {PureComponent} from 'react';
import Request from '../../lib/Request';
import UserInfo from "../../lib/UserInfo";
import history from "../../lib/history";

//css metronic
import './css/login-1.css';
import LoginVisual from "../../icon/LoginVisual";
import TextBox from "../../components/TextBox";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

export interface Props {
  urlParams: any;
}

interface State {
  username: any;
  password: any;
  loginValid: boolean;
  loginOn: boolean;
  signupOn: boolean;
  forgotOn: boolean;
}



class Login extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginValid: undefined,
      loginOn: true,
      signupOn: false,
      forgotOn: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeView = this.changeView.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
  }

  componentDidMount() {
    if (this.props.urlParams.token)
      this.tryLogin();
    if (this.props.urlParams.error)
      this.setState({loginValid: false})
  }


  render() {
    return (
        <div className="d-flex flex-column flex-root">
          <div className={`login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white
            ${this.state.loginOn ? "login-signin-on" : this.state.signupOn ? "login-signup-on" : this.state.forgotOn ? "login-forgot-on" : ""}            
          `}
          id="kt_login">
          <div className="login-aside d-flex flex-column flex-row-auto background1 cancelview">
            <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
              <h3 className="font-weight-bolder text-center font-size-h4 font-size-h1-lg h3color">
                Scopri il nuovissimo gioco
                <br/>SURVIVOR</h3>
            </div>
            <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center">
              <LoginVisual/>
            </div>
          </div>
          <div className="login-content flex-row-fluid d-flex flex-column justify-content-center
                    position-relative overflow-hidden p-7 mx-auto">
            <div className="d-flex flex-column-fluid flex-center">
              <div className="login-form login-signin">
                <form className="form"
                      id="kt_login_signin_form"
                      onSubmit={this.onFormSubmit}>
                  <div className="pb-13 pt-lg-0 pt-5">
                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                      Benvenuto in Survivor
                    </h3>
                    <span className="text-muted font-weight-bold font-size-h4">Non sei registrato?
                                        <a href="#"
                                           id="kt_login_signup"
                                           className="text-primary font-weight-bolder"
                                           onClick={() => this.changeView("signUp")}
                                        >&nbsp; Crea un account
                                        </a>
                                        </span>
                  </div>
                  <div className="form-group">
                    <label className="font-size-h6 font-weight-bolder text-dark">
                      Email
                    </label>
                    <TextBox className={`form-control form-control-solid h-auto py-6 px-6 rounded-lg`}
                             value={this.state.username}
                             autocomplete="username"
                             valid={this.state.loginValid}
                             onChange={(value) => this.setState({username: value})}
                             />
                    {this.state.loginValid != undefined && this.state.loginValid == false &&
                    <div className={"ErrorLabel"}>Username non valido</div>
                    }
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between mt-n5">
                      <label className="font-size-h6 font-weight-bolder text-dark pt-5">
                        Password
                      </label>
                      <a className="link text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                           onClick={() => this.changeView("forgotOn")}>
                        Password Dimenticata?
                      </a>
                    </div>
                    <TextBox className={`form-control form-control-solid h-auto py-6 px-6 rounded-lg`}
                             value={this.state.password}
                             autocomplete="password"
                             type={"password"}
                             valid={this.state.loginValid}
                             onChange={(value) => this.setState({password: value})}
                    />
                    {this.state.loginValid != undefined && this.state.loginValid == false &&
                    <div className={"ErrorLabel"}>Password non valida</div>
                    }
                  </div>
                  <div className="pb-lg-0 pb-5">
                    <button type={"submit"}
                            id="kt_login_signin_submit"
                            className="btn btn-primary font-weight-bolder font-size-h6 px-8
                                                py-4 my-3 mr-3"
                    >
                      Accedi
                    </button>
                    <button type="button"
                            className="btn btn-light-primary font-weight-bolder px-8
                                                py-4 my-3 font-size-lg"
                                                onClick={() => window.location.href="http://localhost:3080/oauth/google"}>
                      <span className="svg-icon svg-icon-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                          <path
                                                    d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                                                    fill="#4285F4"/>
                          <path
                                                    d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                                                    fill="#34A853"/>
                          <path
                                                    d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                                                    fill="#FBBC05"/>
                          <path
                                                    d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                                                    fill="#EB4335"/>
                        </svg>
                      </span>Sign in with Google
                    </button>
                    <button type="button"
                            className="btn btn-light-primary font-weight-bolder px-8
                                                py-4 my-3 font-size-lg"
                                                onClick={() => window.location.href="http://localhost:3080/oauth/facebook"}>
                      <span className="svg-icon svg-icon-md">
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" >    
                      <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z">
                        </path>
                        </svg>
                      </span>Sign in with Facebook
                    </button>
                  </div>
                </form>
              </div>
              {this.state.signupOn &&
                <RegistrationForm onSignUpSubmit={this.sendUserRegistration} changeView={this.changeView}/>
              }
              <div className="login-form login-forgot">
                <form className="form" id="kt_login_forgot_form">
                  <div className="pb-13 pt-lg-0 pt-5">
                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Forgotten
                      Password ?</h3>
                    <p className="text-muted font-weight-bold font-size-h4">Enter your email to
                      reset your password</p>
                  </div>
                  <div className="form-group">
                    <input
                        className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6"
                        type="email" placeholder="Email" name="email"/>
                  </div>
                  <div className="form-group d-flex flex-wrap pb-lg-0">
                    <button type="button" id="kt_login_forgot_submit"
                            className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit
                    </button>
                    <button type="button" id="kt_login_forgot_cancel"
                            className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                            onClick={() => this.changeView("loginOn")}
                    >Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-lg-start justify-content-center
                        align-items-end py-7 py-lg-0">
              <div className="text-dark-50 font-size-lg font-weight-bolder mr-10">
                <span className="mr-1">2021©</span>
                <a href="#"
                   target="_blank"
                   className="text-dark-75 text-hover-primary">
                  Survivor
                </a>
              </div>
              <a href="#" className="text-primary font-weight-bolder font-size-lg">
                Terms
              </a>
              <a href="#" className="text-primary ml-5 font-weight-bolder font-size-lg">
                Plans
              </a>
              <a href="#" className="text-primary ml-5 font-weight-bolder font-size-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
  </div>


  )
  }

  onFormSubmit(event) {
    event.preventDefault();

    Request.login(
      this.state.username,
      this.state.password,
      () => history.push("/Home"),
      () => this.setState({loginValid: false})
    );

  }

  changeView(event) {
    this.setState({loginOn: event === "loginOn", signupOn: event === "signUp", forgotOn: event === "forgotOn"});
  }

  sendUserRegistration(body) {
    Request.api("POST", "/api/user/create", body, () => console.log("Done"), () => console.log("Error"))
  }

  tryLogin() {
    Request.getNewTokenFromRefresh(this.props.urlParams.token, () => history.push("/Home"),() => this.setState({loginValid: false}));
  }
}

export default Login;