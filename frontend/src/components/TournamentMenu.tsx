import React, {PureComponent} from 'react';
import UserInfo from "../lib/UserInfo";


export interface Props {
}

interface State {
}

class TournamentMenu extends PureComponent<Props, State> {
    render() {
        return (
            <div className="subheader py-2 py-lg-6 subheader-transparent" id="kt_subheader">
                <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex align-items-center flex-wrap mr-1">
                        <button className="burger-icon burger-icon-left mr-4 d-inline-block d-lg-none"
                         id="kt_subheader_mobile_toggle">
                            <span></span>
                        </button>
                        <div className="d-flex align-items-baseline flex-wrap mr-5">
                            <h5 className="text-dark font-weight-bold my-1 mr-5">Nome Torneo</h5>
                            <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                                <li className="breadcrumb-item">
                                    <a href="" className="text-muted">NOME LEGA</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="" className="text-muted">RISULTATI</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="" className="text-muted">SETTINGS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="btn-group ml-2">
                            <button type="button" className="btn btn-light-primary font-weight-bold dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TORNEI </button>
                            <div className="dropdown-menu dropdown-menu-sm p-0 m-0 dropdown-menu-right">
                                <ul className="navi py-5">
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="flaticon2-writing"></i>
                                            </span>
                                            <span className="navi-text">Torneo N.1</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="flaticon2-medical-records"></i>
                                            </span>
                                            <span className="navi-text">Torneo N.2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TournamentMenu;
