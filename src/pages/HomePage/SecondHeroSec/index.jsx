import React from "react";
import secondHeroSecImg from "../../../assets/secondHeroSecImg.png";

function SecondHeroSec() {
 return (
  <section className="container">
   <div
    className="display__Flex spaceBetween alignCenter"
    style={{ marginTop: "-1rem" }}
   >
    <figure className="flex45 display__Flex">
     <img
      className="widthFull"
      style={{ width: "100%" }}
      src={secondHeroSecImg}
      alt="hero BG"
     />
    </figure>

    <div className="flex45 hero__Left">
     <h2 className="hero_heading">
      we are going liveon this website soon, keep on eye out for an incredible
      online experience!
     </h2>
     <p className="hero_content">
      we are going liveon this website soon, keep on eye out for an incredible
      online experience!
     </p>
     <div className="" style={{ marginTop: "2rem", display: "inline-block" }}>
      <div className="downloadBtn">DOWNLOAD MOBILE APP</div>
      <div className="downloadBtn" style={{ marginTop: "1rem" }}>
       CREATE AN ACCOUNT
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default SecondHeroSec;
