import React, {PureComponent} from 'react';
import UserInfo from "../../lib/UserInfo";

import ChangeInfo from "./Pages/ChangeInfo";
import ChangePassword from "./Pages/ChangePassword";


export interface Props {
    urlParams: any;
}

interface State {
    submenu: boolean;
    impOn: boolean;
    passOn: boolean;
}

class ImpAccount extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            submenu: false,
            impOn: true,
            passOn: false
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
                                        <div className="symbol symbol-circle symbol-100 mr-5">
                                            <div className="symbol-label img-example-user"></div>
                                        </div>
                                        <h4 className="font-weight-bold my-2">{UserInfo.get("name") + " " + UserInfo.get("surname")}</h4>
                                        <div className="text-muted mb-2">{UserInfo.get("username")}</div>
                                        <div className="text-muted mb-2">{UserInfo.get("email")}</div>
                                    </div>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.impOn ? "active" : ""}`}
                                    onClick={() => this.changeView("impOn")}>
                                        Impostazioni Account
                                    </a>
                                    <a href="#" className={`btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block
                                    ${this.state.passOn ? "active" : ""}`}
                                    onClick={() => this.changeView("passOn")}>
                                        Cambiare Password
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.impOn ? 'block' : 'none'}}>
                            <ChangeInfo/>
                        </div>

                        <div className="flex-row-fluid ml-lg-8"
                        style={{display: this.state.passOn ? 'block' : 'none'}}>
                            <ChangePassword/>
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
            passOn: event === "passOn"
        });
    }
}

export default ImpAccount;
