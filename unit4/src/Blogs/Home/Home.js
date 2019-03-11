import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends Component {
    render () {
        return (
            <Router>
            <div className="home-content">
                <div className="welcome">Hello every one</div>
                <div className="introduce">
                    I am Hai, I am from VietNam
                </div>
                <div className="link">
                    For more details please click <Link to="/about/">here</Link>
                </div>
            </div>
        </Router>
        )
    }
}