import React, { Component } from 'react'
import './App.css';
import Quiz from './Quiz.js'

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      data: undefined,
    };
  }
  componentWillMount() {
    
    }
  render() {
    return (
    <div>
      <Quiz />
     
      </div>
    )
  }
}

export default App