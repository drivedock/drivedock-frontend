import React from "react";
import SideNavBar from "../SideNavBar";
import IndetailProfile from "./IndetailProfile";
import { UserDashboard } from "../UserDashboard";
import { WorkshopsListPage } from "../WorkshopsListPage";
import "../Profile/profile.css";


function Profile() {
 return (
  <section className="">
   <div className=" flex ">
    <SideNavBar />
    <IndetailProfile />
   </div>
  </section>
 );
}

export default Profile;
