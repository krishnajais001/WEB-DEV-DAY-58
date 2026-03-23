import React from "react";
import '../components/Card.css';
function Card({Details}){
    return(
       <div className="card">
        <p>Name : {Details.name}</p>
        <p>Course : {Details.course}</p>
        <p>Year : {Details.year}</p>
       </div>
    )
}


export default Card;