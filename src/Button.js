import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
        <div>
        <h1>What do you think of React?</h1>

        <button
         className={'ui button'}
          name='button-1'
          value='great'
          onClick={this.onGreatClick}
        >
          Great
        </button>

        <button
          className={'ui button'}
          name='button-2'
          value='amazing'
          onClick={this.onAmazingClick}
        >
          Amazing
        </button>
      </div>
    );
  }
}

export default Button;