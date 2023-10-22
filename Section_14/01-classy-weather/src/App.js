import React from 'react';

class Counter extends React.Component {
  // the consstructor method of a class component
  constructor(props) {
    super(props)

    // initializes states, which needs to be an object
    this.state = {count: 5}
  }
  // this is equivalent of the function body
  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
