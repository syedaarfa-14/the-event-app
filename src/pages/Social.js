import React from "react";
import "../styles/Events.css";
import SocialImg from "../assets/social.jpg"
import { Link } from "react-router-dom";
function Social() {
return (
<div style={{backgroundImage: `url(${ SocialImg})`,backgroundPosition:'center', backgroundSize:"100%", objectFit:"cover"}}
 className="social">
    <h1 className="eventTitle">Social Events</h1><br/>
    <p className="content">A social event means an event characteristic of people forming groups. 
    This can refer to events, shows, social functions and parties, contests and competitions. <br /><br/>
    The ostensible goal is for people to get together and have fun, even if the host only did it to get gifts.<br /><br/>
    Below are the most popular formats for social events:
    <ul>
        <li>Reunions</li>
        <li>Themed Parties</li>
    </ul>
    </p>
    <Link to="/contact">
        <button>CONTACT US</button>
    </Link>
</div>
);
}

export default Social;