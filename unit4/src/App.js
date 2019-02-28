import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Footer from './components/footer/footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <About />
          <Footer />
      </div>
    );
  }
}

export default App;
