import React, {PureComponent} from 'react';
import TextBox from "../../../components/TextBox";
import TableAdvanced from "../../../components/TableAdvanced";

export interface Props {
  league: string;
}

interface State {
  selectedPage: number;
}


const sizePerPage = 15;

class Result extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    league: undefined,
  };

  constructor(props) {
    super(props);
  }

  renderScoreHome(
    cellContent,
    row,
    rowIndex
  ) {
    return <div>
      <select className="form-control">
          <option value="en">1</option>
          <option value="it">2</option>
          <option value="it">3</option>
          <option value="it">4</option>
      </select>
    </div>
  };

  renderScoreAway(
    cellContent,
    row,
    rowIndex
  ) {
    return <div>
      <select className="form-control">
          <option value="en">1</option>
          <option value="it">2</option>
          <option value="it">3</option>
          <option value="it">4</option>
      </select>
    </div>
  };

  renderCheckbox(
    cellContent,
    row,
    rowIndex
  ) {
    return <span>
      <input type="checkbox" />
    </span>
  };

  render() {
    let columns = [
      {
        dataField: "team_home",
        text: "Team Home",
        sort: true,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },{
        dataField: "team_away",
        text: "Team Away",
        sort: true,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },{
        formatter: this.renderScoreHome,
        text: "Score Home",
        style: {
          minWidth: "30px",
          maxWidth: "30px",
        }
      },{
        formatter: this.renderScoreAway,
        text: "Score Away",
        style: {
            minWidth: "30px",
            maxWidth: "30px",
        }
    },{
        formatter: this.renderCheckbox,
        text: "Calcola",
        style: {
            minWidth: "30px",
            maxWidth: "30px",
        }
    }
    ];
    let users = [{
        team_home: "INTER",
        team_away: "MILAN"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "NAPOLI",
        team_away: "JUVENTUS"
    }, {
        team_home: "SAMPDORIA",
        team_away: "JUVENTUS"
    }
    ];
    return (
    <div className="card card-custom card-stretch gutter-b">
        
        <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">Inserisci i risultati</h3>
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
                In questa sezione si potranno inserire i risultati delle partite delle leghe selezionate.
                <br/><br/>
                1. Scegliere un campionato.
                <br/>
                2. Scegliere una giornata.
                <br/>
                3. Inserire il risultato.
                <br/>
                4. Confermare che la partita è terminata con il checkbox.
                <br/>
                5. Aggiornare i dati.
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
           

            <TableAdvanced
                columns={columns}
                data={users}
            />

            <div className="card-toolbar">
                <button type="reset" className="btn btn-primary mr-2">Processa Risultati</button>
            </div>

        </div>
    </div>
    );
  }

}

export default Result;