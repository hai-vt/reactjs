import React, { Component } from 'react';
import Header from './shopstack/header/header';
import Banner from './shopstack/banner/banner';
import Contactus from './shopstack/contactus/contactus';
import Services from './shopstack/services/services';
import Aboutus from './shopstack/aboutus/aboutus';
import Abouttean from './shopstack/aboutteam/aboutteam';
import Ourwork from './shopstack/ourwork/ourwork';
import Ourclients from './shopstack/ourclients/ourclients';
import Footer from './shopstack/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Banner />
          <Contactus />
          <Services />
          <Aboutus />
          <Abouttean />
          <Ourwork />
          <Ourclients />
          <Footer />
      </div>
    );
  }
}

export default App;
