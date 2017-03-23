import React, { Component } from 'react';

import './App.css';
import Display from './Display';
import InputArea from './InputArea';

import {buttonClicks} from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      lastOperation: "+"
    };
  }

  handleResult(operation) {
    const {display, lastOperation} = this.state;
    const result = buttonClicks(operation, display, lastOperation);
    this.setState({display: result.val, lastOperation: result.op});
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Calculator</h1>
        <div className="calculator">
          <Display val={this.state.display} operation={this.state.lastOperation}/>
          <InputArea getResult={this.handleResult.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
