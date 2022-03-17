import React from "react";

import "../assests/css/sobre.css"
import fotoMariaClara from "../assests/img/fotomariaclara.png"
function Sobre(){
 return(
    <section className="sobre">
      <img
        className="fotoperfil"
        src={fotoMariaClara}
        alt="Foto Maria Clara"
      />
      <h2>Maria Clara</h2>

      <div className="redes">
        <a href="https://www.instagram.com/mariaclara.reis/" target="_blank"
          ><i className="bx bxl-instagram-alt"></i
        ></a>
        <a target="_blank" href="https://twitter.com/mariabriofita">
          <i className="bx bxl-twitter"></i
        ></a>
      </div>

      <p>Sometimes I ask the universe for signs just to ignore them</p>
    </section>
 )   
}

export default Sobre;