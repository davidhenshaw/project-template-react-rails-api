import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

//Converts the numbers representing money to have dollar signs, commas, and decimal points
let currencyUS = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

function UserPledges(props)
{
    let { user, startup, onPledgeChange } = props;
  const [pledges, setPledges] = useState([]);

  function handleDelete(pledge)
  {
    axios.delete(`/pledges/${pledge.id}`)
    .then( (res) => {
        //Find the pledge we want to delete
        onPledgeChange(pledge.amount * -1)
        let removed = pledges.filter( (arr_pledge) => arr_pledge.id !== pledge.id);
        setPledges(removed);
    });

  }

  function handleNewPledge(pledge)
  {
      console.log(pledge);
    let newList = pledges.slice();
    newList.unshift(pledge);

    setPledges(newList);
    onPledgeChange(pledge.amount);
  }

  //This code block filters out pledges that don't match the startup_id
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

  if(!pledges)
  {
      return <h1>Loading...</h1>
  }else
  return ( 
      <div>
          {
              startup.name
              ? 
              <PledgeForm user={user} startup_id={startup.id} onPledge={handleNewPledge}/>
              :
              null
          }
        {pledges.map((pledge, idx) => <Pledge onDelete={handleDelete} pledge={pledge} key={idx} />)}
      </div>
    )
  
}

function PledgeForm(props)
  {
    let { user, startup_id, onPledge } = props;
    const [amount, setAmount] = useState(0);

    function submitPledge(event)
    {
        event.preventDefault();

        let pledge = {
            user_id: user.id,
            startup_id: startup_id,
            amount: amount
        }

        axios.post(`/pledges`, pledge)
        .then( res => 
            {
                onPledge(res.data);
                clearForm();
            } )
    }

    function clearForm()
    {
        setAmount(0);
    }

    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;`

    return(
        <form onSubmit={(e) => submitPledge(e)}>
            <label>Pledge Amount:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <Button>Make a Pledge!</Button>
        </form>
    )
  }

function Pledge(props)
{
    let { pledge, onDelete } = props;
    
    function handleDelete()
    {
        onDelete(pledge);
    }

    return (
        <div>
            <span>
                <p>Pledge Amount: {currencyUS.format(pledge.amount)}</p>
                <button onClick={handleDelete}>X</button>
            </span>
        </div>
    )
}


export default UserPledges;