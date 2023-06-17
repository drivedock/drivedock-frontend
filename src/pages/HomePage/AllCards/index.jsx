import React from "react";
import Card from "./Card";
import firstCard from "../../../assets/firstCard.png";
import secondCard from "../../../assets/secondCard.png";
import thirdCard from "../../../assets/thirdCard.png";
import fourchCard from "../../../assets/fourchCard.png";

function AllCards() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const handleNavigation = (targetPage) => {
    if (!isAuthenticated) {
      window.location.href = "/signin";
    } else {
      window.location.href = targetPage;
    }
  };
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 container">
      <Card
        image={firstCard}
        title={"Workshops"}
        routeName={"/dashboard/workshops"}
        handleNavigation={handleNavigation}
      />
      <Card
        image={secondCard}
        title={"Meet Experts"}
        routeName={"/dashboard/meet-experts"}
        handleNavigation={handleNavigation}
      />
      <Card
        image={thirdCard}
        title={"Idea Dropbox"}
        routeName={"/dashboard/idea-dropbox"}
        handleNavigation={handleNavigation}
      />

      <Card
        image={fourchCard}
        title={"R & D"}
        routeName={"/dashboard/r-and-d-projects"}
        handleNavigation={handleNavigation}
      />
    </div>
  );
}

export default AllCards;
