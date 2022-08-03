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

class PlayerManagement extends PureComponent<Props, State> {
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
    return <span>
      <input type="checkbox" checked/>
    </span>
  };

  render() {
    let columns = [
      {
        formatter: this.renderStatusTable,
        style: {
          minWidth: "30px",
          maxWidth: "30px",
        }
      },{
        dataField: "username",
        text: "Username",
        sort: true,
        style: {
          minWidth: "130px",
          maxWidth: "130px",
          whiteSpace: "nowrap",
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
      }
    ];
    let users = [{
        username: "user2",
        name: "aaaaaa",
        surname: "bbbbbb",
        email: "test@test.com"
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
            <h3 className="card-title font-weight-bolder text-dark">Lista Partecipanti Torneo</h3>
        </div>

        <div className="card-body pt-0">

            <div className="alert alert-custom alert-light-dark fade show mb-10" role="alert">
                <div className="alert-icon">
                    <span className="svg-icon svg-icon-3x svg-icon-dark">
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
                I partecipanti del torneo si possono modificare entro la fine della prima giornata selezionata per l'inizio del torneo,
                una volta calcolata la prima giornata queste impostazioni non possono essere piu modificate. 
                <br/><br/>
                Deseleziona/seleziona i partecipanti che desideri aggiungere al torneo.
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
                        <label className="mr-3 mb-0 d-none d-md-block">Stato:</label>
                        <select className="form-control">
                            <option value="">Tutti</option>
                            <option value="ACTIVE">Attivo</option>
                            <option value="PENDING">In attesa</option>
                            <option value="TO_ACCEPT">Da accettare</option>
                        </select>
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

export default PlayerManagement;