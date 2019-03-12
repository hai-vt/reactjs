import React, { Component } from 'react';
import avartar from './../../images/avartar.jpg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div class="Header">
                <div class="Avartar">
                <img src={avartar} alt="avartar" />
                </div>
            </div>
    )
    }
}

export default Header;