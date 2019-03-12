import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="App-welcome">
            Chào Mừng bạn đến với khóa học ReactJS
          </div>
        </header>
          <p>
          Để bắt đầu học vui lòng truy  <code>src/App.js</code> chỉnh sửa và lưu lại.
          </p>
      </div>
    );
  }
}

export default App;
