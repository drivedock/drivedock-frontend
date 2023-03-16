import React from "react";
import heroBG from "../../../assets/heroBg.png";

function Hero() {
 let heading = "Education in way we always thrive for practical";
 return (
  <section className="container">
   <div className="display__Flex justifyCenter alignCenter hero">
    <div className="flex45 hero__Left">
     <h2 className="hero_heading">{heading}</h2>
     <p className="hero_content">
      we are going liveon this website soon, keep on eye out for an incredible
      online experience!
     </p>
     <div className="display__Flex" style={{ marginTop: "2rem" }}>
      <div className="downloadBtn">DOWNLOAD MOBILE APP</div>
      <div className="downloadBtn">CREATE AN ACCOUNT</div>
     </div>
    </div>

    <figure className="flex40 display__Flex">
     <img
      className="widthFull alignEnd"
      style={{ width: "100%" }}
      src={heroBG}
      alt="hero BG"
     />
    </figure>
   </div>
   <div>
    <i className="fa-solid fa-arrow-down downloadIcon"></i>
   </div>
  </section>
 );
}

export default Hero;
