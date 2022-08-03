import React, {PureComponent} from 'react';
import {createStandaloneToast } from "@chakra-ui/react"

import Request from "../../lib/Request";
import history from "../../lib/history";

export interface Props {
  urlParams: any;
}

interface State {
}

class JoinLeague extends PureComponent<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.sendJoinLeagueData = this.sendJoinLeagueData.bind(this);

  }

  render() {
    return (
      <>
        <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
          <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <div className="d-flex align-items-center flex-wrap mr-1">
              <div className="d-flex align-items-baseline flex-wrap mr-5">
                <h5 className="text-dark font-weight-bold my-1 mr-5">{"Unisciti alla lega"}</h5>
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
                    <h3 className="card-title">Conferma la partecipazione alla lega</h3>
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <h4>Stai per entrare nella lega: <span
                      className="text-info">{this.props.urlParams.leagueName}</span></h4>
                    <button type="button" className="btn btn-primary font-weight-bolder align-self-end"
                            onClick={this.sendJoinLeagueData}>Entra
                    </button>
                  </div>
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

  sendJoinLeagueData() {
    const toast = createStandaloneToast();
    Request.authenticatedApi("POST", "/api/league/join",
        {
          invite_code: this.props.urlParams.leagueInviteCode
        },
        () => history.push("/Home"),
        () => {
          return toast({
            title: 'Link non valido o accesso non effettuato',
            status: 'error',
            duration: 3000,
            isClosable: false,
          });
        }
      );
  }
}

export default JoinLeague;
