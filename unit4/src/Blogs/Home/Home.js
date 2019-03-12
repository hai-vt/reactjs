import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './home.css';

export default class Home extends Component {
    render () {
        return (
            <div className="home-content">
                <div className="welcome">Hello every one</div>
                <div className="introduce">
                    I am Hai, I am from VietNam
                </div>
                <div className="link">
                    For more details please <Link to="/about/">click here</Link>
                </div>
            </div>
        )
    }
}