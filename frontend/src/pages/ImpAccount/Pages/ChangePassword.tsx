import React, {PureComponent} from 'react';
import UserInfo from "../../../lib/UserInfo";

import TextBox from "../../../components/TextBox";

export interface Props {
}

interface State {
}

class ChangePassword extends PureComponent<Props, State> {
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
                        <h3 className="card-label font-weight-bolder text-dark">Cambiare Password</h3>
                    </div>
                </div>
                <form className="form">
                    <div className="card-body">
                        <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 col-form-label text-alert">Password Attuale</label>
                            <div className="col-lg-9 col-xl-6">
                                <TextBox type="password" className="form-control" placeholder="Inserisci password"
                                 />
                                <a href="#" className="text-sm font-weight-bold">Password Dimenticata ?</a>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 col-form-label text-alert">Nuova Password</label>
                            <div className="col-lg-9 col-xl-6">
                                <TextBox type="password" className="form-control" placeholder="Inserisci password"
                                 />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-xl-3 col-lg-3 col-form-label text-alert">Conferma Password</label>
                            <div className="col-lg-9 col-xl-6">
                                <TextBox type="password" className="form-control" placeholder="Inserisci password"
                                 />
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <button type="reset" className="btn btn-primary mr-2">Cambia Password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
									
        );
    }
}

export default ChangePassword;