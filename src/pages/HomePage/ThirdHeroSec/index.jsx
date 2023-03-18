import React from "react";
import ThirdHeroSecImg from "../../../assets/thirdSecImg.png";

function ThirdHeroSec() {
 return (
  <section className="container">
   <div
    className="display__Flex justifyCenter alignCenter"
    style={{ marginTop: "-1rem" }}
   >
    <div className="flex45 hero__Left" style={{ marginTop: "3rem" }}>
     <h2 className="hero_heading">
      we are going liveon this website soon, keep on eye out
     </h2>
     <p className="hero_content">
      we are going liveon this website soon, keep on eye out for an incredible
      online experience! we are going liveon this website soon, keep on eye out
      for an incredible online experience! we are going liveon this website
      soon, keep on eye out for an incredible online experience!
     </p>
    </div>

    <figure className="flex40 display__Flex">
     <img
      className="widthFull"
      style={{ width: "100%" }}
      src={ThirdHeroSecImg}
      alt="hero BG"
     />
    </figure>
   </div>
  </section>
 );
}

export default ThirdHeroSec;
