import React, {PureComponent} from 'react';
import UserInfo from "../../lib/UserInfo";
import TournamentMenu from "../../components/TournamentMenu";

import InfoTorneo from "./Pages/InfoTorneo";
import PlayerManagement from "./Pages/PlayerManagement";
import RoundSelection from "./Pages/RoundSelection";

export interface Props {
    urlParams: any;
}

interface State {
    submenu: boolean;
    impOn: boolean;
    parOn: boolean;
    selOn: boolean;
}

class ImpTorneo extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            submenu: false,
            impOn: true,
            parOn: false,
            selOn: false
        }
        this.showSubmenu = this.showSubmenu.bind(this);
        this.closeSubmenu = this.closeSubmenu.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    render() {
        return (
        <>
            <TournamentMenu/>

            <div className="d-flex flex-column-fluid">
                <div className="container">
                    <div className="d-flex flex-row">

                        <div className={`flex-row-auto offcanvas-mobile w-300px w-xl-350px
                        ${this.state.submenu ? "offcanvas-mobile-on" : ""}`}
                        id="kt_profile_aside">
                            <div className="card card-custom">
                                <div className="card-body pt-15">
                                    <div className="text-center mb-10">
                                        <div className="symbol symbol-60 symbol-circle symbol-xl-70">
                                            <img src="/img/country/it.svg"/>
                                        </div>
                                        <h4 className="font-weight-bold my-2">Nome Torneo</h4>
                                    </div>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block 
                                    ${this.state.impOn ? "active" : ""}`}
                                    onClick={() => this.changeView("impOn")}>
                                        Impostazioni
                                    </a>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.parOn ? "active" : ""}`}
                                    onClick={() => this.changeView("parOn")}>
                                        Gestione Partecipanti
                                    </a>
                                    <a className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.selOn ? "active" : ""}`}
                                    onClick={() => this.changeView("selOn")}>
                                        Modifiche selezioni
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.impOn ? 'block' : 'none'}}>
                            <InfoTorneo/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.parOn ? 'block' : 'none'}}>
                            <PlayerManagement/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.selOn ? 'block' : 'none'}}>
                            <RoundSelection/>
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
            impOn: event === "impOn",
            parOn: event === "parOn",
            selOn: event === "selOn"
        });
    }
}

export default ImpTorneo;
