import React from "react";

import "../assests/css/header.css"
import logo from "../assests/img/logomariabriofita.png"

function Header(){
 return(
    <header>
      <div className="container">
        <img src={logo} alt="Logo mariabriofita" />
      </div>
    </header>
 )   
}

export default Header;
