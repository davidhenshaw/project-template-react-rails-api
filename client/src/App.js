// import logo from './logo.svg';
import './App.css';
import StartupContainer from './containers/StartupContainer';
import StartupPage from './containers/StartupPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import { Navbar } from './components/common';
import { Header } from './components/common';
import Profile from './components/Profile';



import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // useHistory

} from "react-router-dom";
import InvestorCard from './components/InvestorCard';
import UserPledges from './components/UserPledges';

let baseURL = "http://localhost:4000";

function App() {
  // hooks 
  const [user, setUser] = useState(null);
  const [startups, setStartups] = useState([]);

  // let history = useHistory();

  // useEffect runs code 1x
  useEffect(() => {
    axios.get("/me").then((response) => {
      if (response.status == 200) {
        setUser(response.data);
      }
      else
      {
        console.log(response);
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    axios.get("/startups").then((response) => {
      if (response.status == 200) {
        setStartups(response.data);
      }
      else
      {
        console.log(response);
        setStartups([]);
      }
    });
  }, []);


  function handleLogout()
  {
    axios.delete("/logout")
    .then();

    setUser(null);
  }

  function handleLogin(user){
    setUser(user);
  }

  if (!user) return <LoginSignup onLogin={handleLogin} />
  
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          {/* <Route path="/login-signup">
            <LoginSignup onLogin={handleLogin} />
          </Route> */}

          <Route 
            path="/startup/:id" 
            children={<StartupPage user={user} />} 
          />

          <Route path="/me">
            <Profile user={user} />
          </Route>
          <Route exact path="/">
            <User onLogout={handleLogout} user={user} />
            <StartupContainer startups={startups} />
          </Route>
        </Switch> 
        {/* to add to your favorites (funded) list this.state.addPledged */}
        
    
      </div>
    </Router>
    );
}


function User(props)
{

  // if(!props.user)
  //   {
  //     return <Redirect to="/login" />;
  //   }
  // else
  return <div>
          <h3>Welcome, {props.user.username}!</h3>
          <button onClick={props.onLogout}>Log Out</button>
        </div>
}

function LoginSignup(props)
{
  let { onLogin, loginView: isLoginView } = props
  const [isLogin, setIsLogin] = useState(isLoginView);

  const toggle = () => {
    setIsLogin(!isLogin);
  }

  return(
    <div>
        
      {isLogin ? 
      <SignupForm />
      :
      <LoginForm onLogin={onLogin} />
      }

      <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
        {
          isLogin ?
          <button onClick={toggle}>New Here? Sign Up!</button> 
          :
          <button onClick={toggle}>Already have an account? Log In Here!</button> 
        }
      </div>
    </div>
  )
}

export default App;
