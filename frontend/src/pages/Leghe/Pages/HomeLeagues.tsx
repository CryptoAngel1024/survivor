import React, {PureComponent} from 'react';
import UserInfo from "../../../lib/UserInfo";


export interface Props {
}

interface State {
}

class HomeLeagues extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-custom card-stretch gutter-b">
                        <div className="card-header border-0">
                            <h3 className="card-title font-weight-bolder text-dark">Tornei</h3>
                        </div>
                        <div className="card-body pt-0">
                            <div className="mb-6">
                                <a href="/Torneo" className="d-flex align-items-center flex-grow-1">
                                    <div className="symbol symbol-60 symbol-circle mr-3">
                                        <img src="/img/country/it.svg"/>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                        <div className="d-flex flex-column align-items-cente py-2 w-75">
                                            <span className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                                Torneo Round2
                                            </span>
                                            <span className="text-muted font-weight-bold">Serie A - 2° Giornata</span>
                                        </div>
                                        <span className="label label-lg label-light-success label-inline font-weight-bold py-4">
                                            In Corso
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-6">
                                <a href="/Torneo" className="d-flex align-items-center flex-grow-1">
                                    <div className="symbol symbol-60 symbol-circle mr-3">
                                        <img src="/img/country/it.svg"/>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                        <div className="d-flex flex-column align-items-cente py-2 w-75">
                                            <span className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                                Torneo Round1
                                            </span>
                                            <span className="text-muted font-weight-bold">Serie A - 8° Giornata</span>
                                        </div>
                                        <span className="label label-lg label-light-danger label-inline font-weight-bold py-4">
                                            Concluso
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className="mb-6">
                                <a href="/Torneo" className="d-flex align-items-center flex-grow-1">
                                    <div className="symbol symbol-60 symbol-circle mr-3">
                                        <img src="/img/country/216-england.svg"/>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                        <div className="d-flex flex-column align-items-cente py-2 w-75">
                                            <span className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                                                Torneo Round4
                                            </span>
                                            <span className="text-muted font-weight-bold">Premier League - 8° Giornata</span>
                                        </div>
                                        <span className="label label-lg label-light-danger label-inline font-weight-bold py-4">
                                            Concluso
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card card-custom bg-radial-gradient-primary card-stretch gutter-b">
                        <div className="card-header border-0 py-5">
                            <h3 className="card-title font-weight-bolder text-white">Numeri della lega</h3>
                        </div>
                        <div className="card-body d-flex flex-column p-0">
                            <div className="card-spacer bg-white card-rounded flex-grow-1">
                                <div className="row m-0">
                                    <div className="col px-4 py-2 mr-4">
                                        <div className="font-size-sm text-muted font-weight-bold">Partecipanti Lega</div>
                                        <div className="font-size-h4 font-weight-bolder">40</div>
                                    </div>
                                    <div className="col px-4 py-2">
                                        <div className="font-size-sm text-muted font-weight-bold">In gioco</div>
                                        <div className="font-size-h4 font-weight-bolder">13</div>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col px-4 py-2 mr-4">
                                        <div className="font-size-sm text-muted font-weight-bold">Percentuale di passaggio turno</div>
                                        <div className="font-size-h4 font-weight-bolder">60%</div>
                                    </div>
                                    <div className="col px-4 py-2">
                                        <div className="font-size-sm text-muted font-weight-bold">Altro</div>
                                        <div className="font-size-h4 font-weight-bolder">10</div>
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

export default HomeLeagues;