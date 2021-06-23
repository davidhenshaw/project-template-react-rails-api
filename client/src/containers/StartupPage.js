import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';

let currencyUS = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

function StartupPage(props)
{
    const [startup, setStartup] = useState(null);
    let { id } = useParams();

    //Converts the numbers representing money to have dollar signs, commas, and decimal points


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
                <h3>Funding Goal: <p>{currencyUS.format(startup.goal)}</p></h3>
                <h3>Amount Funded: <p>{currencyUS.format(startup.amount_funded)}</p></h3>
                <PledgeForm user={props.user} id={id}/>
            </div>
        </div>
    );
    
  }


  function PledgeForm(props)
  {
    const [amount, setAmount] = useState(0);

    function submitPledge(event)
    {
        event.preventDefault();

        let pledge = {
            user_id: props.user.id,
            startup_id: props.id,
            amount: amount
        }

        axios.post(`/pledges`, pledge)
        .then( console.log )
    }


    return(
        <form onSubmit={(e) => submitPledge(e)}>
            <label>Pledge Amount:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button>Make a Pledge!</button>
        </form>
    )
  }

  
  export default StartupPage;