import React, { Component } from 'react';
import './services.css';

class Services extends Component {
    render() {
        return (
            <div className="section services">
            <div className="container">
            <div className="section-title">
            <h2>Ecommerce Services</h2>
        </div>
        <div className="text-info">
            <span>We offer a full range of Ecommerce Services. From building online sales channels to solutions that ensure customers receive your products.</span>
        </div>
        <div className="list-services block-list has-3-col">
            <div className="col">
            <div className="col-content">
            <h4>B2C Ecommerce</h4>
        <p>Architect, develop, operate, and maintain brand sites and online retails stores.</p>
        </div>
        </div>
        <div className="col">
            <div className="col-content">
            <h4>B2B Ecommerce</h4>
        <p>Architect, develop, operate, and maintain marketplaces, pos, and b2b solutions.</p>
        </div>
        </div>
        <div className="col">
            <div className="col-content">
            <h4>B2E Ecommerce</h4>
        <p>Architect, develop, operate, and maintain employee portals, employee stores, member base ecommerce purchase programs.</p>
        </div>
        </div>
        <div className="col">
            <div className="col-content">
            <h4>ERP</h4>
            <p>Architect, develop, operate, and maintain ERP platforms, Salesforce, Netsuite, Odoo.</p>
        </div>
        </div>
        <div className="col">
            <div className="col-content">
            <h4>Logistics & Warehouse </h4>
            <p>Architech and develop logisitcs solutions for Transportion, Warehousing, and Order management.</p>
        </div>
        </div>
        <div className="col">
            <div className="col-content">
            <h4>Custom Solutions</h4>
        <p>We develop customize solutions, including mobile apps, line, facebook and social applications</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
    }
}

export default Services;