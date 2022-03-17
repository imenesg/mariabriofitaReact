import React from "react";

import "../assests/css/card.css";
import "../assests/css/flickity.css";


function Card(props) {
  
  return (
    <div className="gallery-cell">
      {/*<!--///////////////////////-->*/}
      <div className="card">
        <img src={`fotoplantas/`+`${props.nomePlanta}`+`.png` } alt={props.nomePlanta} />
        <h3>{props.nomePlanta}</h3>
        <div className="plantaInfos">
          <ul className="ul">
            <li>
              <i className="material-icons"> water_drop </i>
              {props.rega}
            </li>
            <li>
              <i className="material-icons"> light_mode </i>
              {props.luz}
            </li>
          </ul>
        </div>
        <p className="paragrafoPlanta">{props.children}</p>
      </div>
      {/*<!--///////////////////////-->*/}
    </div>
  );
}

export default Card;
