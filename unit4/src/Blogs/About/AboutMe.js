import React, { Component } from 'react';
import avartar from '../../public/images/avartar_image.png';

export default class AboutMe extends Component {
    render() {
        return(
            <div className="aboutme">
            <div className="aboutme-top">
            <div className="image"><img src={avartar} alt="avartar" /></div>
            <div className="info">
            <ul>
            <li><span className="fullname">Vu Thi Hai</span></li>
        <li><span className="shortname">haivt</span></li>
        <li><span className="date-of-birth">04-01-1987</span></li>
        <li><span className="gender">Female</span></li>
        </ul>
        </div>
        </div>
        </div>
    )
    }
}