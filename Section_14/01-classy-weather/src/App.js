import React from 'react';

class Counter extends React.Component {
  // the consstructor method of a class component
  constructor(props) {
    super(props);

    // initializes states, which needs to be an object
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // event handlers
  handleDecrement() {
    // to set state based in the current state, we need a callback function
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((currState) => {
      return { count: currState.count + 1 };
    });
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  // this is equivalent of the function body
  render() {
    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + this.state.count);

    return (
      <>
        <div>
          <button onClick={this.handleDecrement}>-</button>
          <span>
            {date.toDateString()} [{this.state.count}]
          </span>
          <button onClick={this.handleIncrement}>+</button>
        </div>
        <div>
          <button onClick={this.handleReset}>Reset counter</button>
        </div>
      </>
    );
  }
}

export default Counter;
