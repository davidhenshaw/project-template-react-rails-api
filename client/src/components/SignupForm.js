import React from 'react';
import axios from 'axios';

let baseURL = "http://localhost:4000";

class SignupForm extends React.Component
{

    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            funds: 0
        }
    }

    clearForm = () => {
        this.setState({
            username: "",
            password: "",
            funds: 0
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();


        axios.post(baseURL + '/users', this.state)
          .then((response) => {
            this.clearForm();
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
        return <div className="form" 
                    style={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
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
                <label>
                    Funding Amount:
                    <input value={this.state.funds} onChange={this.handleChange} type="number" name="funds"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    }
}

export default SignupForm;