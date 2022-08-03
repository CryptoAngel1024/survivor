import React, {PureComponent} from 'react';
import UserInfo from "../../lib/UserInfo";
import TournamentMenu from "../../components/TournamentMenu";
import ImgAccordion from "../../icon/ImgAccordion";
import {Accordion, Card } from 'react-bootstrap';
import TableAdvanced from "../../components/TableAdvanced";


export interface Props {
    urlParams: any;
}

interface State {

}

class TournamentResult extends PureComponent<Props, State> {
    render() {
        let columns = [
            {
              dataField: "username",
              text: "Username",
              sort: true,
              style: {
                minWidth: "130px",
                maxWidth: "130px",
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
              dataField: "team",
              text: "Scelta",
              style: {
                minWidth: "130px",
                maxWidth: "130px",
              }
            },
            {
                dataField: "esito",
                text: "Esito",
                style: {
                  minWidth: "130px",
                  maxWidth: "130px",
                }
            }
          ];
          let users = [{
              username: "user2asasA ",
              name: "aaaaaa",
              surname: "bbbbbb",
              team: "INTER",
              esito: "V"
          }, {
              username: "user1",
              name: "aaaaaa",
              surname: "bbbbbb",
              team: "JUVENTUS",
              esito: "V"
          }
          ];
        return (
        <>
            <TournamentMenu/>

            <div className="d-flex flex-column-fluid">
                
                <div className="container">

                    <div className="row">
                        
                        <div className="col-lg-9">

                            <div className="card card-custom gutter-b">
                                
                                <div className="card-header border-0 pt-5">
                                    <div className="card-title">
                                        <div className="card-label">
                                            <div className="font-weight-bolder">Risultati del torneo</div>
                                            <div className="font-size-sm text-muted mt-2">Clicca sulla giornata per vedere le scelte effettuate da ogni singolo partecipante</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card-body ">

                                    <Accordion className="accordion accordion-light accordion-light-borderless accordion-svg-toggle">
                                        
                                        <Card className="card">
                                            <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                                                <div className="card-title">
                                                    <span className="svg-icon svg-icon-primary">
                                                        <ImgAccordion/>
                                                    </span>
                                                    <div className="card-label ml-5">
                                                        1° NomeTorneo - 7° Serie A
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            <TableAdvanced
                                                                columns={columns}
                                                                data={users}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card className="card">
                                            <Accordion.Toggle as={Card.Header} eventKey="1" className="card-header">
                                                <div className="card-title">
                                                    <span className="svg-icon svg-icon-primary">
                                                        <ImgAccordion/>
                                                    </span>
                                                    <div className="card-label ml-5">
                                                        2° NomeTorneo - 8° Serie A
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            <TableAdvanced
                                                                columns={columns}
                                                                data={users}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card className="card">
                                            <Accordion.Toggle as={Card.Header} eventKey="2" className="card-header">
                                                <div className="card-title">
                                                    <span className="svg-icon svg-icon-primary">
                                                        <ImgAccordion/>
                                                    </span>
                                                    <div className="card-label ml-5">
                                                        3° NomeTorneo - 9° Serie A
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            <TableAdvanced
                                                                columns={columns}
                                                                data={users}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>

                                </div>

                            </div>

                        </div>
                        
                        <div className="col-lg-3">

                            <div className="card card-custom bg-danger  gutter-b">
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

                            <div className="card card-custom bg-primary gutter-b">
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

                            <div className="card card-custom bg-success gutter-b">
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

}

export default TournamentResult;
