import React, { Component } from 'react';

class Button extends Component {
    onGreatClick = (evt) => { console.log('The user clicked button-1: great', evt);};
    onAmazingClick = (evt) => {console.log('The user clicked button-2: amazing', evt);};
    onButtonClick = (evt) => {
        const btn = evt.target;
        console.log(`The user clicked ${btn.name}:${btn.value}`);
    };




  render() {
    return (
        <div>
        <h1>What do you think of React?</h1>

        <button
         className={'ui button'}
          name='button-1'
          value='great'
          onClick={this.onButtonClick}
        >
          Great
        </button>

        <button
          className={'ui button'}
          name='button-2'
          value='amazing'
          onClick={this.onButtonClick}
        >
          Amazing
        </button>
      </div>
    );
  }
}

export default Button;