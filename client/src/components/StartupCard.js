import React, { Component } from 'react';
import './StartupCard.css';
import { Link } from 'react-router-dom'
// this does not need to be a class component bc there is not state; it can literally be a functional component since only props is called 

//Converts the numbers representing money to have dollar signs, commas, and decimal points
let format = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format;

class StartupCard extends Component {
  
  startupArray = [ 
    "https://image.shutterstock.com/image-vector/barn-icon-vintage-shed-logo-600w-1742137004.jpg"    
  ]

    render() {
    return (
      <div className="startup-card" key={this.props.startup.id}>
        <div className="image-container">
          <img src={`${this.startupArray[Math.floor(Math.random()*this.startupArray.length)]}`}></img>
        </div>
      <div className="card-content">
        <a href={"/startup/" + this.props.startup.id}>
          <div className="card-title">
            <h4>{this.props.startup.name}</h4>
          </div>
        </a>

        <div className="card-body">
            <p><span style={{fontWeight: "bold"}}>Name: </span> {this.props.startup.name} </p>
            {/* be able to sort by category */}
            <p><span style={{fontWeight: "bold"}}>Category: </span>{this.props.startup.category.name} </p>
            {/* be able to sort */}
            <p><span style={{fontWeight: "bold"}}>Funding Goal: </span> {format(this.props.startup.goal)}  </p>
        </div>

      <div className="btnn" >
                    {/* the below code line 45 relies on a pledge form */}
      <Link to='/startup/1'> 
          <button style={{marginTop:"10px"}}>
            <a>
              Make Pledge
            </a>
          </button>
        </Link>
                {/* the below code operates like a favorite to show if you have funded a startup or not */}
        <button style={{marginLeft: "10px", marginTop: "10px"}} onClick={()=>this.props.handleClick(this.props.startup)}>
        <a>Funded ⭐️ </a>
        </button>

      </div>
      </div>
      </div>

      // add filter
    );
  }

}

export default StartupCard;