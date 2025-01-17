import React from "react";
import { Link } from "react-router-dom";
// import user from "../images/user.png";

// not sure if i was supposed ot make this 
const InvestorCard = (props) => {
    const { id, name, email} = props.contact;
    return (
      <div className="item">
        {/* <img className="ui avatar image" src="" alt="user" /> */}
        <div className="content">
          <Link
            to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
          >
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
          onClick={() => props.clickHander(id)}
        ></i>
        <Link to={{ pathname: `/edit`, state: { investor: props.investor } }}>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", marginTop: "7px" }}
          ></i>
        </Link>
      </div>
    );
  };
  
  export default InvestorCard;
  