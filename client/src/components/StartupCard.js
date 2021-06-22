import React, { Component } from 'react';
import './StartupCard.css';
// import { Link } from 'react-router-dom'

// this does not need to be a class component bc there is not state; it can literally be a functional component since only props is called 
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
      <div className="card-title">
        <h4>{this.props.startup.name}</h4>
      </div>
      <div className="card-body">
        <p><span style={{fontWeight: "bold"}}>Name: </span> {this.props.startup.name} </p>
        {/* be able to sort by category */}
        <p><span style={{fontWeight: "bold"}}>Category: </span>{this.props.startup.category} </p>
        {/* be able to sort */}
        <p><span style={{fontWeight: "bold"}}>Funding Goal: </span> {this.props.startup.funding_goal}  </p>
      </div>
      <div className="btnn" >
                    {/* the below code line 45 relies on a pledge form */}
      {/* <Link to=''>  */}
          <button>
            <a>
              Make Pledge
            </a>
          </button>
        {/* </Link> */}
                {/* the below code operates like a favorite to show if you have funded a startup or not */}
        <button style={{marginLeft: "10px", marginTop: "10px"}} onClick={()=>this.props.handleClick(this.props.startup)}>
        <a>Funded ⭐️ </a>
        </button>

      </div>
      </div>
      </div>
    );
  }

}

export default StartupCard;