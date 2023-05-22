import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import SideNavBar from "../SideNavBar";
import ProfileSettings from "./ProfileSettings";
import DashboardTab from "../DashboardTab";
import WorkshopsListPage from "../WorkshopsListPage";
import MeetExperts from "../MeetExperts";
import AdditionalDetailsModal from "../../components/AdditionalDetailsModal/AdditionalDetailsModal";

import "./profile.css";
import { getProfileStatus } from "../../api/profile";

function DashboardPage() {
  // to make the useeffect to be called once
  let initialized = false;
  let [pageDecide, setPageDecide] = useState("dashboard");
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const makeProfileAPI = async () => {
    const response = await getProfileStatus();
    if (response.success) {
      setShowDetailsModal(!response.results);
    }
  };

  useEffect(() => {
    if (!showDetailsModal && !initialized && isAuthenticated) {
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
        <ProtectedRoute path="/dashboard/home" component={DashboardTab} />
        <ProtectedRoute
          path="/dashboard/workshops"
          exact
          component={WorkshopsListPage}
        />
        <ProtectedRoute
          path="/dashboard/meetExperts"
          exact
          component={MeetExperts}
        />
        <ProtectedRoute
          path="/dashboard/profileSettings"
          exact
          component={ProfileSettings}
        />
      </div>
    </section>
  );
}

export default DashboardPage;
