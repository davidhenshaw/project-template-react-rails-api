import React from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";

let baseURL = "http://localhost:4000";

class LoginForm extends React.Component
{

    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
    }

    clearForm = () => {
        this.setState({
            username: "",
            password: "",
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseURL + '/login', this.state)
          .then((response) => {
            let user = response.data
            this.clearForm();
            this.props.onLogin(user)
            this.setState({loggedIn: true});
          }, 
          (error) => {
            console.log(error);
          });
    }

    handleChange = (event) => {
        this.setState(
                { [event.target.name]: event.target.value}
            )
    }

    render(){
        if(this.state.loggedIn)
        {
            return <Redirect to="/" />
        }
        else
        return <div className="form">
            <h3>Welcome, Guest!</h3>
            <h2>Log In</h2>
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