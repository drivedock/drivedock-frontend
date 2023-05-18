import React from "react";
import Card from "./Card";
import firstCard from "../../../assets/firstCard.png";
import secondCard from "../../../assets/secondCard.png";
import thirdCard from "../../../assets/thirdCard.png";
import fourchCard from "../../../assets/fourchCard.png";

function AllCards() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 container">
      <Card image={firstCard} title={'Workshops'} />
      <Card image={secondCard} title={'Meet Experts'}/>
      <Card image={thirdCard} title={'Idea Dropbox'}/>

      <Card image={fourchCard} title={'R & D'}/>
    </div>
  );
}

export default AllCards;
