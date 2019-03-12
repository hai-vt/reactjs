import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import AboutMe from './About/AboutMe';
import BlogList from './Blog/BlogList';
import ContactMe from './Contact/ContactMe';
import './index.css';

export default class Index extends Component {
    render() {
        return (
            <Router>
            <div className="main-container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={AboutMe} />
            <Route path="/blog/" component={BlogList} />
            <Route path="/contact/" component={ContactMe} />
            </div>
            </Router>
    );
    }
}