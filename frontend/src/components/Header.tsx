import React from 'react';
import Request from '../lib/Request';
import history from "../lib/history";

import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import TextBox from "../components/TextBox";

import UserInfo from "../lib/UserInfo";

import Languages from "./Languages";
import Scroll from "./Scroll";
import NotificationPanel from "./NotificationPanel";

import SERIEA from './img/LoghiSerieA/seriea.png';
import ATA from './img/LoghiSerieA/atalanta.png';
import BEN from './img/LoghiSerieA/benevento.png';
import BOL from './img/LoghiSerieA/bologna.png';
import CAG from './img/LoghiSerieA/cagliari.png';
import CRO from './img/LoghiSerieA/crotone.png';
import FIO from './img/LoghiSerieA/fiorentina.png';
import INT from './img/LoghiSerieA/inter.png';
import GEN from './img/LoghiSerieA/genoa.png';
import JUV from './img/LoghiSerieA/juve.png';
import LAZ from './img/LoghiSerieA/lazio.png';
import MIL from './img/LoghiSerieA/milan.png';
import NAP from './img/LoghiSerieA/napoli.png';
import PAR from './img/LoghiSerieA/parma.png';
import ROM from './img/LoghiSerieA/roma.png';
import SAM from './img/LoghiSerieA/sampdoria.png';
import SAS from './img/LoghiSerieA/sassuolo.png';
import SPE from './img/LoghiSerieA/spezia.png';
import TOR from './img/LoghiSerieA/torino.png';
import UDI from './img/LoghiSerieA/udinese.png';
import VER from './img/LoghiSerieA/verona.png';

export interface Props {
    urlParams: any;
}

interface State {
    show: boolean;
    username: any;
    password: any;
    loginValid: boolean;
    userPanel: boolean;
    menuMobile: boolean;
    leagueList: any;
}

class Header extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            username: "",
            password: "",
            loginValid: undefined,
            userPanel: false,
            menuMobile: false,
            leagueList: undefined,
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getLeagueList = this.getLeagueList.bind(this);
        this.viewUser = this.viewUser.bind(this);
        this.closeUser = this.closeUser.bind(this);
        this.viewMenuMobile = this.viewMenuMobile.bind(this);
        this.closeMenuMobile = this.closeMenuMobile.bind(this);
        this.logout = this.logout.bind(this);
      }

    componentDidMount() {
        this.getLeagueList();
    }

        getLeagueList = () => {
        Request.authenticatedApi("GET", "/api/league/",
          null,
          (response) => this.setState({leagueList: response}),
          () => console.log("Error"))
    };
    
    render() {
        var firstletter = (UserInfo.get("name"))?.charAt(0);
        var loginset= UserInfo.get("username");
        let pathName = this.props.urlParams?.location?.pathname
        return (
        <>
            <div id="kt_header_mobile" className="header-mobile header-mobile-fixed">
                <div className="d-flex align-items-center">
                    <a href="" className="mr-7">
                        <img alt="Logo" src="/img/logo-letter-5.png" className="max-h-30px" />
                    </a>
                </div>
                <div className="d-flex align-items-center">
                {loginset ?
                    <>
                        <div className="topbar-item">
                            <div className="btn btn-icon btn-lg mr-1" id="kt_quick_panel_toggle">
                                    <span className="svg-icon svg-icon-xl svg-icon-danger">
                                        <span className="label label-sm label-danger pulse ml-2">
                                            <span className="position-relative">5</span>
                                            <span className="pulse-ring"></span>
                                        </span>
                                        <i className="flaticon2-notification text-white icon-md"></i>
                                    </span>
                            </div>
                        </div>

                        <Languages/>

                    </>
                    :
                        null
                    }
                    <button className="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
                        <span></span>
                    </button>
                    {loginset ?
                
                        <div className="btn w-auto d-flex align-items-center px-2"
                            onClick={this.viewUser}>
                            <span className="symbol symbol-circle symbol-30">
                                <span className="symbol-label font-size-h5 font-weight-bold text-white bg-white-o-15">{firstletter}</span>
                            </span>
                        </div>

                    :
                        <a onClick={this.handleShow} className="btn p-0 ml-2">
                        <span className="svg-icon svg-icon-xl">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24"/>
                                    <path
                                        d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                        fill="#000000" fillRule="nonzero" opacity="0.3"/>
                                    <path
                                        d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                        fill="#000000" fillRule="nonzero"/>
                                </g>
                            </svg>
                        </span>
                        </a>
                    }
                </div>
            </div>
            <div id="kt_header" className={`header flex-column header-fixed 
            ${this.state.menuMobile ? "topbar-mobile-on" : ""}`}>
                <div className="header-top">
                    <div className="container">
                        <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                            <div id="kt_header_menu"
                                 className="header-menu header-menu-left header-menu-mobile header-menu-layout-default">
                                <a onClick={() => history.push("/Home")} className="mr-6 logo-resize">
                                    <img alt="Logo" src="/img/logo-letter-5.png" className="max-h-35px"/>
                                </a>
                                <ul className="menu-nav">
                                    <li className={`menu-item ${pathName === "/Home" && "menu-item-active"}`} aria-haspopup="true">
                                        <a onClick={() => history.push("/Home")} className="menu-link">
                                            <span className="menu-text">HOME</span>
                                        </a>
                                    </li>
                                    <li className={`menu-item ${pathName === "/TournamentSurvivorHome" && "menu-item-active"}`} aria-haspopup="true">
                                        <a onClick={() => history.push("/TournamentSurvivorHome")} className="menu-link">
                                            <span className="menu-text">TORNEI SURVIVOR</span>
                                        </a>
                                    </li>
                                    {loginset ?
                                        <li className={`menu-item menu-item-submenu menu-item-rel ${pathName === "/Leghe" && "menu-item-active"}`}
                                            data-menu-toggle="click"
                                            aria-haspopup="true">
                                            <a href="#" className="menu-link menu-toggle" onClick={this.getLeagueList}>
                                                <span className="menu-text">LEGHE SURVIVOR</span>
                                                <span className="menu-desc"></span>
                                                <i className="menu-arrow"></i>
                                            </a>
                                            <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                                <ul className="menu-subnav">
                                                    {this.state.leagueList?.map(league =>
                                                    <li className="menu-item" aria-haspopup="true">
                                                        <a onClick={() => history.push("/Leghe?name=" + league.name)} className="menu-link">
                                                            <i className="flaticon2-cup text-dark menu-icon"></i>
                                                            <span className="menu-text">{league.name}</span>
                                                        </a>
                                                    </li>
                                                    )}
                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover"
                                                        aria-haspopup="true">
                                                        <a onClick={() => history.push("/Leghe/NewLeague")} className="menu-link">
                                                            <i className="flaticon2-pie-chart-3 text-dark menu-icon"></i>
                                                            <span className="menu-text">Crea una lega</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        : null
                                    }
                                    <li className="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click"
                                        aria-haspopup="true">
                                        <a href="#" className="menu-link menu-toggle">
                                            <span className="menu-text">NEWS</span>
                                            <span className="menu-desc"></span>
                                            <i className="menu-arrow"></i>
                                        </a>
                                        <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                            <ul className="menu-subnav">
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <span className="menu-text">Calciomercato</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="_blank" href="" className="menu-link">
                                                        <span className="menu-text">....</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-item menu-item-submenu seriea-logo" data-menu-toggle="click"
                                        aria-haspopup="true">
                                        <a href="#" className="menu-link menu-toggle">
                                            <span className="menu-text"> SERIE A</span>
                                            <span className="menu-desc"></span>
                                            <i className="menu-arrow"></i>
                                        </a>
                                        <div className="menu-submenu menu-submenu-fixed menu-submenu-center menu-squadre">
                                            <div className="menu-subnav">
                                                <div className="symbol-list d-flex align-items-center flex-wrap seriea-logo">
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={ATA} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={BEN} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={BOL} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={CAG} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={CRO} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={FIO} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={GEN} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={INT} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={JUV} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={LAZ} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={MIL} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={NAP} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={PAR} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={ROM} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={SAM} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={SAS} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={SPE} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={TOR} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={UDI} />
                                                    </a>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-lg-fill">
                                                    <a href="#" className="symbol symbol-30 symbol-lg-40 symbol-circle p-2">
                                                        <img alt="Pic" src={VER} />
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="menu-item menu-item-submenu menu-item-rel seriea-team" data-menu-toggle="click"
                                        aria-haspopup="true">
                                        <a href="#" className="menu-link menu-toggle">
                                            <span className="menu-text">SERIE A</span>
                                            <span className="menu-desc"></span>
                                            <i className="menu-arrow"></i>
                                        </a>
                                        <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                            <ul className="menu-subnav">
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label atalantabg"></div>
                                                            </div>
                                                            <span className="menu-text">Atalanta</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label beneventobg"></div>
                                                            </div>
                                                            <span className="menu-text">Benevento</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label bolognabg"></div>
                                                            </div>
                                                            <span className="menu-text">Bologna</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label cagliaribg"></div>
                                                            </div>
                                                            <span className="menu-text">Cagliari</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label crotonebg"></div>
                                                            </div>
                                                            <span className="menu-text">Crotone</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label fiorentinabg"></div>
                                                            </div>
                                                            <span className="menu-text">Fiorentina</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label genoabg"></div>
                                                            </div>
                                                            <span className="menu-text">Genoa</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label interbg"></div>
                                                            </div>
                                                            <span className="menu-text">Inter</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label juvebg"></div>
                                                            </div>
                                                            <span className="menu-text">Juventus</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label laziobg"></div>
                                                            </div>
                                                            <span className="menu-text">Lazio</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label milanbg"></div>
                                                            </div>
                                                            <span className="menu-text">Milan</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label napolibg"></div>
                                                            </div>
                                                            <span className="menu-text">Napoli</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label parmabg"></div>
                                                            </div>
                                                            <span className="menu-text">Parma</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label romabg"></div>
                                                            </div>
                                                            <span className="menu-text">Roma</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label sampdoriabg"></div>
                                                            </div>
                                                            <span className="menu-text">Sampdoria</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label sassuolobg"></div>
                                                            </div>
                                                            <span className="menu-text">Sassuolo</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label speziabg"></div>
                                                            </div>
                                                            <span className="menu-text">Spezia</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label torinobg"></div>
                                                            </div>
                                                            <span className="menu-text">Torino</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label udinesebg"></div>
                                                            </div>
                                                            <span className="menu-text">Udinese</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="menu-item" aria-haspopup="true">
                                                    <a target="#" href="" className="menu-link">
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <div className="symbol-label veronabg"></div>
                                                            </div>
                                                            <span className="menu-text">Verona</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="topbar">
                            {loginset ?
                                <div className="topbar-item">
                                    <div className="btn btn-icon btn-lg mr-1" id="kt_quick_panel_toggle">
											<span className="svg-icon svg-icon-xl svg-icon-danger">
                                                <span className="label label-sm label-danger pulse ml-2">
                                                    <span className="position-relative">5</span>
                                                    <span className="pulse-ring"></span>
                                                </span>
                                                <i className="flaticon2-notification text-white icon-md"></i>
											</span>
                                    </div>
                                </div>
                                : null
                            }

                            <Languages/>

                            <div className="topbar-item">
                                {loginset ?
                                    <div className="btn btn-icon w-auto d-flex align-items-center btn-lg px-2"
                                         onClick={this.viewUser}>
                                        <div className="d-flex text-right pr-3">
                                            <span
                                                className="text-white opacity-50 font-weight-bold font-size-sm d-none d-md-inline mr-1">Ciao,</span>
                                            <span
                                                className="text-white font-weight-bolder font-size-sm d-none d-md-inline">{UserInfo.get("name")}</span>
                                        </div>
                                        <span className="symbol symbol-circle symbol-35">
                                            <span className="symbol-label font-size-h5 font-weight-bold text-white bg-white-o-15">{firstletter}</span>
                                        </span>
                                    </div>
                                    :
                                    <a onClick={this.handleShow}>
                                        <div className="btn btn-icon w-auto d-flex align-items-center btn-lg px-2">
                                            <div className="d-flex text-right p-3">
                                                <span
                                                    className="text-white font-weight-bold font-size-lg text-center d-none d-md-inline">LOGIN</span>
                                            </div>
                                        </div>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Body>   
                <div className="login-form login-signin">
                    <form className="form"
                        id="kt_login_signin_form"
                        onSubmit={this.onFormSubmit}>
                        <div className="pb-7 pt-lg-0 pt-5">
                            <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                            Accedi a Survivor
                            </h3>
                            <span className="text-muted font-weight-bold font-size-h4">Non sei registrato?
                                                <a href="/Signin"
                                                id="kt_login_signup"
                                                className="text-primary font-weight-bolder"
                                                >&nbsp; Crea un account
                                                </a>
                                                </span>
                        </div>
                        <div className="form-group">
                            <button type="button"
                                className="btn btn-light-primary font-weight-bolder px-8 py-4 font-size-lg mr-3 mt-3"
                                onClick={() => window.location.href="http://localhost:3080/oauth/google"}>
                                <span className="svg-icon svg-icon-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                                                        fill="#4285F4"/>
                                                    <path
                                                        d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                                                        fill="#34A853"/>
                                                    <path
                                                        d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                                                        fill="#FBBC05"/>
                                                    <path
                                                        d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                                                        fill="#EB4335"/>
                                                </svg>
                                </span>Sign in with Google
                            </button>
                            <a onClick={() => window.location.href="http://localhost:3080/oauth/facebook"}
                            className="btn btn-light-primary font-weight-bolder px-8 py-4 mt-3 font-size-lg">
                                <i className="socicon-facebook"></i> Sign in with Facebook
                            </a>
                        </div>
                        <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">
                            Username
                            </label>
                            <TextBox className={`form-control form-control-solid h-auto py-6 px-6 rounded-lg`}
                                    value={this.state.username}
                                    autocomplete="username"
                                    valid={this.state.loginValid}
                                    onChange={(value) => this.setState({username: value})}
                                    />
                            {this.state.loginValid != undefined && this.state.loginValid == false &&
                            <div className={"ErrorLabel"}>Username non valido</div>
                            }
                        </div>
                        <div className="form-group">
                            <div className="d-flex justify-content-between mt-n5">
                            <label className="font-size-h6 font-weight-bolder text-dark pt-5">
                                Password
                            </label>
                            <a href="/Recuperopassword"
                            className="link text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5">
                                Password Dimenticata?
                            </a>
                            </div>
                            <TextBox className={`form-control form-control-solid h-auto py-6 px-6 rounded-lg`}
                                    value={this.state.password}
                                    autocomplete="password"
                                    type={"password"}
                                    valid={this.state.loginValid}
                                    onChange={(value) => this.setState({password: value})}
                            />
                            {this.state.loginValid != undefined && this.state.loginValid == false &&
                            <div className={"ErrorLabel"}>Password non valida</div>
                            }
                        </div>
                        <div className="pb-lg-0 pb-5">
                            <button type={"submit"}
                                    id="kt_login_signin_submit"
                                    className="btn btn-primary font-weight-bolder font-size-h6 px-8
                                                        py-4 my-3 mr-3" 
                            >
                            Accedi
                            </button>
                            <Button variant="secondary" onClick={this.handleClose}
                            className="btn btn-primary font-weight-bolder font-size-h6 px-8
                            py-4 my-3 mr-3">
                                Close
                            </Button>
                            
                        </div>
                    </form>
                </div>
            </Modal.Body>
            </Modal>
            
            <NotificationPanel/>
            <Scroll/>

            <div className={`offcanvas offcanvas-right p-10 
            ${this.state.userPanel ? "offcanvas-on" : ""}            
            `}>
                <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
                    <h3 className="font-weight-bold m-0">Profilo Utente</h3>
                    <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" onClick={this.closeUser}>
                        <i className="ki ki-close icon-xs text-muted"></i>
                    </a>
                </div>
                <div className="offcanvas-content pr-5 mr-n5">
                    <div className="d-flex align-items-center mt-5">
                        <div className="symbol symbol-circle symbol-100 mr-5">
                            <div className="symbol-label img-example-user"></div>
                        </div>
                        <div className="d-flex flex-column">
                            <a href="#" className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">
                                {UserInfo.get("name") + " " + UserInfo.get("surname")}</a>
                            <div className="text-muted mt-1">{UserInfo.get("username")}</div>
                            <div className="navi mt-2">
                                <div className="navi-item">
                                    <span className="navi-link p-0 pb-2">
                                        <span className="navi-icon mr-1">
                                          <span className="svg-icon svg-icon-lg svg-icon-primary">
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24" />
                                                <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000" />
                                                <circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
                                              </g>
                                            </svg>
                                          </span>
                                        </span>
                                        <span className="navi-text text-muted text-hover-primary">{UserInfo.get("email")}</span>
                                    </span>
                                </div>
                                <a className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5"
                                onClick={this.logout}>
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-dashed mt-8 mb-5"></div>
                    <div className="navi navi-spacer-x-0 p-0">
                        <a href="#" className="navi-item">
                            <div className="navi-link">
                                <div className="symbol symbol-40 bg-light mr-3">
                                    <div className="symbol-label">
                                        <i className="flaticon2-cup text-primary"></i>
                                    </div>
                                </div>
                                <div className="navi-text">
                                    <div className="font-weight-bold">Storico Tornei</div>
                                    <div className="text-muted">Visualizza lo storico dei tornei a cui hai partecipato</div>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="navi-item">
                            <div className="navi-link">
                                <div className="symbol symbol-40 bg-light mr-3">
                                    <div className="symbol-label">
                                        <span className="svg-icon svg-icon-primary svg-icon-2x">
                                            <svg width="24px" height="24px"
                                                 viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                                    fill="#000000"/>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="navi-text">
                                    <div className="font-weight-bold">Impostazioni Account</div>
                                    <div className="text-muted">Gestisci le tue informazioni</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>



        </>
        );
    }
    
    onFormSubmit(event) {
        event.preventDefault();

        Request.login(
        this.state.username,
        this.state.password,
        () => this.setState({ show: false }),
        () => this.setState({loginValid: false})
        );
    }

    handleShow = () => {
        this.setState({ show: true });
      };
    
    handleClose = () => {
        this.setState({ show: false });
    };

    viewUser = () => {
        this.setState({userPanel: true});
    }

    closeUser = () => {
        this.setState({userPanel: false});
    }    

    viewMenuMobile = () => {
        this.setState({menuMobile: true});
    }

    closeMenuMobile = () => {
        this.setState({menuMobile: false});
    }  

    logout = () => {
        window.localStorage.clear();
        this.setState({menuMobile: false});
        this.setState({userPanel: false});
        history.push("/Home");
    }  
}

export default Header;
