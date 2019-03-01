import React, { Component } from 'react';
import './contactus.css';

class Contactus extends Component {
    render() {
        return (
            <div className="section contactus bg_orange">
            <div className="container">
            <div className="top-contactus">
            <div className="info">
            <h4>Kickstart a project with us today</h4>
        <span>We get your ecommerce channels up and running quickly.</span>
        </div>
        <div className="action">
            <a href="contact-us" className="button white  medium bordered-bot ">Contact Us</a>
        </div>
        </div>
        </div>
        </div>
    )
    }
}

export default Contactus;