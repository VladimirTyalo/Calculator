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
      keyDown: false
    };
    this.handleResult = this.handleResult.bind(this);
  }

  handleResult(operation) {
    const { display, lastOperation } = this.state;
    const result = buttonClicks(operation, display, lastOperation);
    this.setState({ display: result.val, lastOperation: result.op });
  }

  componentDidMount() {
    const keyDownHandler = window.addEventListener('keydown', ev => {
      if(this.state.keyDown) return;
      const operation = makeAction('add', ev);
      this.handleResult(operation);
    });
    const keyUpHandler = window.addEventListener('keyup', ev => {
      makeAction('remove', ev);
    });

    this.setState({ keyUpHandler });
    this.setState({ keyDownHandler });

    const self = this;
    function makeAction(action, ev) {
      const key = ev.keyCode || ev.which;
      let operation;
      if (operationMap[key]) {
        operation = operationMap[key];
        const button = document.getElementById(`button-${operation}`);
        if (action === 'add') {
          self.setState({keyDown: true});
          button.classList.add('button--active');
        } else {
          self.setState({keyDown: false});
          button.classList.remove('button--active');
        }
      }
      return operation;
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
