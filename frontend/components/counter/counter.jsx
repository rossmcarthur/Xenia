import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(e) {
    e.preventDefault();
    this.setState( { count: this.state.count + 1});
  }

  handleDecrement(e) {
    e.preventDefault();
    this.setState( { count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement} disabled={this.state.count === 1}>-</button>
          <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
