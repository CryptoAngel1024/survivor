import React, {PureComponent} from 'react';
import UserInfo from "../../../lib/UserInfo";
import Request from "../../../lib/Request";
import history from "../../../lib/history";
import {createStandaloneToast} from "@chakra-ui/react"
import {Accordion, Card }from 'react-bootstrap';

import TextBox from "../../../components/TextBox";
import TableAdvanced from "../../../components/TableAdvanced";


export interface Props {
  league: string;
}

interface State {
    tournamentName: string;
    championShip: string;
    startingDay: number;
    championShipList: any;
    startingDayList: any;
    users: any;
    selectedUsers:any;
    isNameExist: boolean;
    isNameCompiled: boolean;
    checked: boolean;
}

class NewTournament extends PureComponent<Props, State> {
    static defaultProps: Partial<Props> = {
      league: undefined,
    };
    constructor(props) {
        super(props);
        this.state = {
          tournamentName: '',
          championShip: '',
          startingDay: undefined,
          championShipList: [],
          startingDayList: [],
          users: [],
          selectedUsers:[],
          isNameExist: undefined,
          isNameCompiled: undefined,
          checked: false,
        }

        this.validateAndSubmit = this.validateAndSubmit.bind(this);
        this.handleChangeChampionShip = this.handleChangeChampionShip.bind(this);
        this.handleChangeStartingDay = this.handleChangeStartingDay.bind(this);
        this.getStartingDay = this.getStartingDay.bind(this);
        this.checkTournamentNameExistence = this.checkTournamentNameExistence.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.renderStatusTable = this.renderStatusTable.bind(this);
        
    }

    renderStatusTable(
        cellContent,
        row,
        rowIndex
      ) {
        return <span>
            <input type="checkbox"
                onChange={(e)=> this.handleCheckboxChange(e, row)}
            />
        </span>
    };



    handleCheckboxChange(e, row) {
        console.log("_id", row._id)
            if(e.target.checked) {
                this.state.selectedUsers.push(row)
            } else{
                let categoryStartIndex = this.state.selectedUsers.findIndex(
                    (user) => user._id === row._id,
                )
                this.state.selectedUsers.splice(categoryStartIndex, 1)
            }
    }
    handleChangeChampionShip(e) {
        this.setState({ championShip: e.target.value });
        this.getStartingDay(e.target.value);
    }
    handleChangeStartingDay(e) {
        this.setState({ startingDay: e.target.value });
    }
    componentDidMount() {
        this.getChampionShip();
        this.getUsers();
    }
    componentDidUpdate() {
        // this.getStartingDay(this.state.championShip)
        console.log("ok")
    }
    getChampionShip = () => {
        Request.authenticatedApi("GET", "/api/tournament/championship",
            null,
            (response) => this.setState({championShipList: response}),
            () => console.log("Error"))
    }
    getUsers = () => {
        Request.authenticatedApi("GET", "/api/tournament/users",
            {leagueName: this.props.league},
            (response) => this.setState({users: response}),
            () => console.log("Error"))
    }
    checkTournamentNameExistence(tournamentName) {
        Request.authenticatedApi("GET", "/api/tournament/exist",
            {tournamentName: tournamentName, leagueName: this.props.league},
            (response) => this.setState({isNameExist: response.exist}),
            () => console.log("Error"))
    }
    getStartingDay(championShip) {
        Request.authenticatedApi("GET", "/api/tournament/startingday",
            {championShip: championShip},
            (response) => this.setState({startingDayList: response}),
            () => console.log("Error"))
    }


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
        return (
        <div className="card card-custom">
            
            <div className="card-header py-3">
                <div className="card-title align-items-start flex-column">
                    <h3 className="card-label font-weight-bolder text-dark">Crea Nuovo Torneo</h3>
                </div>
            </div>
            
            <div className="card-body">

                <form className="form">
                    
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
                        Queste impostazioni si possono modificare entro la fine della prima giornata selezionata per l'inizio del torneo,
                        una volta calcolata la prima giornata queste impostazioni non possono essere piu modificate.
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label text-alert">Nome Torneo</label>
                        <div className="col-lg-9 col-xl-6">
                            <TextBox type="text" className="form-control form-control-lg form-control-solid" placeholder="Nome Torneo" 
                                      value={this.state.tournamentName} 
                                      valid={this.state.isNameCompiled && !this.state.isNameExist} 
                                      onChange={(value) => {
                                         this.setState({tournamentName: value, isNameCompiled: true})
                                         if (this.state.tournamentName?.length > 1) {
                                           this.checkTournamentNameExistence(value);
                                         }
                                      }}
                                      />
                            {this.state.isNameExist &&
                              <div className={"ErrorLabel"}>Nome già esistente</div>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">Campionato</label>
                        <div className="col-lg-9 col-xl-6">
                            <select className="form-control form-control-lg form-control-solid" value={this.state.championShip} onChange={this.handleChangeChampionShip}>
                                          
                              {this.state.championShipList.map((option) => (
                                  <option value={option.name}>{option.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">Giornata d'inizio</label>
                        <div className="col-lg-9 col-xl-6">
                            <select className="form-control form-control-lg form-control-solid" value={this.state.startingDay} onChange={this.handleChangeStartingDay}>
                                {this.state.startingDayList.map((option) => (
                                  <option value={option.day}>{option.day}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>

                <Accordion className="accordion accordion-light accordion-toggle-arrow">
                    <Card className="card">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                            <div className="card-title">
                                Partecipanti Torneo
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" className="collapse">

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
                                    data={this.state.users}
                                />

                            </div>

                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <div className="card-toolbar mt-6">
                    <button type="reset" className="btn btn-primary mr-2" onClick={
                        this.validateAndSubmit }>Crea Torneo</button>
                </div>
                               
            </div>
            
        </div>
        );
    }

    validateAndSubmit() {
        const toast = createStandaloneToast();
          Request.authenticatedApi("POST", "/api/tournament/create",
            {
              league:this.props.league,
              tournamentName: this.state.tournamentName,
              championship: this.state.championShip,
              startingDay: this.state.startingDay,
              users:this.state.selectedUsers,
            },
            () => {history.push("/Home")},
            () => {
                return toast({
                    title: 'Torneo fallito. Perfavore ancora',
                    status: 'error',
                    duration: 3000,
                    isClosable: false,
                });
            }
          );
    
    }
}

export default NewTournament;