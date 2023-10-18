import React from "react";
import { navbarData } from "../../Data/data";
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="menu">
        {navbarData.map((navdata) => (
          <ul>
            <li>{navdata.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
