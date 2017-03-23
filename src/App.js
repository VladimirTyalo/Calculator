import React, { Component } from 'react';

import './App.css';
import Display from './Display';
import InputArea from './InputArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      lastOperation: "+"
    };
  }

  handleResult(value, operation) {
    this.setState({display: value, lastOperation: operation});
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Calculator</h1>
        <div className="calculator">
          <Display val={this.state.display} operation={this.state.lastOperation}/>
          <InputArea getResult={this.handleResult.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
