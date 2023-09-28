// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//class component

import React, { Component } from 'react';
import './index.css';
import { AddHeading } from './Heading';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment  = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  reset = () => {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div>
        <AddHeading /> 
        <div className="testContainer">
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Counter