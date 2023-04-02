import React, { useState } from "react";
import SideNavBar from "../SideNavBar";
import IndetailProfile from "./IndetailProfile";
import { UserDashboard } from "../UserDashboard";
import { Switch, Route } from "react-router-dom";
import { WorkshopsListPage } from "../WorkshopsListPage";
import "../Profile/profile.css";

function Profile() {
 let [pageDecide, setPageDecide] = useState("dashboard");
 const handlePage = (value) => {
  setPageDecide(value);
 };

 return (
  <section className="">
   <div className="flex">
    <SideNavBar handlePage={handlePage} />

    {pageDecide == "dashboard" ? (
     <UserDashboard />
    ) : pageDecide == "workshops" ? (
     <WorkshopsListPage />
    ) : pageDecide == "profileSetting" ? (
     <IndetailProfile />
    ) : null}
   </div>
  </section>
 );
}

export default Profile;
