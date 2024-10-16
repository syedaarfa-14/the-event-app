import React from "react";
import { useNavigate} from "react-router-dom";

function MenuItem({ image, name }) {
  let navigate = useNavigate();
  function handleClick() {
    if (name === "Corporate Event"){
      navigate('/corporate-event');
    }
    else if(name === "Social Event"){
      navigate('/social-event');
    }
    else if(name === "Festive Event"){
      navigate('/festive-event');
    }
    else if(name === "Community Event"){
      navigate('/community-event');
    }
    else if(name === "Wedding Event"){
      navigate('/wedding-event');
    }
    else if(name === "Party Event"){
      navigate('/party-event');
    }
  }
  return (
    <div className="menuItem" to='/'>
      <h1> {name} </h1>
      <button onClick={handleClick}>Know more..</button>

    </div>
  );
}

export default MenuItem;