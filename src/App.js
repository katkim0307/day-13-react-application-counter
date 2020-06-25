import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      doubleOn: false,
    };
    // TRADITIONAL WAY OF BINDING BEFORE DECLARING A NEW METHOD
    // this.increment = this.increment.bind(this);
  };

  // DECLARE METHODS

  increment = () => {
    let count = this.state.count;
    let doubleOn = this.state.doubleOn;

    // if(count<20) {
    //   doubleOn ? this.setState({count: count+2}) : this.setState ({count: count+1})
    // }

    if(doubleOn && count<19){
      this.setState({count: count+2})
    }
    else if(!doubleOn && count<20){
      this.setState({count: count+1})
    }
  }

  decrement = () => {
    let count = this.state.count;
    let doubleOn = this.state.doubleOn;

    // if(count>0){
    //   doubleOn ? this.setState({count: count-2}) : this.setState ({count: count-1})
    // }

    if(doubleOn && count>1){
      this.setState({count: count-2})
    }
    else if(!doubleOn && count>0){
      this.setState({count: count-1})
    }
  }

  clear = () => {
    this.setState ({
      count: 0
    })
  }

  toggleFunc = () => {
    this.setState ({
      doubleOn: !this.state.doubleOn
    })
  }

  render() {
    let doubleOn = this.state.doubleOn;

    return (
      // parent div block for 
      // 1. Counter.js nav bar
      // 2. counter # display using JS code: {this.state.count}
      // 3. buttons (increment, decrement, clear, toggle between single/double)
      <div className = "container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.clear}>Clear</button>
          <button type="button" onClick={this.toggleFunc}>{doubleOn ? 'Double': 'Single'}</button>
        </div>
      </div>
      );
  };
};

export default Counter;
