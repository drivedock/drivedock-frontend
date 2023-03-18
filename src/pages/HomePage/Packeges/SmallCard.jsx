import React from "react";

function SmallCard(props) {
 const { image } = props;
 return (
  <figure
   className="EachSmallCard flex18 display__Flex justifyCenter alignCenter"
   style={{ height: "5rem", marginTop: "1rem", marginBottom: "0.5rem" }}
  >
   <img className="widthFull" style={{ width: "60px" }} src={image} alt="" />
  </figure>
 );
}

export default SmallCard;
