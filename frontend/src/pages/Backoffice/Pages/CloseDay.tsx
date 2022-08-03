import React, {PureComponent} from 'react';

export interface Props {
  league: string;
}

interface State {
  selectedPage: number;
}


const sizePerPage = 15;

class CloseDay extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    league: undefined,
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="card card-custom card-stretch gutter-b">
        
        <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">Chiudi Giornata</h3>
        </div>

        <div className="card-body pt-0">

            <div className="alert alert-custom alert-light-primary fade show mb-5" role="alert">
                <div className="alert-icon">
                    <span className="svg-icon svg-icon-3x svg-icon-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                <rect fill="#000000" x="11" y="10" width="2" height="7" rx="1" />
                                <rect fill="#000000" x="11" y="7" width="2" height="2" rx="1" />
                            </g>
                        </svg>
                    </span>
                </div>
                <div className="alert-text font-weight-bold">
                In questa sezione si chiude la giornata di un campionato in modo da visualizzare la giornata successiva.
                </div>
            </div>
            
            <div className="form-group row">
                <label className="col-form-label text-right col-lg-2">Seleziona il campionato</label>
                <div className="col-lg-4 col-md-9 col-sm-12">
                    <select className="form-control ">
                        <option>Serie A</option>
                        <option>Premier League</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-form-label text-right col-lg-2">Seleziona la giornata</label>
                <div className="col-lg-4 col-md-9 col-sm-12">
                    <select className="form-control ">
                        <option>6°</option>
                        <option>7°</option>
                    </select>
                </div>
            </div>


            <div className="card-toolbar">
                <button type="reset" className="btn btn-primary mr-2">Chudi Giornata</button>
            </div>

        </div>
    </div>
    );
  }

}

export default CloseDay;