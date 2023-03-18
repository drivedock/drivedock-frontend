import React from "react";
import Card from "./Card";
import firstCard from "../../../assets/firstCard.png";
import secondCard from "../../../assets/secondCard.png";
import thirdCard from "../../../assets/thirdCard.png";
import fourchCard from "../../../assets/fourchCard.png";

function AllCards() {
 return (
  <section className="container">
   <div className="display__Flex spaceEvenly" style={{ marginTop: "4rem" }}>
    <Card image={firstCard} />
    <Card image={secondCard} />
    <Card image={thirdCard} />
    <Card image={fourchCard} />
   </div>
  </section>
 );
}

export default AllCards;
