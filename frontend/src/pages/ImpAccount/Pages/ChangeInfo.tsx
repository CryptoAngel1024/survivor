import React, {PureComponent} from 'react';
import UserInfo from "../../../lib/UserInfo";

import TextBox from "../../../components/TextBox";
import DatePicker from "../../../components/DatePicker";

export interface Props {
}

interface State {
}

class ChangeInfo extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <div className="flex-row-fluid ml-lg-8">
            <div className="card card-custom">
                <div className="card-header py-3">
                    <div className="card-title align-items-start flex-column">
                        <h3 className="card-label font-weight-bolder text-dark">Cambia le info del tuo account</h3>
                    </div>
                </div>
                <form className="form" id="kt_login_signup_form">
                    <div className="card-body">
                      <div className="form-group">
                        <label>Nome
                          <span className="text-danger">*</span></label>
                        <TextBox className="form-control" placeholder="Inserisci il nome"
                                 />
                      </div>
                      <div className="form-group">
                        <label>Cognome
                          <span className="text-danger">*</span></label>
                        <TextBox className="form-control" placeholder="Inserisci il cognome"
                                 />
                      </div>
                      <div className="form-group">
                        <label>Data di nascita
                          <span className="text-danger">*</span></label>
                        <div className="input-group date">
                          <DatePicker className="form-control"
                                      />
                          <div className="input-group-append">
                                                        <span className="input-group-text">
                                                        <i className="la la-calendar-check-o"></i>
                                                        </span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Telefono
                          <span className="text-danger">*</span></label>
                        <TextBox className="form-control" placeholder="Inserisci telefono"
                        />
                      </div>
                      <div className="form-group">
                        <label>Squadra preferita
                          <span className="text-danger"></span></label>
                        <TextBox className="form-control" placeholder="Inserisci squadra preferita"
                        />
                      </div>

                      
                      <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                        <button type="button"
                                className="btn btn-primary mr-2"
                            >Modifica i dati
                        </button>
                      </div>
                    </div>
                  </form>
            </div>
        </div>
									
        );
    }
}

export default ChangeInfo;