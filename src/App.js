import React, { Component } from 'react';

import Display from './Display';
import InputArea from './InputArea';
import { buttonClicks } from './api';

const key = {
  ESC: 27,
  ENTER: 13,
  DIV: 111,
  MULT: 106,
  PERIOD: 110,
  MINUS: 109,
  PLUS: 107,
  DEL: 8,
  SQRT: 86 // v letter
};

const operationMap = {
  [key.ESC]: 'AC',
  [key.ENTER]: '=',
  [key.DIV]: '\u00F7',
  [key.MULT]: '*',
  [key.PERIOD]: '.',
  [key.MINUS]: '-',
  [key.PLUS]: '+',
  [key.DEL]: 'DEL',
  [key.SQRT]: '\u221A',
  96: '0',
  97: 1,
  98: 2,
  99: 3,
  100: 4,
  101: 5,
  102: 6,
  103: 7,
  104: 8,
  105: 9
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      lastOperation: "+"
    };
    this.handleResult = this.handleResult.bind(this);
  }

  handleResult(operation) {
    const { display, lastOperation } = this.state;
    const result = buttonClicks(operation, display, lastOperation);
    this.setState({ display: result.val, lastOperation: result.op });
  }

  componentDidMount() {
    window.addEventListener('keydown', ev => {
      const key = ev.keyCode || ev.which;
      if (operationMap[key]) {
        const operation = operationMap[key];
        this.handleResult(operationMap[key]);

        // simulate visual button press
        const button = document.getElementById(`button-${operation}`);
        button.classList.add('button--active');
        setTimeout(() => button.classList.remove('button--active'), 200);
      }
    });
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
