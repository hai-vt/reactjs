import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from '../About/AboutMe';
import BlogList from '../Blog/BlogList';
import ContactMe from '../Contact/ContactMe';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <nav className="nav">
            <ul>
            <li>
            <Link to="/">Home</Link>
        </li>
            <li>
            <Link to="/about/">About Me</Link>
        </li>
        <li>
        <Link to="/blog/">Blog</Link>
            </li>
            <li>
            <Link to="/contact/">Contact Me</Link>
        </li>
        </ul>
        </nav>
        </div>
        );
    }
}