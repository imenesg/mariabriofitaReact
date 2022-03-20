import React from "react";

import "../assests/css/plantas.css";
import "../assests/css/flickity.css";
import "../assests/css/card.css";

function Plantas(props) {
  return (
    <section className="plantas">
      <div className="gallery js-flickity" data-flickity-options='{ "freeScroll": true , "contain": true ,"wrapAround": true }'>
        {" "}{/*<!--, "wrapAround": true--> */}
        {props.children}
      </div>
    </section>
  );
}

export default Plantas;
