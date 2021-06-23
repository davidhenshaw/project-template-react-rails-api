import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';

function StartupPage(props)
{
    const [startup, setStartup] = useState(null);
    let { id } = useParams();

    useEffect( () => {
            axios.get(`/startups/${id}`)
            .then( (res) => {
                if(res.statusText == "OK")
                    setStartup(res.data)
                else
                    console.log(res.data)
            })
        } 
        , []);


    if(!startup)
    {
        return <h1>Loading...</h1>
    }
    else
    return(
        <div className="startup-page">
            <div>
                <h2>{startup.name}</h2>
                <em><h4>{startup.category.name}</h4></em>
                <img alt="startup-image" src=""/>
            </div>
            <div className="startup-info">
                <h3>Funding Goal: {startup.goal}</h3>
                <h3>Amount Funded:{startup.amount_funded}</h3>
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