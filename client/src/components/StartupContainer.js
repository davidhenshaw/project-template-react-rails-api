import React, { Component } from 'react';
import StartupCard from './StartupCard';
// import './StartupCard.css';

class StartupContainer extends Component {
    constructor() {
        super();
    }
    componentDidMount() 
    {
        // fetch request and response and what to do with response goes here
    }
    render() { return this.props.startups.map((startup) => 
        {
            return <StartupCard startup={startup}/>
        });
    }

  }
  
  export default StartupContainer;