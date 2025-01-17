import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UserPledges from '../components/UserPledges'

//Converts the numbers representing money to have dollar signs, commas, and decimal points
let currencyUS = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

function StartupPage(props)
{
    const [startup, setStartup] = useState(null);
    const [funding, setFunding] = useState(0);
    let { id } = useParams();

    useEffect( () => {
            axios.get(`/startups/${id}`)
            .then( (res) => {
                if(res.statusText == "OK"){
                    setStartup(res.data);
                    setFunding(sumPledges(res.data));
                }
                else
                {
                    console.log(res.data);
                }
            })
        } 
        , []);
        
    function sumPledges(startup)
    {
        let sum = 0;
        if(startup)
        {
            let amounts = startup.pledges.map( (pledge) => { return pledge.amount});
            sum = amounts.reduce( (a, b) => a + b, 0);
        }

        return sum;
    }

    function handlePledgeChange(amount)
    {
        setFunding( funding + amount);
    }

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
                <h3>Amount Funded: <p>{currencyUS.format(funding)}</p></h3>
                {/* <PledgeForm user={props.user} startup_id={id}/> */}
                <UserPledges user={props.user} startup={startup} onPledgeChange={handlePledgeChange}/>
            </div>
        </div>
    );
    
  }

  export default StartupPage;