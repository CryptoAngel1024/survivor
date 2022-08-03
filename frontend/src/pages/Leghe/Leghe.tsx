import React, {PureComponent} from 'react';
import UserInfo from "../../lib/UserInfo";

import HomeLeagues from "./Pages/HomeLeagues";
import ImpLeagues from "./Pages/ImpLeagues";
import PlayerManagement from "./Pages/PlayerManagement";
import NewTournament from "./Pages/NewTournament";

export interface Props {
    urlParams: any;
}

interface State {
    submenu: boolean;
    homeOn: boolean;
    impOn: boolean;
    gestOn: boolean;
    creaOn: boolean;
    storicoOn: boolean;
    recordOn: boolean;
}

class Leghe extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            submenu: false,
            homeOn: true,
            impOn: false,
            gestOn: false,
            creaOn: false,
            storicoOn: false,
            recordOn: false
        }
        this.showSubmenu = this.showSubmenu.bind(this);
        this.closeSubmenu = this.closeSubmenu.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    render() {
        return (
        <>
            <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
                <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex align-items-center flex-wrap mr-1">
                        <button className="burger-icon burger-icon-left mr-4 d-inline-block d-lg-none"
                         id="kt_subheader_mobile_toggle">
                            <span></span>
                        </button>
                        <div className="d-flex align-items-baseline flex-wrap mr-5">
                            <h5 className="text-dark font-weight-bold my-1 mr-5">Nome Lega</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="btn-group ml-2 seriea-team">
                            <button type="button" className="btn btn-light-dark font-weight-bold dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cambia Lega </button>
                            <div className="dropdown-menu dropdown-menu-sm p-0 m-0 dropdown-menu-right">
                                <ul className="navi py-5">
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="flaticon2-writing"></i>
                                            </span>
                                            <span className="navi-text">Lega N.1</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="flaticon2-medical-records"></i>
                                            </span>
                                            <span className="navi-text">Lega N.2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column-fluid">
                <div className="container">
                    <div className="d-flex flex-row">

                        <div className={`flex-row-auto offcanvas-mobile w-300px w-xl-350px
                        ${this.state.submenu ? "offcanvas-mobile-on" : ""}`}
                        id="kt_profile_aside">
                            <div className="card card-custom">
                                <div className="card-body pt-15">
                                    <div className="text-center mb-10">
                                        <div className="symbol symbol-60 symbol-circle symbol-xl-90">
                                            <span className="symbol-label font-size-h2">TT</span>
                                        </div>
                                        <h4 className="font-weight-bold my-2">Nome Lega</h4>
                                        <div className="text-muted mb-2">Dal 01/02/2021</div>
                                        <div className="text-muted mb-2">Amministratore</div>
                                        <span className="label label-light-warning label-inline font-weight-bold label-lg">Attivo</span>
                                    </div>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block 
                                    ${this.state.homeOn ? "active" : ""}`}
                                    onClick={() => this.changeView("homeOn")}>
                                        Home Page
                                    </a>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.impOn ? "active" : ""}`}
                                    onClick={() => this.changeView("impOn")}>
                                        Impostazioni Lega
                                    </a>
                                    {UserInfo.get("league")?.find((l) => l.name === this.props.urlParams.name && l.role === "OWNER") &&
                                      <a className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.gestOn ? "active" : ""}`}
                                    onClick={() => this.changeView("gestOn")}>
                                        Gestione Partecipanti
                                    </a>}
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.creaOn ? "active" : ""}`}
                                    onClick={() => this.changeView("creaOn")}>
                                        Crea Torneo
                                    </a>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.storicoOn ? "active" : ""}`}
                                    onClick={() => this.changeView("storicoOn")}>
                                        Storico Tornei
                                    </a>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.recordOn ? "active" : ""}`}
                                    onClick={() => this.changeView("recordOn")}>
                                        Record Lega
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.homeOn ? 'block' : 'none'}}>
                            <HomeLeagues/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.impOn ? 'block' : 'none'}}>
                            <ImpLeagues/>
                        </div>

                        {this.state.gestOn &&
                        <div className="flex-row-fluid ml-lg-8">
                            <PlayerManagement league={this.props.urlParams.name}/>
                        </div>}

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.creaOn ? 'block' : 'none'}}>
                            <NewTournament  league={this.props.urlParams.name}/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.storicoOn ? 'block' : 'none'}}>
                            <HomeLeagues/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.recordOn ? 'block' : 'none'}}>
                            <HomeLeagues/>
                        </div>

                    </div>
                </div>
            </div>
        </>
        );
    }

    showSubmenu = () => {
        this.setState({ submenu: true });
      };

    closeSubmenu = () => {
        this.setState({ submenu: false });
    };

    changeView(event) {
        this.setState({
            homeOn: event === "homeOn",
            impOn: event === "impOn",
            gestOn: event === "gestOn",
            creaOn: event === "creaOn",
            storicoOn: event === "storicoOn",
            recordOn: event === "recordOn"
        });
    }
}

export default Leghe;
