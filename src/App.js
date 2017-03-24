import React, { Component } from 'react';

import Display from './Display';
import InputArea from './InputArea';
import { buttonClicks } from './api';
import { operationMap } from './config';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      lastOperation: "+",
    };
    this.keyDown = false;
    this.handleResult = this.handleResult.bind(this);
  }

  handleResult(operation) {
    const { display, lastOperation } = this.state;
    const result = buttonClicks(operation, display, lastOperation);
    this.setState({ display: result.val, lastOperation: result.op });
  }

  componentDidMount() {
    const keyDownHandler = window.addEventListener('keydown', ev => {
      const key = ev.keyCode || ev.which;
      const operation = operationMap[key];
      if (!operation || this.keyDown) return;
  
      handleButtonAnimation('add', operation);
      this.handleResult(operation);
      this.keyDown = true;
    });

    const keyUpHandler = window.addEventListener('keyup', ev => {
      const key = ev.keyCode || ev.which;
      const operation = operationMap[key];
      if (!operation) return;
      handleButtonAnimation('remove', operation);
      this.keyDown = false;
    });

    this.setState({ keyUpHandler });
    this.setState({ keyDownHandler });

    function handleButtonAnimation(action, operation) {
      const button = document.getElementById(`button-${operation}`);
      if (action === 'add') {
        button.classList.add('button--active');
      } else {
        button.classList.remove('button--active');
      }
    }
  }
  componentWillUnmount() {
    const { keyDownHandler, keyUpHandler } = this.state;
    if (keyDownHandler) window.removeEventListener(keyDownHandler);
    if (keyUpHandler) window.removeEventListener(keyUpHandler);
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Calculator</h1>
        <div className="calculator">
          <Display val={this.state.display} operation={this.state.lastOperation} />
          <InputArea getResult={this.handleResult} />
        </div>
      </div>
    );
  }
}

export default App;
