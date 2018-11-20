import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialCard from './SocialCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Example 1</h1>
        <SocialCard name="Cat" image="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350" />
        <SocialCard name="Dog" image="https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
    );
  }
}

export default App;
