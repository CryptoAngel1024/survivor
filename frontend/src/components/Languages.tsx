import React, {PureComponent} from 'react';

import US from './img/country/226-united-states.svg';
import ES from './img/country/128-spain.svg';
import IT from './img/country/013-italy.svg';
import UK from './img/country/012-uk.svg';


export interface Props {
}

interface State {
}

class Languages extends PureComponent<Props, State> {
    render() {
        return (
            <div className={"dropdown"}>
                <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                    <div className="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1">
                        <img className="h-20px w-20px rounded-sm" src={IT} alt="" />
                    </div>
                </div>
                <div className="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right">
                    <ul className="navi navi-hover py-4">
                        <li className="navi-item">
                            <a href="#" className="navi-link">
                                <span className="symbol symbol-20 mr-3">
                                    <img src={IT} alt="" />
                                </span>
                                <span className="navi-text">Italiano</span>
                            </a>
                        </li>
                        <li className="navi-item">
                            <a href="#" className="navi-link">
                                <span className="symbol symbol-20 mr-3">
                                    <img src={ES} alt="" />
                                </span>
                                <span className="navi-text">Espanol</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Languages;
