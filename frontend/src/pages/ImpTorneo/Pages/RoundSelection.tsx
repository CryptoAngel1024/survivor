import React, {PureComponent} from 'react';
import TextBox from "../../../components/TextBox";
import TableAdvanced from "../../../components/TableAdvanced";

export interface Props {
  league: string;
}

interface State {
  selectedPage: number;
}

const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const sizePerPage = 15;

class RoundSelection extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    league: undefined,
  };

  constructor(props) {
    super(props);
  }

  renderStatusTable(
    cellContent,
    row,
    rowIndex
  ) {
    return <div>
      <select className="form-control form-control-solid">
          <option value="en">Inter</option>
          <option value="it">Juventus</option>
      </select>
    </div>
  };

  render() {
    let columns = [
      {
        dataField: "username",
        text: "Username",
        sort: true,
        style: {
          minWidth: "130px",
          maxWidth: "130px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        dataField: "name",
        text: "Nome",
        sort: true,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        dataField: "surname",
        text: "Cognome",
        sort: true,
        style: {
          minWidth: "100px",
          maxWidth: "100px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        dataField: "email",
        text: "Email",
        sort: true,
        style: {
          minWidth: "220px",
          maxWidth: "220px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      {
        formatter: this.renderStatusTable,
        text: "Scelta",
        style: {
          minWidth: "100px",
          maxWidth: "100px",
        }
      }
    ];
    let users = [{
        username: "user2asasA SAASDASDADAA",
        name: "aaaaaa",
        surname: "bbbbbb",
        email: "test@testfffffffffffffffffffffffffffffffff.com"
    }, {
        username: "user1",
        name: "aaaaaa",
        surname: "bbbbbb",
        email: "test@test.com"
    }
    ];
    return (
    <div className="card card-custom card-stretch gutter-b">
        
        <div className="card-header border-0">
            <h3 className="card-title font-weight-bolder text-dark">Modifica Scelte Partecipanti</h3>
        </div>

        <div className="card-body pt-0">

            <div className="alert alert-custom alert-light-warning fade show mb-5" role="alert">
                <div className="alert-icon">
                    <span className="svg-icon svg-icon-3x svg-icon-warning">
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
                La scelta può essere modificata entro la fine dell'ultima partita del turno della competizione scelta.
                Un volta terminata la giornata non sarà possibile modificare le scelte di quel turno di campionato.
                </div>
            </div>

            <div className="alert alert-custom alert-light-dark fade show mb-10" role="alert">
                <div className="font-weight-bold">
                Giornata di riferimento: 1° NomeTorneo - 11° Serie A
                </div>
            </div>

            <div className="row align-items-center mb-6">

                <div className="col-md-4 my-2 my-md-0">
                    <div className="input-icon">
                        <TextBox className="form-control" placeholder="Ricerca"/>
                        <span>
                        <i className="flaticon2-search-1 text-muted"/>
                        </span>
                    </div>
                </div>
                                   
                <div className="col-md-4 my-2 my-md-0">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light-primary px-6 font-weight-bold">
                            Cerca
                        </button>
                        <a className="ml-5 font-weight-bold cursor-pointer">Reset
                        </a>
                    </div>
                </div>
            
            </div>

            <TableAdvanced
                columns={columns}
                data={users}
            />

            <div className="card-toolbar">
                <button type="reset" className="btn btn-primary mr-2">Salva Modifiche</button>
            </div>

        </div>
    </div>
    );
  }

}

export default RoundSelection;