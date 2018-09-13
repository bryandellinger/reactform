import React, { Component } from 'react';

class BasicInput extends Component {
    static displayName = "04-basic-input";
    state = {
        fields:{
            name: '',
            email: ''
        },
        people: []
    };

    onInputChange = (evt) => {
        const fields = Object.assign({}, this.state.fields);
        fields[evt.target.name] = evt.target.value;
        this.setState({fields});
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();
        const people = [...this.state.people, this.state.fields];
        this.setState({people, fields:{name: '', email: ''}});
    }
    render() {
        return (
       <div>
            <h1>Sign Up Sheet</h1>
            <form onSubmit={this.onFormSubmit}>
                <div className={"ui input"}>
                    <input type="text" 
                    placeholder="Name"
                    name="name"
                    value={this.state.fields.name}
                    onChange={this.onInputChange}></input>
                </div>
                <div className={"ui input"}>
                    <input type="email" 
                    placeholder="Email"
                    name="email"
                    value={this.state.fields.email}
                    onChange={this.onInputChange}></input>
                </div>
                    <input type='submit' className={"ui secondary basic button"}/>
            </form>
            <div>
            <div className={'spacer'}></div>
                <h3>People</h3>
                <ul>
                    {this.state.people.map(({name, email},i) => (
                        <li key={i}>{name} ({email})</li>
                    ))}
                </ul>
            </div>
        </div>                  
        );
    }
}

export default BasicInput;