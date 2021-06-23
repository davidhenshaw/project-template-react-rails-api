import React, { Component } from 'react';
import { useParams } from 'react-router';

function StartupPage()
{
    let {id} = useParams();


    return(
        <div className="startup-page">
            <div>
                <h2>Startup Name</h2>
                <h3>Category</h3>
                <img alt="startup-image" src=""/>
            </div>
            <div className="startup-info">
                <h3>Funding Goal:</h3>
                <h3>Amount Funded:</h3>
                <PledgeForm />
            </div>
        </div>
    );
    
  }

  function PledgeForm(){

    return(
        <form>
            <label>Pledge Amount:</label>
            <input type="number"></input>
            <button>Make a Pledge!</button>
        </form>
    )
  }

  
  export default StartupPage;