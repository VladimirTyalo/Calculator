import React, { Component } from 'react';

import './App.css';
import Display from './Display';
import InputArea from './InputArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Calculator</h1>
        <div className="calculator">
          <Display />
          <InputArea />
        </div>
      </div>
    );
  }
}

export default App;
