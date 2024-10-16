import React from "react";
import "../styles/Events.css";
import FestiveImg from "../assets/festive.jpg"
import { Link } from "react-router-dom";
function Festive() {
return (
<div style={{backgroundImage: `url(${FestiveImg})`,backgroundPosition:'center', backgroundSize:"100%", objectFit:"contain"}}  className="festive">
    <h1 className="eventTitle">Festive Events</h1><br/>
        <br/>
        <p className="content">Festive describes an event that’s full of joy, smiles, and excitement.. 

        Below are the most popular formats for festive events:
        <ul>
            <li>Music Festivals</li>
            <li>Food Festivals</li>
        </ul>
        </p>
    <Link to="/contact">
        <button>CONTACT US</button>
    </Link>
</div>
);
}

export default Festive;