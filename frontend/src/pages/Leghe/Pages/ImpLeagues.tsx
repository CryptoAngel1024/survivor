import React, {PureComponent} from 'react';
import UserInfo from "../../../lib/UserInfo";

import TextBox from "../../../components/TextBox";

export interface Props {
}

interface State {
}

class ImpLeagues extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <div className="card card-custom">
            <div className="card-header py-3">
                <div className="card-title align-items-start flex-column">
                    <h3 className="card-label font-weight-bolder text-dark">Impostazioni Lega</h3>
                    <span className="text-muted font-weight-bold font-size-sm mt-1">Cambia le impostazioni della tua lega</span>
                </div>
            </div>
            <form className="form">
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">Logo</label>
                        <div className="col-lg-9 col-xl-6">
                            <div className="image-input image-input-outline" id="kt_profile_avatar" style={{backgroundImage: 'none'}}>
                                <div className="image-input-wrapper" style={{backgroundImage: 'none'}}></div>
                                <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
                                    <i className="fa fa-pen icon-sm text-muted"></i>
                                    <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                                </label>
                            </div>
                            <span className="form-text text-muted">Tipologia di file accettati: png, jpg, jpeg.</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label text-alert">Nome lega</label>
                        <div className="col-lg-9 col-xl-6">
                            <input type="text" className="form-control form-control-lg form-control-solid" disabled={true} value="Nome Lega"/>
                            <span className="form-text text-muted">Il nome della lega non può essere cambiato.</span>
                        </div>
                    </div>
                    <div className="card-toolbar">
						<button type="reset" className="btn btn-success mr-2">Salva Modifiche</button>
					</div>
                </div>
            </form>
        </div>
        );
    }
}

export default ImpLeagues;