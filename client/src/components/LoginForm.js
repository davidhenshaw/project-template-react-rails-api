import React from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import Money from './video/money.mp4'
import styled from 'styled-components';

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
            return <redirect to="/" />
        }
        else
        return <div className="form"
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
                >
                    <source src={ Money } type="video/mp4" />
                </video>
            <h1>Welcome to Fully Funded!</h1>
            <h2>The Startup Funding Marketplace</h2>
            <Form onSubmit={this.handleSubmit}>
                <h2>Log In:</h2>
                <label>
                    Username:
                    <input value={this.state.username} onChange={this.handleChange} type="text" name="username"/>
                </label>
                <label>
                    Password:
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password"/>
                </label>
                <Button>Submit</Button><br></br>
                <a href="/signup">New Here? Sign Up!</a> 
            </Form>
        </div>
    }
}
function Button(props){

    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid green;
    color: green;
    margin: 0 1em;
    padding: 0.25em 1em;`

    return <Button>{props.children}</Button>
}
function Form(props){

    const Form = styled.form`
    background: transparent;
    border-radius: 3px;
    border: 2px solid green;
    color: green;
    margin: 0 1em;
    padding: 0.25em 1em;
    width: 15%;
    text-align: center;`

    return <Form onSubmit={props.onSubmit}>{props.children}</Form>
}
export default LoginForm; 
