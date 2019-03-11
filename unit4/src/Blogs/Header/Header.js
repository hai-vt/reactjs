import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './header.css';

function Aboutme() {
    return (
        'how to remove this function and call to component About/Aboutme'
    )
}

function Blog() {
    return <h2>Blog</h2>;
}

function Contactme() {
    return <h2>Contact Me</h2>;
}

function Header() {
    return (
        <Router>
        <div className="header">
        <nav className="nav">
        <ul>
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

    <Route path="/about/" component={Aboutme} />
    <Route path="/blog/" component={Blog} />
    <Route path="/contact/" component={Contactme} />
    </div>
    </Router>
);
}

export default Header;