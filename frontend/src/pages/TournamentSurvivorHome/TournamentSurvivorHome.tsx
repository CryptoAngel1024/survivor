import React, {PureComponent} from 'react';
import UserInfo from "../../lib/UserInfo";



export interface Props {
    urlParams: any;
}

interface State {
}



class TournamentSurvivorHome extends PureComponent<Props, State> {

    render() {

        return (
        <>
           
            <div className="d-flex flex-row-fluid bgi-size-cover bgi-position-center bg-tournamet-survivor" >
                <div className="container">
                    
                    <div className="d-flex justify-content-between align-items-center border-bottom border-white py-7">
                        <h3 className="h4 text-white mb-0">Tornei Survivor</h3>
                        <div className="d-flex">
                            <a href="#" className="font-size-h6 font-weight-bold text-white">FAQ</a>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-stretch text-center flex-column py-40">
                        
                        <div className="mb-8 display-3 h1">
                            <mark className="bg-dark-o-70 text-white font-weight-bolder ">
                                Benvenuto nei Tornei Survivor
                            </mark>
                        </div>
                        <h4 className="mb-4">
                            <mark className="bg-dark-o-70 text-white font-weight-bolder ">Partecipa subito a uno dei tornei e vinci fantastici premi!</mark>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="container py-8">

                <div className="row">

                    <div className="col-xl-5">
                        <div className="card card-custom gutter-b">
                            
                            <div className="card-body">
                                
                                <div className="d-flex align-items-center">
                                    
                                    <div className="flex-shrink-0 mr-4 symbol symbol-65 symbol-circle">
                                        <img src="/img/country/it.svg"/>
                                    </div>
                                    
                                    <div className="d-flex flex-column mr-auto">
                                        <a href="#" className="card-title text-hover-primary font-weight-bolder font-size-h5 text-dark mb-1">
                                            Round 2 
                                        </a>       
                                        <span className="text-muted font-weight-bold">Serie A 2021/2022</span>
                                        <span className="label label-light-warning label-inline font-weight-bold label-lg mt-2">Non Iniziato</span>              
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap mt-7">

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Inizio Iscrizioni</span>
                                        <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">10 Gen, 22</span>
                                    </div>

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Fine Iscrizioni</span>
                                        <span className="btn btn-light-danger btn-sm font-weight-bold btn-upper btn-text">15 Gen, 22</span>
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap">
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Premio</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">
                                        <span className="font-weight-bold text-dark-50">€</span> 100</span>
                                    </div>
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Numero Iscritti</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">500</span>
                                    </div>
                                    
                                </div>

                                <button type="button" className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4">
                                    Iscriviti al Torneo
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-xl-5">
                        <div className="card card-custom gutter-b">
                            
                            <div className="card-body">
                                
                                <div className="d-flex align-items-center">
                                    
                                    <div className="flex-shrink-0 mr-4 symbol symbol-65 symbol-circle">
                                        <img src="/img/country/it.svg"/>
                                    </div>
                                    
                                    <div className="d-flex flex-column mr-auto">
                                        <a href="#" className="card-title text-hover-primary font-weight-bolder font-size-h5 text-dark mb-1">
                                            Round 1 
                                        </a>       
                                        <span className="text-muted font-weight-bold">Serie A 2021/2022</span> 
                                        <span className="label label-light-primary label-inline font-weight-bold label-lg mt-2">In corso</span>             
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap mt-7">

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Inizio Iscrizioni</span>
                                        <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">10 Gen, 22</span>
                                    </div>

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Fine Iscrizioni</span>
                                        <span className="btn btn-light-danger btn-sm font-weight-bold btn-upper btn-text">15 Gen, 22</span>
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap">
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Premio</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">
                                        <span className="font-weight-bold text-dark-50">€</span> 100</span>
                                    </div>
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Numero Iscritti</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">500</span>
                                    </div>
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Sopravvissuti</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">100</span>
                                    </div>
                                    
                                </div>

                                <button type="button" className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4">
                                    Visualizza il Torneo
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-2">

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
                            
                            <div className="card-body">
                                
                                <div className="d-flex align-items-center">
                                    
                                    <div className="flex-shrink-0 mr-4 symbol symbol-65 symbol-circle">
                                        <img src="/img/country/it.svg"/>
                                    </div>
                                    
                                    <div className="d-flex flex-column mr-auto">
                                        <a href="#" className="card-title text-hover-primary font-weight-bolder font-size-h5 text-dark mb-1">
                                            Round 2 
                                        </a>       
                                        <span className="text-muted font-weight-bold">Serie A 2021/2022</span>
                                        <span className="label label-light-warning label-inline font-weight-bold label-lg mt-2">Non Iniziato</span>              
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap mt-7">

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Inizio Iscrizioni</span>
                                        <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">10 Gen, 22</span>
                                    </div>

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Fine Iscrizioni</span>
                                        <span className="btn btn-light-danger btn-sm font-weight-bold btn-upper btn-text">15 Gen, 22</span>
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap">
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Premio</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">
                                        <span className="font-weight-bold text-dark-50">€</span> 100</span>
                                    </div>
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Numero Iscritti</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">500</span>
                                    </div>
                                    
                                </div>

                                <button type="button" className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4">
                                    Iscriviti al Torneo
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-xl-5">
                        <div className="card card-custom gutter-b">
                            
                            <div className="card-body">
                                
                                <div className="d-flex align-items-center">
                                    
                                    <div className="flex-shrink-0 mr-4 symbol symbol-65 symbol-circle">
                                        <img src="/img/country/it.svg"/>
                                    </div>
                                    
                                    <div className="d-flex flex-column mr-auto">
                                        <a href="#" className="card-title text-hover-primary font-weight-bolder font-size-h5 text-dark mb-1">
                                            Round 1 
                                        </a>       
                                        <span className="text-muted font-weight-bold">Serie A 2021/2022</span> 
                                        <span className="label label-light-primary label-inline font-weight-bold label-lg mt-2">In corso</span>             
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap mt-7">

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Inizio Iscrizioni</span>
                                        <span className="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">10 Gen, 22</span>
                                    </div>

                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="d-block font-weight-bold mb-4">Fine Iscrizioni</span>
                                        <span className="btn btn-light-danger btn-sm font-weight-bold btn-upper btn-text">15 Gen, 22</span>
                                    </div>
                                    
                                </div>
                                
                                <div className="d-flex flex-wrap">
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Premio</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">
                                        <span className="font-weight-bold text-dark-50">€</span> 100</span>
                                    </div>
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Numero Iscritti</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">500</span>
                                    </div>
                                    
                                    <div className="mr-12 d-flex flex-column mb-7">
                                        <span className="font-weight-bolder mb-2">Sopravvissuti</span>
                                        <span className="font-weight-bolder font-size-h5 pt-1">100</span>
                                    </div>
                                    
                                </div>

                                <button type="button" className="btn btn-block btn-sm btn-light-primary font-weight-bolder text-uppercase py-4">
                                    Visualizza il Torneo
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-2">

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

            
        </>
        );
    }

}

export default TournamentSurvivorHome;
