import React, {PureComponent} from 'react';
import Request from "../../lib/Request";


export interface Props {
  urlParams: any;
}

interface State {
  isConfirmationCodeValid: boolean
}

class ConfirmationEmail extends PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmationCodeValid: true
    }

    this.userEmailConfirmation = this.userEmailConfirmation.bind(this);

  }

  componentDidMount() {
    if (this.props.urlParams.email && this.props.urlParams.confirmationCode)
      this.userEmailConfirmation();
  }


  render() {
    return (
      <>
        <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
          <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <div className="d-flex align-items-center flex-wrap mr-1">
              <div className="d-flex align-items-baseline flex-wrap mr-5">
                <h5 className="text-dark font-weight-bold my-1 mr-5">Conferma Email di Registrazione</h5>
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
                    <h3 className="card-title">Benvenuto in Survivor!</h3>
                  </div>
                  {this.state.isConfirmationCodeValid ?
                    <div className="card-body">
                      <h3>Grazie per esserti iscritto nella nostra comunity!</h3>
                      <blockquote className="blockquote">
                        <p className="mb-0">
                          I dati della registrazione sono i seguenti:
                        </p>
                        <p className="mb-0">
                          MAIL: {this.props.urlParams.email}
                        </p>
                        <p className="mb-0">
                          ID: {this.props.urlParams.confirmationCode}
                        </p>
                      </blockquote>
                    </div> :
                    <div className="card-body">
                      <h3>Ops! Qualcosa è andato storto</h3>
                    </div>
                  }
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


  userEmailConfirmation() {
    Request.api("POST", "/api/user/confirmation",
      {
        email: this.props.urlParams.email,
        confirmation_code: this.props.urlParams.confirmationCode
      },
      () => this.setState({isConfirmationCodeValid: true}),
      () => this.setState({isConfirmationCodeValid: false}))
  }
}

export default ConfirmationEmail;
