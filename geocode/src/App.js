import React, { Component } from 'react';
import logo from './logo.svg';
import ConnectDB from './components/ConnectDB';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi</h1>
        <ConnectDB/>
      </div>
    );
  }
}

export default App;
