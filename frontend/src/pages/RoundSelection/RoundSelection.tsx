import React, {PureComponent} from 'react';
import UserInfo from "../../lib/UserInfo";
import TournamentMenu from "../../components/TournamentMenu";
import ImgAccordion from "../../icon/ImgAccordion";
import {Accordion, Card } from 'react-bootstrap';


import ATA from "../../components/img/LoghiSerieA/atalanta.png";
import BEN from '../../components/img/LoghiSerieA/benevento.png';
import BOL from '../../components/img/LoghiSerieA/bologna.png';
import CAG from '../../components/img/LoghiSerieA/cagliari.png';
import CRO from '../../components/img/LoghiSerieA/crotone.png';
import FIO from '../../components/img/LoghiSerieA/fiorentina.png';
import INT from '../../components/img/LoghiSerieA/inter.png';
import GEN from '../../components/img/LoghiSerieA/genoa.png';
import JUV from '../../components/img/LoghiSerieA/juve.png';
import LAZ from '../../components/img/LoghiSerieA/lazio.png';
import MIL from '../../components/img/LoghiSerieA/milan.png';
import NAP from '../../components/img/LoghiSerieA/napoli.png';
import PAR from '../../components/img/LoghiSerieA/parma.png';
import ROM from '../../components/img/LoghiSerieA/roma.png';
import SAM from '../../components/img/LoghiSerieA/sampdoria.png';
import SAS from '../../components/img/LoghiSerieA/sassuolo.png';
import SPE from '../../components/img/LoghiSerieA/spezia.png';
import TOR from '../../components/img/LoghiSerieA/torino.png';
import UDI from '../../components/img/LoghiSerieA/udinese.png';
import VER from '../../components/img/LoghiSerieA/verona.png';

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
    }

    render() {
        return (
        <>
            <TournamentMenu/>

            <div className="d-flex flex-column-fluid">
                
                <div className="container">

                    <div className="row">
                        
                        <div className="col-lg-8">

                            <div className="card card-custom gutter-b">
                                
                                <div className="card-header border-0 pt-5">
                                    <div className="card-title">
                                        <div className="card-label">
                                            <div className="font-weight-bolder">Effettua la selezione</div>
                                            <div className="font-size-sm text-muted mt-2">1° NomeTorneo - 11° Serie A</div>
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
                                                    <input type="radio" name="radios11" className="ml-5" />
                                                    
                                                    <div className="card-label ml-5">
                                                        ATALANTA
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            
                                                            <div className="d-flex">
                                                                
                                                                <div className="flex-shrink-0 mr-3">
                                                                    <div className="symbol symbol-50 symbol-lg-120">
                                                                        <img alt="ATALANTA" src={ATA}/>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="card">
                                                                    
                                                                    <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                                                                        
                                                                        <div className="mr-3">
                                                                            
                                                                            <div className="d-flex flex-wrap my-2">
                                                                                
                                                                                <p className="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <g />
                                                                                            <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>Next Match: NAPOLI
                                                                                </p>
                                                                                
                                                                            
                                                                                <p className="text-muted font-weight-bold">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                                            <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>CASA
                                                                                </p>

                                                                            </div>
                                                                            
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                                        
                                                                        <div className="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita Commento per la prossima partita
                                                                        </div>
                                                                        
                                                                        <span className="font-weight-bold mr-1 text-rigth mt-3">Possibilità di passaggio turno</span>

                                                                        <div className="d-flex mt-3">
                                                                            <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                                                                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "60%"}} ></div>
                                                                            </div>
                                                                            <span className="font-weight-bolder text-dark ml-4 mr-3">60%</span>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                            <div className="separator separator-solid my-5"></div>
                                                            
                                                            <div className="d-flex align-items-center flex-wrap ml-3 mr-3">
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Classifica</span>
                                                                        <span className="font-weight-bolder font-size-h5">4 °</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Punti</span>
                                                                        <span className="font-weight-bolder font-size-h5">50</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Fatti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Subiti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm mb-3">Ultimi 5 match 
                                                                        </span> 
                                                                        <div className="symbol-list d-flex flex-wrap">
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={NAP}/>
                                                                                <i className="symbol-badge bg-danger"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={INT}/>
                                                                                <i className="symbol-badge bg-success"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={MIL}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={LAZ}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={JUV}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                
                                                                
                                                            </div>
                                                            
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
                                                    <input type="radio" name="radios11" className="ml-5" disabled/>
                                                    
                                                    <div className="card-label ml-5">
                                                        BOLOGNA
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            
                                                            <div className="d-flex">
                                                                
                                                                <div className="flex-shrink-0 mr-3">
                                                                    <div className="symbol symbol-50 symbol-lg-120">
                                                                        <img alt="BOLOGNA" src={BOL}/>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="card">
                                                                    
                                                                    <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                                                                        
                                                                        <div className="mr-3">
                                                                            
                                                                            <div className="d-flex flex-wrap my-2">
                                                                                
                                                                                <p className="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <g />
                                                                                            <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>Next Match: NAPOLI
                                                                                </p>
                                                                                
                                                                            
                                                                                <p className="text-muted font-weight-bold">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                                            <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>CASA
                                                                                </p>

                                                                            </div>
                                                                            
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                                        
                                                                        <div className="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita Commento per la prossima partita
                                                                        </div>
                                                                        
                                                                        <span className="font-weight-bold mr-1 text-rigth mt-3">Possibilità di passaggio turno</span>

                                                                        <div className="d-flex mt-3">
                                                                            <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                                                                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "60%"}} ></div>
                                                                            </div>
                                                                            <span className="font-weight-bolder text-dark ml-4 mr-3">60%</span>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                            <div className="separator separator-solid my-5"></div>
                                                            
                                                            <div className="d-flex align-items-center flex-wrap ml-3 mr-3">
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Classifica</span>
                                                                        <span className="font-weight-bolder font-size-h5">4 °</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Punti</span>
                                                                        <span className="font-weight-bolder font-size-h5">50</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Fatti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Subiti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm mb-3">Ultimi 5 match 
                                                                        </span> 
                                                                        <div className="symbol-list d-flex flex-wrap">
                                                                            <div className="symbol symbol-25 symbol-circle symbol-success mr-1">
                                                                                <span className="symbol-label">V</span>
                                                                            </div>
                                                                            <div className="symbol symbol-25 symbol-circle symbol-success mr-1">
                                                                                <span className="symbol-label">V</span>
                                                                            </div>
                                                                            <div className="symbol symbol-25 symbol-circle symbol-danger mr-1">
                                                                                <span className="symbol-label">S</span>
                                                                            </div>
                                                                            <div className="symbol symbol-25 symbol-circle symbol-danger mr-1">
                                                                                <span className="symbol-label">S</span>
                                                                            </div>
                                                                            <div className="symbol symbol-25 symbol-circle symbol-light-primary mr-1">
                                                                                <span className="symbol-label">P</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                
                                                                
                                                            </div>
                                                            
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
                                                    <input type="radio" name="radios11" className="ml-5" />
                                                    
                                                    <div className="card-label ml-5">
                                                        CAGLIARI
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            
                                                            <div className="d-flex">
                                                                
                                                                <div className="flex-shrink-0 mr-3">
                                                                    <div className="symbol symbol-50 symbol-lg-120">
                                                                        <img alt="CAGLIARI" src={CAG}/>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="card">
                                                                    
                                                                    <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                                                                        
                                                                        <div className="mr-3">
                                                                            
                                                                            <div className="d-flex flex-wrap my-2">
                                                                                
                                                                                <p className="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <g />
                                                                                            <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>Next Match: NAPOLI
                                                                                </p>
                                                                                
                                                                            
                                                                                <p className="text-muted font-weight-bold">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                                            <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>CASA
                                                                                </p>

                                                                            </div>
                                                                            
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                                        
                                                                        <div className="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita Commento per la prossima partita
                                                                        </div>
                                                                        
                                                                        <span className="font-weight-bold mr-1 text-rigth mt-3">Possibilità di passaggio turno</span>

                                                                        <div className="d-flex mt-3">
                                                                            <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                                                                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "60%"}} ></div>
                                                                            </div>
                                                                            <span className="font-weight-bolder text-dark ml-4 mr-3">60%</span>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                            <div className="separator separator-solid my-5"></div>
                                                            
                                                            <div className="d-flex align-items-center flex-wrap ml-3 mr-3">
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Classifica</span>
                                                                        <span className="font-weight-bolder font-size-h5">4 °</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Punti</span>
                                                                        <span className="font-weight-bolder font-size-h5">50</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Fatti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Subiti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm mb-3">Ultimi 5 match 
                                                                        </span> 
                                                                        <div className="symbol-list d-flex flex-wrap">
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={NAP}/>
                                                                                <i className="symbol-badge bg-danger"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={INT}/>
                                                                                <i className="symbol-badge bg-success"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={MIL}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={LAZ}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={JUV}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card className="card">
                                            <Accordion.Toggle as={Card.Header} eventKey="3" className="card-header">
                                                <div className="card-title">
                                                    <span className="svg-icon svg-icon-primary">
                                                        <ImgAccordion/>
                                                    </span>
                                                    <input type="radio" name="radios11" className="ml-5" />
                                                    
                                                    <div className="card-label ml-5">
                                                        INTER
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            
                                                            <div className="d-flex">
                                                                
                                                                <div className="flex-shrink-0 mr-3">
                                                                    <div className="symbol symbol-50 symbol-lg-120">
                                                                        <img alt="INTER" src={INT}/>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="card">
                                                                    
                                                                    <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                                                                        
                                                                        <div className="mr-3">
                                                                            
                                                                            <div className="d-flex flex-wrap my-2">
                                                                                
                                                                                <p className="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <g />
                                                                                            <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>Next Match: NAPOLI
                                                                                </p>
                                                                                
                                                                            
                                                                                <p className="text-muted font-weight-bold">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                                            <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>CASA
                                                                                </p>

                                                                            </div>
                                                                            
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                                        
                                                                        <div className="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita Commento per la prossima partita
                                                                        </div>
                                                                        
                                                                        <span className="font-weight-bold mr-1 text-rigth mt-3">Possibilità di passaggio turno</span>

                                                                        <div className="d-flex mt-3">
                                                                            <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                                                                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "60%"}} ></div>
                                                                            </div>
                                                                            <span className="font-weight-bolder text-dark ml-4 mr-3">60%</span>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                            <div className="separator separator-solid my-5"></div>
                                                            
                                                            <div className="d-flex align-items-center flex-wrap ml-3 mr-3">
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Classifica</span>
                                                                        <span className="font-weight-bolder font-size-h5">4 °</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Punti</span>
                                                                        <span className="font-weight-bolder font-size-h5">50</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Fatti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Subiti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm mb-3">Ultimi 5 match 
                                                                        </span> 
                                                                        <div className="symbol-list d-flex flex-wrap">
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={NAP}/>
                                                                                <i className="symbol-badge bg-danger"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={INT}/>
                                                                                <i className="symbol-badge bg-success"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={MIL}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={LAZ}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={JUV}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card className="card">
                                            <Accordion.Toggle as={Card.Header} eventKey="4" className="card-header">
                                                <div className="card-title">
                                                    <span className="svg-icon svg-icon-primary">
                                                        <ImgAccordion/>
                                                    </span>
                                                    <input type="radio" name="radios11" className="ml-5" disabled/>
                                                    
                                                    <div className="card-label ml-5">
                                                        MILAN
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            
                                        </Card>

                                        <Card className="card">
                                            <Accordion.Toggle as={Card.Header} eventKey="5" className="card-header">
                                                <div className="card-title">
                                                    <span className="svg-icon svg-icon-primary">
                                                        <ImgAccordion/>
                                                    </span>
                                                    <input type="radio" name="radios11" className="ml-5" />
                                                    
                                                    <div className="card-label ml-5">
                                                        ROMA
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="5" className="collapse">
                                                <div className="card-body">
                                                    <div className="card card-custom gutter-b">
                                                        <div className="card-body">
                                                            
                                                            <div className="d-flex">
                                                                
                                                                <div className="flex-shrink-0 mr-3">
                                                                    <div className="symbol symbol-50 symbol-lg-120">
                                                                        <img alt="ROMA" src={ROM}/>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="card">
                                                                    
                                                                    <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                                                                        
                                                                        <div className="mr-3">
                                                                            
                                                                            <div className="d-flex flex-wrap my-2">
                                                                                
                                                                                <p className="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <g />
                                                                                            <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>Next Match: NAPOLI
                                                                                </p>
                                                                                
                                                                            
                                                                                <p className="text-muted font-weight-bold">
                                                                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                                            <path d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z" fill="#000000" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>CASA
                                                                                </p>

                                                                            </div>
                                                                            
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                                        
                                                                        <div className="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita.Commento per la prossima partita.
                                                                            Commento per la prossima partita Commento per la prossima partita
                                                                        </div>
                                                                        
                                                                        <span className="font-weight-bold mr-1 text-rigth mt-3">Possibilità di passaggio turno</span>

                                                                        <div className="d-flex mt-3">
                                                                            <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                                                                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "60%"}} ></div>
                                                                            </div>
                                                                            <span className="font-weight-bolder text-dark ml-4 mr-3">60%</span>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                            
                                                            <div className="separator separator-solid my-5"></div>
                                                            
                                                            <div className="d-flex align-items-center flex-wrap ml-3 mr-3">
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Classifica</span>
                                                                        <span className="font-weight-bolder font-size-h5">4 °</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Punti</span>
                                                                        <span className="font-weight-bolder font-size-h5">50</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Fatti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    <span className="mr-4">
                                                                        <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                                                                    </span>
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm">Gol Subiti</span>
                                                                        <span className="font-weight-bolder font-size-h5">60</span>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items-center flex-lg-fill mr-10 my-1">
                                                                    
                                                                    <div className="d-flex flex-column text-dark-75">
                                                                        <span className="font-weight-bolder font-size-sm mb-3">Ultimi 5 match 
                                                                        </span> 
                                                                        <div className="symbol-list d-flex flex-wrap">
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={NAP}/>
                                                                                <i className="symbol-badge bg-danger"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={INT}/>
                                                                                <i className="symbol-badge bg-success"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={MIL}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={LAZ}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                            <div className="symbol symbol-30 symbol-circle mr-1">
                                                                                <img alt="Pic" src={JUV}/>
                                                                                <i className="symbol-badge bg-primary"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>

                                    <div className="card-toolbar mt-5">
                                        <button  className="btn btn-primary mr-2">Salva Scelta</button>
                                    </div>

                                </div>

                            </div>

                        </div>
                        
                        <div className="col-lg-4">

                            <div className="card card-custom gutter-b">
                                
                                <div className="card-header">
                                    <div className="card-title">
                                        <h3 className="card-label">SERIE A: 31° GIORNATA</h3>
                                    </div>
                                </div>
                                
                                <div className="mr-2 ml-2">
                                    <div className="tab-pane fade  show" >
                                        <table className="table table-borderless">
                                        <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <img src={INT}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">INTER</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">74</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <img src={UDI}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">UDINESE</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">36</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <img src={MIL}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">MILAN</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">63</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                                <img src={BOL}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">BOLOGNA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">34</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={JUV}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">JUVENTUS</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">62</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={GEN}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">GENOA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">32</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={ATA}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">ATALANTA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">61</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={SPE}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">SPEZIA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">32</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={NAP}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">NAPOLI</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">59</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={FIO}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">FIORENTINA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">30</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={LAZ}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">LAZIO</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">55</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={BEN}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">BENEVENTO</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">30</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={ROM}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">ROMA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">54</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={TOR}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">TORINO</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">27</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={SAS}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">SASSUOLO</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">46</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={CAG}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">CAGLIARI</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">25</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={VER}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">VERONA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">41</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={PAR}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">PARMA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">20</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={SAM}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">SAMPDORIA</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">39</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <div className="symbol symbol-circle symbol-20 mr-2">
                                                            <img src={CRO}/>
                                                            </div>
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">CROTONE</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="symbol-list d-flex flex-wrap">
                                                            <span className="text-dark-75 font-weight-bold font-size-sm">15</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                        
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

export default ImpTorneo;
