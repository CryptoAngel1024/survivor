import React, {PureComponent} from 'react';
import UserInfo from "../../lib/UserInfo";

import Result from "./Pages/Result";
import NextMatch from "./Pages/NextMatch";
import CloseDay from "./Pages/CloseDay";

export interface Props {
    urlParams: any;
}

interface State {
    submenu: boolean;
    risultOn: boolean;
    nextOn: boolean;
    closeOn: boolean;
}

class Backoffice extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            submenu: false,
            risultOn: true,
            nextOn: false,
            closeOn: false
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
                        </button>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column-fluid">
                <div className="container">
                    <div className="d-flex flex-row">

                        <div className={`flex-row-auto offcanvas-mobile w-200px w-xl-250px
                        ${this.state.submenu ? "offcanvas-mobile-on" : ""}`}
                        id="kt_profile_aside">
                            <div className="card card-custom">
                                <div className="card-body pt-15">
                                    <div className="text-center mb-10">
                                        <h4 className="font-weight-bold my-2">BACKOFFICE</h4>
                                    </div>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block 
                                    ${this.state.risultOn ? "active" : ""}`}
                                    onClick={() => this.changeView("risultOn")}>
                                        Risultati
                                    </a>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.nextOn ? "active" : ""}`}
                                    onClick={() => this.changeView("nextOn")}>
                                        Prossimo Match
                                    </a>
                                    <a className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.closeOn ? "active" : ""}`}
                                    onClick={() => this.changeView("closeOn")}>
                                        Chiusura Giornate
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.risultOn ? 'block' : 'none'}}>
                            <Result/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.nextOn ? 'block' : 'none'}}>
                            <NextMatch/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.closeOn ? 'block' : 'none'}}>
                            <CloseDay/>
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
            risultOn: event === "risultOn",
            nextOn: event === "nextOn",
            closeOn: event === "closeOn"
        });
    }
}

export default Backoffice;
