import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';

//Converts the numbers representing money to have dollar signs, commas, and decimal points
let currencyUS = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

function UserPledges(props)
{
    let { user, startup } = props;
  const [pledges, setPledges] = useState([]);

  function handleDelete(toDelete_id)
  {
    axios.delete(`/pledges/${toDelete_id}`)
    .then( (res) => {
        //Find the pledge we want to delete
        let removed = pledges.filter( (pledge) => pledge.id !== toDelete_id);
        setPledges(removed);
    });

  }

  function handleNewPledge(pledge)
  {
      console.log(pledge);
    let newList = pledges.slice();
    newList.unshift(pledge);

    setPledges(newList);
  }

  //This code block filters out pledges that don't match the startup_id
  useEffect( () => {
      axios.get(`/users/${user.id}/pledges`)
      .then( (res) => {
          if(res.statusText == "OK"){
              let pledge_arr = res.data;

              if(startup){
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
              startup ? 
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
        .then( res => onPledge(res.data) )
    }

    return(
        <form onSubmit={(e) => submitPledge(e)}>
            <label>Pledge Amount:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button>Make a Pledge!</button>
        </form>
    )
  }

function Pledge(props)
{
    let { pledge, onDelete } = props;
    
    function handleDelete()
    {
        onDelete(pledge.id);
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