import React, { Component } from 'react';
import avartar from './../../images/shopstack-logo-email.png';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
            <div className="topbar">
            <div className="container">
            <a href="tel:(+66) 86-613-2807">CALL : (+66) 86-613-2807</a>
        </div>
        </div>
        <div className="header-nav">
            <div className="container">
            <div className="logo">
            <img src={avartar} alt="avartar" />
            </div>
            <ul id="nav"><li id="menu-item-9557" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9557"><a href="http://www.shopstack.asia" data-description="start here">Home</a></li>
        <li id="menu-item-9597" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9597"><a href="http://www.shopstack.asia:80/index.php/about-us/" data-description="About Us">Company</a></li>
        <li id="menu-item-9596" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9596"><a href="http://www.shopstack.asia:80/index.php/portfolio-shopstack/" data-description="">Portfolio</a></li>
        <li id="menu-item-9592" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9592"><a href="http://www.shopstack.asia:80/index.php/contact-us/" data-description="connect now">Contact</a></li>
        </ul>
        </div>
        </div>
        </div>
    )
    }
}

export default Header;