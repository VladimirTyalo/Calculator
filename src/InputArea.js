import React, { Component } from 'react';

import Button from './Button';

class InputArea extends Component {

  handlePress(operation) {
    // propagate operation to upper state
    this.props.getResult(operation);
  }
  render() {
    return (
      <div className="input-area">
        <Button val={7} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={8} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={9} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={"DEL"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={"AC"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={4} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={5} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={6} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={"*"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={"\u00F7"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={1} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={2} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={3} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={"+"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={"-"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={"+/-"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={0} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={"."} type={"value"} press={this.handlePress.bind(this)} />
        <Button val={"\u221A"} type={"operation"} press={this.handlePress.bind(this)} />
        <Button val={"="} type={"operation"} press={this.handlePress.bind(this)} />

      </div>
    );
  }
}

export default InputArea;