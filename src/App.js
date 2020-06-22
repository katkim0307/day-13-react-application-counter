import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      incrementBy: 'Single Increment',
    };
    // TRADITIONAL WAY OF BINDING BEFORE DECLARING A NEW METHOD
    // this.increment = this.increment.bind(this);
  };

  // DECLARE METHODS

  increment = () => {
    // .setState is a built in method
    let count = this.state.count;
    if(count===20){return;}
    this.setState ({
      count: count+1
    })
  }

  decrement = () => {
    let count = this.state.count;
    if(count===0){return;}
    this.setState ({
      count: count-1
    })
  }

  clear = () => {
    this.setState ({
      count: 0
    })
  }


  render() {
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
        </div>
      </div>
      );
  };
};

export default Counter;

/* 
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*
import React, {Component} from 'react';

class HelloWorld extends Component {
  render() {
    return(
      <div>Hello World</div>
    );
  };
};

export default HelloWorld;
*/