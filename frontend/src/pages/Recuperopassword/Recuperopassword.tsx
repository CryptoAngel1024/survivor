import React, {PureComponent} from 'react';

import TextBox from "../../components/TextBox";
import Request from "../../lib/Request";
import history from "../../lib/history";

export interface Props {
    onRecPsw?: (body) => any,
}

interface State {
    email: string;
    isEmailValid: boolean;
    isEmailCompiled: boolean;
}

const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

class Recuperopassword extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
          email: undefined,
          isEmailValid: undefined,
          isEmailCompiled: undefined
        }
    
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
    
      }

    render() {
        return (
        <>
            <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
                <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex align-items-center flex-wrap mr-1">
                        <div className="d-flex align-items-baseline flex-wrap mr-5">
                            <h5 className="text-dark font-weight-bold my-1 mr-5">Recupero password</h5>
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
                                    <h3 className="card-title">Recupera la password di Survivor!</h3>
                                </div>
                                <form className="form" id="kt_login_signup_form">
                                    <div className="card-body">
                                        <div className="form-group mb-8">
                                            <div className="alert alert-custom alert-default" role="alert">
                                                <div className="alert-icon">
                                                    <span className="svg-icon svg-icon-primary svg-icon-xl">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24" />
                                                                <path d="M7.07744993,12.3040451 C7.72444571,13.0716094 8.54044565,13.6920474 9.46808594,14.1079953 L5,23 L4.5,18 L7.07744993,12.3040451 Z M14.5865511,14.2597864 C15.5319561,13.9019016 16.375416,13.3366121 17.0614026,12.6194459 L19.5,18 L19,23 L14.5865511,14.2597864 Z M12,3.55271368e-14 C12.8284271,3.53749572e-14 13.5,0.671572875 13.5,1.5 L13.5,4 L10.5,4 L10.5,1.5 C10.5,0.671572875 11.1715729,3.56793164e-14 12,3.55271368e-14 Z" fill="#000000" opacity="0.3" />
                                                                <path d="M12,10 C13.1045695,10 14,9.1045695 14,8 C14,6.8954305 13.1045695,6 12,6 C10.8954305,6 10,6.8954305 10,8 C10,9.1045695 10.8954305,10 12,10 Z M12,13 C9.23857625,13 7,10.7614237 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,10.7614237 14.7614237,13 12,13 Z" fill="#000000" fill-rule="nonzero" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="alert-text">
                                                    Inserisci la mail che hai utilizzato in fase di registrazione, 
                                                    ti invieremo le istruzioni per recuperare la password.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email con la quale ti sei iscritto
                                            <span className="text-danger"></span></label>
                                            <TextBox type="email" className="form-control" placeholder="Inserisci email"
                                                    value={this.state.email}
                                                    valid={this.state.isEmailValid && this.state.isEmailCompiled}
                                                    onChange={(value) => this.setState({
                                                    email: value,
                                                    isEmailCompiled: true,
                                                    isEmailValid: regexpEmail.test(value)
                                                    })}/>
                                        </div>
                                        <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                                            <button type="button" id="kt_login_signup_submit"
                                                    className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                                                    onClick={this.validateAndSubmit}>Recupera
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
                                                <rect x="0" y="0" width="24" height="24" />
                                                <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5" />
                                                <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5" />
                                                <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5" />
                                                <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 d-block">00000</span>
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
        let isEmailValid = !!this.state.email && regexpEmail.test(this.state.email);
        this.setState(
          {
            isEmailValid: isEmailValid, isEmailCompiled: !!this.state.email
          })
        if (isEmailValid)
            Request.api("POST", "/api/user/forgotpassword",
              {
                  email: this.state.email
              },
              () => history.push("/Home"),
              () => console.log("Error")
            );
      }

}

export default Recuperopassword;
