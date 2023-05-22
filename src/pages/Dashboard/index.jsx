import React, { useEffect, useState } from "react";
import SideNavBar from "../SideNavBar";
import IndetailProfile from "./IndetailProfile";
import { UserDashboard } from "../UserDashboard";
import { WorkshopsListPage } from "../WorkshopsListPage";
import AdditionalDetailsModal from "../../components/AdditionalDetailsModal/AdditionalDetailsModal";

import "../Profile/profile.css";
import { getProfileStatus } from "../../api/profile";

function Profile() {
  // to make the useeffect to be called once
  let initialized = false;
  let [pageDecide, setPageDecide] = useState("dashboard");
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const makeProfileAPI = async () => {
    const response = await getProfileStatus();
    if (response.success) {
      setShowDetailsModal(!response.results);
    }
  };

  useEffect(() => {
    if (!showDetailsModal && !initialized) {
      initialized = true;
      makeProfileAPI();
    }
    return () => {};
  }, []);

  const handlePage = (value) => {
    setPageDecide(value);
  };

  return (
    <section className="">
      <div className="flex">
        <SideNavBar handlePage={handlePage} />
        {showDetailsModal && <AdditionalDetailsModal />}
        {pageDecide == "dashboard" ? (
          <UserDashboard handlePage={handlePage} />
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