import React, {PureComponent} from 'react';
import Request from '../../lib/Request';
import UserInfo from "../../lib/UserInfo";
import TournamentMenu from "../../components/TournamentMenu";


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
}

interface State {
}

class Torneo extends PureComponent<Props, State> {
    render() {
        return (
        <>
            <TournamentMenu/>

            <div className="d-flex flex-column-fluid">
                <div className="container">

                    <div className="alert alert-custom alert-white alert-shadow fade show gutter-b" role="alert">
                        <div className="alert-icon">
                            <i className="flaticon2-user text-dark"></i>
                        </div>
                        <div className="alert-text">Ciao&nbsp;
                            <span className={"font-weight-boldest"}>{UserInfo.get("username")}</span>
                            &nbsp;sei ancora in gioco in questo torneo!
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card card-custom bg-dark card-stretch gutter-b ">
                                <a href='' className="card-body">
                                    <div className="card-title font-weight-bold text-muted text-hover-primary font-size-h3">
                                        10° GIORNATA DEL TORNEO
                                    </div>
                                    <div className="card-title font-weight-bolder text-white font-size-h3 mb-0 mt-6 d-block">
                                        INSERISCI LA SQUADRA, MANCANO:
                                    </div>
                                    <p className="card-title font-weight-bolder text-white font-size-h1 mb-0 mt-6 d-block">
                                        10h:20m:34s
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div
                                className="card card-custom bg-light-warning card-stretch gutter-b">
                                <div className="card-body my-4">
                                    <div className="card-title font-weight-bolder text-warning font-size-h2 mb-4
                                        text-hover-state-dark d-block">
                                        GIOCATORI IN GARA
                                    </div>
                                    <div className="font-weight-bold text-muted font-size-lg">
                                        <span
                                            className="text-dark-75 font-weight-bolder font-size-h2 mr-2">
                                            20
                                        </span>
                                        40 partecipanti totali
                                    </div>
                                    <div className="progress progress-xs mt-7 bg-warning-o-60">
                                        <div className="progress-bar bg-warning" role="progressbar"
                                                style={{width: '50%'}} aria-valuenow={50}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card card-custom bg-light-info card-stretch gutter-b">
                                <div className="card-body my-4">
                                    <div className="card-title font-weight-bolder text-info font-size-h2 mb-4
                                        text-hover-state-dark d-block">
                                        SQUADRE INSERITE
                                    </div>
                                    <div className="font-weight-bold text-muted font-size-lg">
                                        <span
                                            className="text-dark-75 font-weight-bolder font-size-h2 mr-2">
                                            15
                                        </span>
                                        20 ancora in gioco
                                    </div>
                                    <div className="progress progress-xs mt-7 bg-info-o-60">
                                        <div className="progress-bar bg-info" role="progressbar"
                                                style={{width: '75%'}} aria-valuenow={50}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-6">

                            <div className="card card-custom gutter-b">

                                <div className="card-header border-0 pt-5 mb-3">
                                    <div className="card-title">
                                        <div className="card-label">
                                            <div className="font-weight-bolder">Scelta di Giornata</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body pt-0">

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={JUV}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> JUVENTUS</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3">40</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={SAS}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> SASSUOLO</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3">15</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={NAP}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> NAPOLI</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3">10</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={VER}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> VERONA</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3">10</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={SAM}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> SAMPDORIA</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3">10</span>
                                    
                                    </div>

                                </div>

                                <div className="card-header border-0 pt-0 mt-0 mb-3">
                                    <div className="card-title">
                                        <div className="card-label">
                                            <div className="font-weight-bolder">Risultati Ultima Giornata</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body pt-0">

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={INT}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> INTER</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3 bg-success">80</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={ROM}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> ROMA</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3 bg-success">40</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={NAP}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> NAPOLI</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3 bg-success">10</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={LAZ}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> LAZIO</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3 bg-danger">10</span>
                                    
                                    </div>

                                    <div className="d-flex align-items-center flex-wrap mb-5">
													
                                        <div className="symbol symbol-circle symbol-30 mr-2">
                                            <img src={SAM}/>
                                        </div>
                                        
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <p className="font-weight-bold text-dark-75 text-hover-primary font-size-h3 mb-1"> SAMPDORIA</p>
                                        </div>
                                        
                                        <span className="label label-xl label-inline text-dark-75 font-weight-bolder font-size-h3 bg-danger">10</span>
                                    
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-xl-4">

                            <div className="card card-custom gutter-b">
                                
                                <div className="card-header">
                                    <div className="card-title">
                                        <h3 className="card-label">SERIE A: CLASSIFICA</h3>
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

                            <div className="card card-custom  bg-success mb-8">
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

                        <div className="col-xl-2">

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
                            
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-xl-5">

                            <div className="card card-custom gutter-b">
                                
                                <div className="card-header">
                                    <div className="card-title">
                                        <h3 className="card-label">SERIE A: 31° GIORNATA</h3>
                                    </div>
                                </div>
                                    
                                <div className="mr-4 ml-4">
                                    <div className="tab-pane fade show" >
                                        <table className="table table-borderless">
                                            <thead>
                                            <tr>
                                                <th colSpan={3} className="text-dark-75 font-weight-bolder font-size-h6" scope="col">Sabato 17/04/2021</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={CRO} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">CROTONE</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={UDI} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">UDINESE</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">1-3</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={SAM} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">SAMPDORIA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={VER} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">VERONA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={SAS} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">SASSUOLO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={FIO} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">FIORENTINA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">18:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={CAG} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">CAGLIARI</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={PAR} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">PARMA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">20:45</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <thead>
                                            <tr>
                                                <th colSpan={3} className="text-dark-75 font-weight-bolder font-size-h6" scope="col">Domenica 18/04/2021</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={MIL} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">MILAN</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={GEN} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">GENOA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">12:30</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={ATA} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">ATALANTA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={JUV} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">JUVENTUS</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={BOL} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">BOLOGNA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={SPE} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">SPEZIA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={LAZ} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">LAZIO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={BEN} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">BENEVENTO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={TOR} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">TORINO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={ROM} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">ROMA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">18:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={NAP} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">NAPOLI</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={INT} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">INTER</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">20:45</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        
                        
                        </div>

                        <div className="col-xl-5">

                            <div className="card card-custom gutter-b">
                                
                                <div className="card-header">
                                    <div className="card-title">
                                        <h3 className="card-label">SERIE A: 32° GIORNATA</h3>
                                    </div>
                                </div>
                                    
                                <div className="mr-4 ml-4">
                                    <div className="tab-pane fade show" >
                                        <table className="table table-borderless">
                                            <thead>
                                            <tr>
                                                <th colSpan={3} className="text-dark-75 font-weight-bolder font-size-h6" scope="col">Sabato 17/04/2021</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={CRO} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">CROTONE</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={UDI} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">UDINESE</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">1-3</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={SAM} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">SAMPDORIA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={VER} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">VERONA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={SAS} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">SASSUOLO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={FIO} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">FIORENTINA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">18:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={CAG} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">CAGLIARI</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={PAR} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">PARMA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">20:45</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <thead>
                                            <tr>
                                                <th colSpan={3} className="text-dark-75 font-weight-bolder font-size-h6" scope="col">Domenica 18/04/2021</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={MIL} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">MILAN</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={GEN} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">GENOA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">12:30</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={ATA} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">ATALANTA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={JUV} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">JUVENTUS</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={BOL} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">BOLOGNA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={SPE} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">SPEZIA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={LAZ} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">LAZIO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={BEN} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">BENEVENTO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">15:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={TOR} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">TORINO</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={ROM} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">ROMA</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">18:00</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={NAP} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">NAPOLI</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <img alt="Pic" src={INT} className={"imgcalendar mr-2"}/>
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">INTER</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="symbol-list d-flex flex-wrap">
                                                        <span className="text-dark-75 font-weight-bold font-size-lg">20:45</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-2">

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
                            
                        </div>

                    </div>

                </div>
            </div>
        </>
        );
    }
}

export default Torneo;
