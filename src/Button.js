import React, { Component } from 'react';

class Button extends Component {
  handleClick() {
    this.props.press(this.props.val);
  }
  getStyle() {
    const { val } = this.props;
    switch (val) {
      case '*': {
        return {
          position: "relative",
          top: "0.25em"
        };
      }
      case 'AC':
      case 'DEL': {
        return {
          display: "inline-block",
          verticalAlign: "middle",
          textAlign: "center",
          fontSize: "30px",
        };
      }
      case '+/-': {
        return {
          fontSize: "30px",
        };
      }
      default: return {};
    }
  }

  buttonClassName() {
    switch (this.props.val) {
      case '=': {
        return 'button button--equal';
      }
      case 'AC': {
        return 'button button--clear';
      }
      case 'DEL': {
        return 'button button--del';
      }
      default: return 'button';
    }
  }
  render() {
    return (
      <button className={this.buttonClassName()} onClick={this.handleClick.bind(this)} >
        <span style={this.getStyle()} >
          {this.props.val}
        </span>
      </button>
    );
  }
}

export default Button;