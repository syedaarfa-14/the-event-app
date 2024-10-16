import React from "react";
import "../styles/Events.css";
import WeddingImg from "../assets/wedding.jpg"
import { Link } from "react-router-dom";
function Wedding() {
return (
<div style={{backgroundImage: `url(${ WeddingImg})`,backgroundPosition:'center', backgroundSize:"100%", objectFit:"cover"}} className="wedding">
    <h1 className="eventTitle">Wedding Event</h1><br/>
        
            <p className="content">A wedding ceremony consists of many events. They are starting from wedding rehearsal dinner, wedding to wedding reception. 
            All these involve guests, friends and family. All in all, it is a big picture of wedding. As the event is big, the responsibilities are bigger.
            In order to arranging a successful wedding event, managing all of the events is very important
            </p>
        <Link to="/contact">
            <button>CONTACT US</button>
        </Link>
</div>
);
}

export default Wedding;