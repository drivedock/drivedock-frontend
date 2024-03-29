import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

import ProtectedRoute from "../../components/auth/ProtectedRoute";
import SideNavBar from "../SideNavBar";
import ProfileSettings from "./ProfileSettings";
import DashboardTab from "../DashboardTab";
import WorkshopsListPage from "../WorkshopsListPage";
import MeetExperts from "../MeetExperts";
import AdditionalDetailsModal from "../../components/AdditionalDetailsModal/AdditionalDetailsModal";

import "./profile.css";
import { getProfileStatus } from "../../api/profile";
import IdeaDropBoxPage from "../IdeaDropBoxPage";
import StatusTrackerPage from "../StatusTrackerPage";
import RAndDProjectsPage from "../RAndDProjectsPage";
import AdminSideNavBar from "../AdminSideNavBar";
import WorkshopsPage from "../Admin/WorkshopsPage";
import ProfessionalProfilesPage from "../Admin/ProfessionalProfilesPage";
import RandDProjectsPage from "../Admin/RandDProjectsPage/index";
import CreateWorkshop from "../Admin/WorkshopsPage/CreateWorkshop";
import ExpertPage from "../MeetExperts/ExpertPage";
import ProfessionalSideNavBar from "../ProfessionalView/ProfessionalSideNavBar";
import ProfessionalRequestsPage from "../ProfessionalView/ProfessionalRequestsPage";
import ProfessionalProfilePage from "../ProfessionalView/ProfessionalProfilePage";
import ProfessionalAcceptedRequestspage from "../ProfessionalView/ProfessionalAcceptedRequestsPage";

function DashboardPage() {
  // to make the useeffect to be called once
  let initialized = false;
  const history = useHistory();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const userType = localStorage.getItem("userType");
  const isAdmin = userType === "admin";
  const isProfessional = userType === "professional";

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const makeProfileAPI = async () => {
    const response = await getProfileStatus();
    if (response.success) {
      setShowDetailsModal(!response.results);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/signin");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!showDetailsModal && !initialized && isAuthenticated && !isAdmin) {
      initialized = true;
      makeProfileAPI();
    }
    return () => {};
  }, []);

  const renderSideNavBar = () => {
    if (isAdmin) {
      return <AdminSideNavBar />;
    } else if (isProfessional) {
      return <ProfessionalSideNavBar />;
    }
    return <SideNavBar />;
  };

  return (
    <section className="">
      <div className="flex">
        {renderSideNavBar()}
        {showDetailsModal && !isAdmin && <AdditionalDetailsModal />}
        <section className="flex flex-col  h-80 p-5 w-full">
          <ProtectedRoute path="/dashboard/home" component={DashboardTab} />
          <ProtectedRoute
            path="/dashboard/status"
            exact
            component={StatusTrackerPage}
          />
          <ProtectedRoute
            path="/dashboard/workshops"
            exact
            component={WorkshopsListPage}
          />
          <ProtectedRoute
            path="/dashboard/idea-dropbox"
            exact
            component={IdeaDropBoxPage}
          />
          <ProtectedRoute
            path="/dashboard/r-and-d-projects"
            exact
            component={RAndDProjectsPage}
          />
          <ProtectedRoute
            path="/dashboard/meet-experts"
            exact
            component={MeetExperts}
          />

          <ProtectedRoute
            path="/dashboard/meet-experts/:id"
            exact
            component={ExpertPage}
          />

          <ProtectedRoute
            path="/dashboard/profile-settings"
            exact
            component={ProfileSettings}
          />

          <ProtectedRoute
            path="/admin/workshops"
            exact
            component={WorkshopsPage}
          />
          <ProtectedRoute
            path="/admin/workshops/create"
            exact
            component={CreateWorkshop}
          />
          <ProtectedRoute
            path="/admin/create-professionals"
            exact
            component={ProfessionalProfilesPage}
          />
          <ProtectedRoute
            path="/admin/create-projects"
            exact
            component={RandDProjectsPage}
          />

          <ProtectedRoute
            path="/professional/requests"
            exact
            component={ProfessionalRequestsPage}
          />
          <ProtectedRoute
            path="/professional/accepted"
            exact
            component={ProfessionalAcceptedRequestspage}
          />
          <ProtectedRoute
            path="/professional/profile"
            exact
            component={ProfessionalProfilePage}
          />
        </section>
      </div>
    </section>
  );
}

export default DashboardPage;
