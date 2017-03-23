import React, { Component } from 'react';

class Button extends Component {
  handleClick() {
    this.press(this.props.val);
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
      case 'AC': {
        return {
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
    switch(this.props.val) {
      case '=': {
        return 'button button--equal';
      }
      case 'AC': {
        return 'button button--clear';
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