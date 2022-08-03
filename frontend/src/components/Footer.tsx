import React, {PureComponent} from 'react';

export interface Props {
}

interface State {
}

class Footer extends PureComponent<Props, State> {
    render() {
        return (
            <div className="footer kt-grid__item bgi-position-center-center bgi-size-cover bgi-no-cover bgfooter"
                 id="kt_footer">
                <div className="container py-lg-18 py-8">
                    <div className="row">
                        <div className="col-lg-4 my-lg-0 my-5">
                            <h4 className="text-white pb-3">About</h4>
                            <p className="m-0 text-white opacity-45">Lorem Ipsum is simply dummy text of the printing
                                <br />and typesetting and typesetting industry has been the
                                <br />industry's standard dummy text ever since the 1500s,
                                <br />when an unknown printer took a galley of type.
                            </p>
                        </div>
                        <div className="col-lg-4 my-lg-0 my-5">
                            <h4 className="text-white pb-3">Quick Links</h4>
                            <div className="d-flex align-items-center">
                                <div className="d-flex flex-column mr-18">
                                    <a href="#" className="text-white opacity-55 text-hover-primary">General Reports</a>
                                    <a href="#" className="py-2 text-white opacity-55 text-hover-primary">Dashboart Widgets</a>
                                    <a href="#" className="text-white opacity-50 text-hover-primary">Custom Pages</a>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="text-white opacity-55 text-hover-primary">User Setting</a>
                                    <a href="#" className="py-2 text-white opacity-55 text-hover-primary">Custom Pages</a>
                                    <a href="#" className="text-white opacity-55 text-hover-primary">Intranet Settings</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 my-lg-0 my-5">
                            <h4 className="text-white pb-3">Get In Touch</h4>
                            <form className="rounded form-bgcolor">
                                <div className="input-group p-2 align-items-center">
                                    <input type="text" className="form-control rounded-right border-0 bg-transparent text-white opacity-80" placeholder="Enter Your Email" />
                                    <div className="input-group-append p-0 mr-1">
                                        <button className="btn btn-fh btn-sm btn-primary px-6 rounded-left" type="button">Join</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="separator separator-solid opacity-7"></div>
                <div className="container py-8">
                    <div className="d-flex align-items-center justify-content-between flex-lg-row flex-column">
                        <div className="d-flex align-items-center order-lg-1 order-2">
                            <img alt="Logo" src="/img/logo-letter-5.png" className="logo-sticky max-h-35px" />
                            <span className="text-muted font-weight-bold mx-2">2021©</span>
                            <a href="#" target="_blank" className="text-primary text-hover-primary">Keenthemes</a>
                        </div>
                        <div className="d-flex align-items-center order-lg-2 order-1 mb-lg-0 mb-5">
                            <a href="#" target="_blank" className="text-white opacity-55 pl-0 text-hover-primary">Purchase Lisence</a>
                            <a href="#" target="_blank" className="text-white opacity-55 px-6 text-hover-primary">Team</a>
                            <a href="#" target="_blank" className="text-white opacity-55 pr-0 text-hover-primary">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
