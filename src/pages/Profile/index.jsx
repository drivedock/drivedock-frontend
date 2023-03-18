import React from "react";
import SideNavBar from "../SideNavBar";
import IndetailProfile from "./IndetailProfile";
import "../Profile/profile.css";

function Profile() {
 return (
  <section className="container">
   <div className="display__Flex">
    <SideNavBar />
    <IndetailProfile />
   </div>
  </section>
 );
}

export default Profile;
