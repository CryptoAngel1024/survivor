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

  renderTeamAway(
    cellContent,
    row,
    rowIndex
  ) {
    return <div>
      <select className="form-control">
          <option value="en">INTER</option>
          <option value="it">ROMA</option>
          <option value="it">JUVENTUS</option>
          <option value="it">NAPOLI</option>
      </select>
    </div>
  };

  renderPercentage(
    cellContent,
    row,
    rowIndex
  ) {
    return <div>
      <TextBox className="form-control" placeholder="Percentuale passaggio"/>
    </div>
  };

  renderComment(
    cellContent,
    row,
    rowIndex
  ) {
    return <div>
        <textarea className="form-control" id="kt_autosize_1" ></textarea>
    </div>

  };

  render() {
    let columns = [
      {
        dataField: "team",
        text: "Team",
        sort: true,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },{
        formatter: this.renderTeamAway,
        text: "Score Home",
        style: {
          minWidth: "100px",
          maxWidth: "100px",
        }
      },{
        formatter: this.renderPercentage,
        text: "Score Away",
        style: {
            minWidth: "30px",
            maxWidth: "30px",
        }
    },{
        formatter: this.renderComment,
        text: "Commento",
        style: {
            minWidth: "150px",
            maxWidth: "150px",
        }
    }
    ];
    let users = [{
        team: "INTER"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "SAMPDORIA"
    },{
        team: "INTER"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "NAPOLI"
    }, {
        team: "SAMPDORIA"
    }
    ];
    return (
    <div className="card card-custom card-stretch gutter-b">
        
        <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">Inserisci i dettagli della prossima giornata</h3>
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
                In questa sezione si potranno inserire il dettagli per la prossima giornata di campionato.
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

            <TableAdvanced
                columns={columns}
                data={users}
            />

            <div className="card-toolbar">
                <button type="reset" className="btn btn-primary mr-2">Aggiorna</button>
            </div>

        </div>
    </div>
    );
  }

}

export default Result;