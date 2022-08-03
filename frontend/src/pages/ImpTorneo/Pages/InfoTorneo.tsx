import React, {PureComponent} from 'react';
import {Accordion, Card }from 'react-bootstrap';
import UserInfo from "../../../lib/UserInfo";

import TextBox from "../../../components/TextBox";

export interface Props {
}

interface State {
}

class InfoTorneo extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <div className="card card-custom">
            
            <div className="card-header py-3">
                <div className="card-title align-items-start flex-column">
                    <h3 className="card-label font-weight-bolder text-dark">Impostazioni Torneo</h3>
                    <span className="text-muted font-weight-bold font-size-sm mt-1">Cambia le impostazioni del tuo torneo</span>
                </div>
            </div>
            
            <div className="card-body">
                <Accordion className="accordion accordion-light accordion-toggle-arrow">
                    <Card className="card">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                            <div className="card-title">
                                Impostazioni iniziali Torneo
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" className="collapse">
                            <form className="form">
                                <div className="card-body">
                                    <div className="alert alert-custom alert-light-dark fade show mb-10" role="alert">
                                        <div className="alert-icon">
                                            <span className="svg-icon svg-icon-3x svg-icon-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                        <rect fill="#000000" x="11" y="10" width="2" height="7" rx="1" />
                                                        <rect fill="#000000" x="11" y="7" width="2" height="2" rx="1" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="alert-text font-weight-bold">
                                        Queste impostazioni si possono modificare entro la fine della prima giornata selezionata per l'inizio del torneo,
                                        una volta calcolata la prima giornata queste impostazioni non possono essere piu modificate.
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-form-label text-alert">Nome Torneo</label>
                                        <div className="col-lg-9 col-xl-6">
                                            <input type="text" className="form-control form-control-lg form-control-solid"  value="Nome Torneo"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Campionato</label>
                                        <div className="col-lg-9 col-xl-6">
                                            <select className="form-control form-control-lg form-control-solid">
                                                <option>Select Championship...</option>
                                                <option value="en">Premier League</option>
                                                <option value="it">Seria A</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Giornata d'inizio</label>
                                        <div className="col-lg-9 col-xl-6">
                                            <select className="form-control form-control-lg form-control-solid">
                                                <option>Select Championship Day...</option>
                                                <option value="en">10</option>
                                                <option value="it">11</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-toolbar">
                                        <button type="reset" className="btn btn-primary mr-2">Salva Modifiche</button>
                                    </div>
                                </div>
                            </form>
                        </Accordion.Collapse>
                    </Card>
                               
                    <Card className="card">
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="card-header">
                            <div className="card-title">
                                Attiva Torneo
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" className="collapse">
                            <form className="form">
                                <div className="card-body">
                                    <div className="alert alert-custom alert-light-primary fade show" role="alert">
                                        <div className="alert-icon">
                                            <i className="flaticon-alert"></i>
                                        </div>
                                        <div className="alert-text font-weight-bold">
                                        Una volta attivato il torneo, gli utenti possono inserire la selezione della gioranta.<br/>
                                        Una volta calcolata la prima giornata questa impostazione non sarà più accessibile.
                                        </div>
                                    </div>
                                    <div className="card-toolbar">
                                        <button type="reset" className="btn btn-primary mr-2">Attiva Torneo</button>
                                    </div>
                                </div>
                            </form>
                        </Accordion.Collapse>
                    </Card>

                    <Card className="card">
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="card-header">
                            <div className="card-title">
                                Elimina Torneo
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2" className="collapse">
                            <form className="form">
                                <div className="card-body">
                                    <div className="alert alert-custom alert-light-danger fade show" role="alert">
                                        <div className="alert-icon">
                                            <i className="flaticon-warning"></i>
                                        </div>
                                        <div className="alert-text font-weight-bold">
                                        E' possibile eliminare il torneo entro la fine della prima giornata selezionata per l'inizio del torneo,
                                        una volta calcolata la prima giornata queste impostazioni non possono essere piu modificate.
                                        </div>
                                    </div>
                                    <div className="card-toolbar">
                                        <button type="reset" className="btn btn-danger mr-2">Elimina Torneo</button>
                                    </div>
                                </div>
                            </form>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            
        </div>
        );
    }
}

export default InfoTorneo;