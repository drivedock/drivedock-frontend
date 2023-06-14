import React, { useEffect, useState } from "react";
import "./profile.css";
import ProfileForm from "./ProfileForm";
import { getProfileDetails, getProjectsApplied } from "../../api/profile";

function ProfileSettings() {
  let mounted = false;
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await getProfileDetails();
      if (res.success) {
        setUserData(res.profile);
      }
      const projectsResponse = await getProjectsApplied();
      if (projectsResponse.success) {
        setProjectsData(projectsResponse.results);
      }
    }

    if (!mounted) {
      mounted = true;
      fetchData();
    }
  }, []);
  return (
    <section className="flex flex-col  h-80 p-5 w-full">
      <div className="py-2 px-1 md:px-8">
        <ul
          role="tablist"
          className="hidden max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 dark:bg-slate-800 rounded-lg sm:flex"
        >
          <li className="py-2">
            <button
              role="tab"
              onClick={() => setActiveTab("profile")}
              className={`py-2.5 px-4 rounded-lg duration-150 hover:text-green-500 hover:bg-white active:bg-white/50 font-medium ${
                activeTab === "profile" && "bg-white text-green-600 shadow-sm"
              }`}
            >
              Profile
            </button>
          </li>
          <li className="py-2">
            <button
              role="tab"
              onClick={() => setActiveTab("projects")}
              className={`py-2.5 px-4 rounded-lg duration-150 hover:text-green-500 hover:bg-white active:bg-white/50 font-medium ${
                activeTab === "projects" && "bg-white text-green-600 shadow-sm"
              }`}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
      {activeTab == "profile" ? (
        userData && <ProfileForm userData={userData} />
      ) : (
        <>
          <table className="table border-collapse border border-slate-300">
            <thead>
              <tr className="bg-indigo-400 text-white">
                <td className="p-2">Name of the Professional</td>
                <td className="p-2">Applied As</td>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) => {
                return (
                  <tr key={index} className="even:bg-gray-200 odd:bg-white-300">
                    <td className="p-2">{project.projectName}</td>
                    <td className="p-2">{project.applyingAs}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
}

export default ProfileSettings;
