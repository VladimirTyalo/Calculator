import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className='display'>
            <div className="last-operation">{this.props.operation}</div>
          <div className="output">{this.props.val}</div>
      </div>
    );
  }
}

export default Display;