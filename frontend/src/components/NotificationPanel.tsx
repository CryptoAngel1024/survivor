import React, {PureComponent} from 'react';

export interface Props {
}

interface State {
}

class NotificationPanel extends PureComponent<Props, State> {
    render() {
        return (

            <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10">
                <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
                    <ul className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#kt_quick_panel_notifications">Notifications</a>
                        </li>
                    </ul>
                    <div className="offcanvas-close mt-n1 pr-5">
                        <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_panel_close">
                            <i className="ki ki-close icon-xs text-muted"></i>
                        </a>
                    </div>
                </div>
                <div className="offcanvas-content px-10">
                    <div className="tab-content">
                        <div className="tab-pane show fade pt-2 pr-5 mr-n5 active" id="kt_quick_panel_notifications" role="tabpanel">
                            <div className="navi navi-icon-circle navi-spacer-x-0">
                                <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                        <div className="symbol symbol-50 mr-3">
                                            <div className="symbol-label">
                                                <i className="flaticon-user-add text-success icon-lg"></i>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold font-size-sm">L'utente XXXX è stato aggiunto alla competizione</div>
                                            <div className="text-muted font-size-sm">Coppa fessi 2021 round1</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="navi-item">
                                    <div className="navi-link rounded">
                                        <div className="symbol symbol-50 mr-3">
                                            <div className="symbol-label">
                                                <i className="flaticon2-box text-danger icon-lg"></i>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold font-size-lg">2 new items submited</div>
                                            <div className="text-muted">by Grog John</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotificationPanel;
