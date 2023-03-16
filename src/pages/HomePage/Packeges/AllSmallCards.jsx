import React from "react";
import amazon from "../../../assets/amazon.png";
import flipkart from "../../../assets/flipkart.png";
import git from "../../../assets/git.png";
import linkdin from "../../../assets/linkdin.png";
import samsung from "../../../assets/samsung.png";
import skill from "../../../assets/skill.png";
import uber from "../../../assets/uber.png";
import youtube from "../../../assets/youtube.png";
import SmallCard from "./SmallCard";

function AllSmallCards() {
 return (
  <section className="container">
   <div
    className="display__Flex alignCenter spaceEvenly display__Flexwrap"
    style={{ marginTop: "2rem", width: "80%", margin: "auto" }}
   >
    <SmallCard image={amazon} />
    <SmallCard image={flipkart} />
    <SmallCard image={git} />
    <SmallCard image={linkdin} />
    <SmallCard image={samsung} />
    <SmallCard image={skill} />
    <SmallCard image={git} />
    <SmallCard image={uber} />
    <SmallCard image={youtube} />
   </div>
   <div
    className="display__Flex justifyCenter alignCenter"
    style={{ marginTop: "2rem" }}
   >
    <div className="downloadBtn">DOWNLOAD MOBILE APP</div>
    <div className="downloadBtn">CREATE AN ACCOUNT</div>
   </div>
  </section>
 );
}

export default AllSmallCards;
