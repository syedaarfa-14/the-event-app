import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItems";
import IbaImg from "../assets/globe.jpg"
import "../styles/Menu.css"

function Menu() {
  return (
    <div style={{backgroundImage: `url(${IbaImg})`,backgroundPosition:'center', backgroundSize:"100%", objectFit:"cover"}} className="menu">
      <h1 className="menuTitle">Events</h1>
      <div className="menuList">
        {MenuList.length>0 && MenuList.map((menuItem, url, key) => {
          return (
            < MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name} 
              to={url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;