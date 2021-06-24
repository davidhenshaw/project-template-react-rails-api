import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import InvestorCard from './InvestorCard';
import UserPledges from './UserPledges';

//Converts the numbers representing money to have dollar signs, commas, and decimal points
let formatCurrency = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format;

const Profile = (props) => {
    let { user } = props;
    let startup = {};
    const [pledges, setPledges] = useState([]);
    const [userFunds, setUserFunds] = useState(user.funds);

    let contactInfo = {
        name: user.username,
        email: `${user.username}@example.com`,
        id: user.id
    }

    function sumPledges(pledges)
    {
        let sum = 0;
        let amounts = pledges.map( (pledge) => { return pledge.amount});
        sum = amounts.reduce( (a, b) => a + b, 0);

        return sum;
    }

    function handleFundsChange(funds)
    {
        setUserFunds(funds);
    }

    useEffect( () => {
        axios.get(`/users/${user.id}/pledges`)
        .then( (res) => {
            if(res.statusText == "OK"){
                let pledge_arr = res.data;
                if(startup.name){
                    pledge_arr = res.data.filter( pledge => pledge.startup_id == startup.id);
                  }
                setPledges(pledge_arr.reverse());
            }
            else
            {
                console.log(res.data.errors);
            }
        })
    } 
    , []);

    return (
        <div>
            <InvestorCard contact={contactInfo}/>
            <div>
                <h2>Funding:</h2>
                <h3>Total: {formatCurrency(userFunds)}</h3>
                <h3>Available: {formatCurrency(userFunds - sumPledges(pledges))}</h3>
                <h3>Amount Pledged: {formatCurrency(sumPledges(pledges))}</h3>
            </div>
            <UserPledges user={user} startup={startup} />
            <FundForm user={user} onFundsChange={handleFundsChange}/>
        </div>
    )
}

const FundForm = (props) =>
{
    let { user, onFundsChange } = props;
    const [amount, setAmount] = useState(0);

    function handleSubmit(event)
    {
        event.preventDefault();
        let funds = {
            amount: +amount //coerce into being an integer
        }
        axios.patch(`/users/${user.id}`, funds)
        .then( (res) => 
        {
            onFundsChange(res.data.funds) 
            clearForm();
        })
    }

    function clearForm()
    {
        setAmount(0);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add Money To Account:
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Profile
