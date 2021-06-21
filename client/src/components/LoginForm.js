import React from 'react';
import axios from 'axios';

let baseURL = "http://localhost:4000";

class LoginForm extends React.Component
{

    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post(baseURL + '/login', this.state)
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    handleChange = (event) => {
        this.setState(
                { [event.target.name]: event.target.value}
            )
    }

    render(){
        return <div className="form">
            <h2>Sign Up!</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input value={this.state.username} onChange={this.handleChange} type="text" name="username"/>
                </label>
                <label>
                    Password:
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    }
}

export default LoginForm;