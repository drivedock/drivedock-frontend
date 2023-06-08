import React, { useState } from "react";
import "./profile.css";
import ProfileForm from "./ProfileForm";

const dummyProjectsData = [
  {
    projectName: "John Doe",
    dateOfInteraction: "20/11/23",
    status: "Pending",
  },
  {
    projectName: "Tom Cruise",
    dateOfInteraction: "21/12/23",
    status: "Accepted",
  },
  {
    projectName: "Johnny Depp",
    dateOfInteraction: "21/12/23",
    status: "Rejected",
  },
  {
    projectName: "Will Smith",
    dateOfInteraction: "21/12/23",
    status: "Completed",
  },
];

function ProfileSettings() {
  let mounted = false;
  const [activeTab, setActiveTab] = useState("profile");
  const [projectsData, setProjectsData] = useState(dummyProjectsData);
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
        <ProfileForm />
      ) : (
        <>
          <table className="table border-collapse border border-slate-300">
            <thead>
              <tr className="bg-indigo-400 text-white">
                <td className="p-2">Name of the Professional</td>
                <td className="p-2">Date of interaction</td>
                <td className="p-2">Status</td>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((interaction, index) => {
                return (
                  <tr key={index} className="even:bg-gray-200 odd:bg-white-300">
                    <td className="p-2">{interaction.projectName}</td>
                    <td className="p-2">{interaction.dateOfInteraction}</td>
                    <td className="p-2">{interaction.status}</td>
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
