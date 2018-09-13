import React, { Component } from 'react';

class BasicInput extends Component {
    static displayName = "04-basic-input";
    state = { names: [] };
    onFormSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.refs.name.value);
    }
    render() {
        return (
       <div>
            <h1>Sign Up Sheet</h1>
            <form onSubmit={this.onFormSubmit}>
                <div className={"ui input"}>
                    <input type="text" placeholder="Name" ref='name'></input>
                </div>
                <div>
                    <input type='submit' className={"ui secondary basic button"}/>
                </div>
            </form>
        </div>                  
        );
    }
}

export default BasicInput;