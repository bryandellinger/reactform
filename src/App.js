import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './semantic-ui/semantic.min.css';
import Button from './Button';
import BasicInput from './BasicInput';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Button />
       <div className={'spacer'}></div>
       <BasicInput />
      </div>
    );
  }
}

export default App;
