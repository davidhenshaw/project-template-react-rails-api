// import logo from './logo.svg';
import './App.css';
import StartupContainer from './containers/StartupContainer';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import { Navbar } from './components/common';
import { Header } from './components/common';


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
  if (!user) return <LoginForm onLogin={setUser} />;
  return (
  <Router>
      <div className="App">
      <Header />
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <SignupForm />
          </Route>
          {/* <Route path="/login"> */}
            {/* <LoginForm onLogin={handleLogin} /> */}
          {/* </Route> */}
          <Route path="/">
            <User onLogout={handleLogout} user={user} />
          </Route>
        </Switch>
        {/* <Route path="/Startup"> */}
        <StartupContainer startups={startups} />
        {/* to add to your favorites (funded) list this.state.addPledged */}
        {/* </Route> */}
        
    
      </div>
    </Router>
    );
}


function User(props)
{

  if(!props.user)
    {
      return <Redirect to="/login" />;
    }
  else
  return <div>
          <h3>Welcome, {props.user.username}!</h3>
          <button onClick={props.onLogout}>Log Out</button>
        </div>
}


// function App() {
//   // return <SignupForm />
//   return (
//     <div className= "App">
//       <Header />
//     </div> 
//   );
// }

// function ReactPlaceholder()
// {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <Header />
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
