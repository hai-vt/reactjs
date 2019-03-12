import React, { Component } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
/*import Aboutme from './About/AboutMe';*/
/*import BlogList from './Blog/BlogList';*/
/*import ContactMe from './Contact/ContactMe';*/
import './index.css';

export default class Index extends Component {
    render() {
        return (
            <div className="main-container">
            <Header />
            <Home />
            </div>
    );
    }
}