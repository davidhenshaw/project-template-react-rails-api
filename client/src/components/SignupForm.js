import React from 'react';

class SignupForm extends React.Component
{
    render(){
        
        return <div className="form">
            <h2>Sign Up!</h2>
            <form>
                <label>
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password"/>
                </label>
                <label>
                    Funding Amount:
                    <input type="number" name="funds"/>
                </label>
            </form>
        </div>
    }
}

export default SignupForm;