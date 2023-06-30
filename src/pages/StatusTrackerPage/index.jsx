import React, { useEffect, useState } from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import {
  getConnectedProfessionalsCount,
  getTaskStatus,
} from "../../api/dashboard";

export default function StatusTrackerPage() {
  let mounted = false;
  const [activeTab, setActiveTab] = useState("interactions");
  const [connectedCount, setConnectedCount] = useState(0);
  const [interactionData, setInteractionData] = useState([]);
  const [workshopsData, setWorkshopsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getTaskStatus(activeTab);
      const countRes = await getConnectedProfessionalsCount("accepted");
      if (activeTab == "workshops") {
        setWorkshopsData(res.results);
      } else {
        setInteractionData(res.results);
      }

      if (countRes.success) {
        setConnectedCount(countRes.count);
      }
    }
    if (!mounted) {
      mounted = true;
      fetchData();
    }
  }, [activeTab]);

  const getFormattedDateTime = (dateTimeString) => {
    if (!dateTimeString) return null;
    const dateTimeArr = dateTimeString.split("T");
    const timeArr = dateTimeArr[1].split(".");
    return dateTimeArr[0] + " " + timeArr[0];
  };

  const renderActiveTabData = (activeTabType) => {
    if (activeTabType === "interactions") {
      return (
        <>
          {connectedCount > 0 && (
            <h6 className="mb-3">
              Experts connected so far - <MDBBadge>{connectedCount}</MDBBadge>
            </h6>
          )}
          <table className="table border-collapse border border-slate-300">
            <thead>
              <tr className="bg-indigo-400 text-white">
                <td className="p-2">Name of the Professional</td>
                <td className="p-2">Interaction Date & Time (IST)</td>
                <td className="p-2">Status</td>
                <td className="p-2">Meeting Link</td>
              </tr>
            </thead>
            <tbody>
              {interactionData.map((interaction, index) => {
                const { meetingLink } = interaction;
                return (
                  <tr key={index} className="even:bg-gray-200 odd:bg-white-300">
                    <td className="p-2">{interaction.professionalName}</td>
                    <td className="p-2">
                      {interaction.requestedDate &&
                        getFormattedDateTime(interaction.requestedDate)}
                    </td>
                    <td className="p-2 capitalize">{interaction.status}</td>
                    {meetingLink && (
                      <td className="p-2">
                        <a href={meetingLink}>Link</a>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      );
    } else {
      return (
        <>
          <table className="table border-collapse border border-slate-300">
            <thead>
              <tr className="bg-indigo-400 text-white">
                <td className="p-2">Name of the Workshop</td>
                <td className="p-2">Location</td>
                <td className="p-2">Status</td>
                <td className="p-2">Attendee</td>
              </tr>
            </thead>
            <tbody>
              {workshopsData.map((workshop, index) => {
                const {
                  workshopName,
                  numberOfStudents,
                  workshopStatus,
                  workshopLocation,
                } = workshop;
                return (
                  <tr key={index} className="even:bg-gray-200 odd:bg-white-300">
                    <td className="p-2">{workshopName}</td>
                    <td className="p-2">{workshopLocation}</td>
                    <td className="p-2">{workshopStatus}</td>
                    <td className="p-2">{numberOfStudents}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      );
    }
  };

  return (
    <div>
      <section className="flex flex-col  h-80 p-5 w-full">
        <div className="py-2 px-1 md:px-8">
          <ul
            role="tablist"
            className="hidden max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 dark:bg-slate-800 rounded-lg sm:flex"
          >
            <li className="py-2">
              <button
                role="tab"
                onClick={() => setActiveTab("interactions")}
                className={`py-2.5 px-4 rounded-lg duration-150 hover:text-green-500 hover:bg-white active:bg-white/50 font-medium ${
                  activeTab === "interactions" &&
                  "bg-white text-green-600 shadow-sm"
                }`}
              >
                Interaction requests
              </button>
            </li>
            <li className="py-2">
              <button
                role="tab"
                onClick={() => setActiveTab("workshops")}
                className={`py-2.5 px-4 rounded-lg duration-150 hover:text-green-500 hover:bg-white active:bg-white/50 font-medium ${
                  activeTab === "workshops" &&
                  "bg-white text-green-600 shadow-sm"
                }`}
              >
                Workshops
              </button>
            </li>
          </ul>
        </div>
        <div className="py-2 px-1 md:px-8">
          <div>
            {activeTab === "interactions"
              ? renderActiveTabData("interactions")
              : renderActiveTabData("workshops")}
          </div>
        </div>
      </section>
    </div>
  );
}
