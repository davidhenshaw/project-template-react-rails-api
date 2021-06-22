// import logo from './logo.svg';
import './App.css';
// import SignupForm from './components/SignupForm';
import { Header } from './components/common';
import StartupCard from './components/StartupCard';
import StartupContainer from './components/StartupContainer';


function App() {
  let startup = {name: 'Pottery Shed', category: 'Living', funding_goal: 50000
  }
  let startups = [startup, startup, startup]
  // return <StartupCard startup={startup} />
  return <StartupContainer startups={startups}/>
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
