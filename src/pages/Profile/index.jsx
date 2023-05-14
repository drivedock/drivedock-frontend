import React, { useState } from "react";
import SideNavBar from "../SideNavBar";
import IndetailProfile from "./IndetailProfile";
import { UserDashboard } from "../UserDashboard";
import { WorkshopsListPage } from "../WorkshopsListPage";
import Modal from "../../components/Modal/Modal";

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
          <>
            <Modal />
            <UserDashboard />
          </>
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
