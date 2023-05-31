import React, { useEffect, useState } from "react";

const dummyInteractionsData = [
  {
    professionalName: "John Doe",
    dateOfInteraction: "20/11/23",
    status: "Pending",
    statusCode: 0,
  },
  {
    professionalName: "Tom Cruise",
    dateOfInteraction: "21/12/23",
    status: "Accepted",
    statusCode: 1,
  },
  {
    professionalName: "Johnny Depp",
    dateOfInteraction: "21/12/23",
    status: "Rejected",
    statusCode: 2,
  },
  {
    professionalName: "Will Smith",
    dateOfInteraction: "21/12/23",
    status: "Completed",
    statusCode: 3,
  },
];

const dummyWorkshopsData = [
  {
    workshopTitle: "Robotics workshop",
    location: "CBIT, Hyderabad",
    status: "Upcoming",
    statusCode: 0,
  },
  {
    workshopTitle: "Hands on ML",
    location: "IIIT-H",
    status: "Completed",
    statusCode: 1,
  },
  {
    workshopTitle: "Johnny Depp",
    location: "HCU",
    status: "Upcoming",
    statusCode: 0,
  },
  {
    workshopTitle: "Will Smith",
    location: "Vasavi Engineering College",
    status: "Completed",
    statusCode: 1,
  },
];

export default function StatusTrackerPage() {
  const [activeTab, setActiveTab] = useState("interaction");
  const [interactionData, setInteractionData] = useState(dummyInteractionsData);
  const [workshopsData, setWorkshopsData] = useState(dummyWorkshopsData);

  const renderActiveTabData = (activeTabType) => {
    if (activeTabType === "interaction") {
      return (
        <>
          <table class="table border-collapse border border-slate-300">
            <thead>
              <tr class="bg-indigo-400 text-white">
                <td class="p-2">Name of the Professional</td>
                <td class="p-2">Date of interaction</td>
                <td class="p-2">Status</td>
              </tr>
            </thead>
            <tbody>
              {interactionData.map((interaction) => {
                return (
                  <tr class="even:bg-gray-200 odd:bg-white-300">
                    <td class="p-2">{interaction.professionalName}</td>
                    <td class="p-2">{interaction.dateOfInteraction}</td>
                    <td class="p-2">{interaction.status}</td>
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
          <table class="table border-collapse border border-slate-300">
            <thead>
              <tr class="bg-indigo-400 text-white">
                <td class="p-2">Name of the Workshop</td>
                <td class="p-2">Location</td>
                <td class="p-2">Status</td>
              </tr>
            </thead>
            <tbody>
              {workshopsData.map((workshop) => {
                return (
                  <tr class="even:bg-gray-200 odd:bg-white-300">
                    <td class="p-2">{workshop.workshopTitle}</td>
                    <td class="p-2">{workshop.location}</td>
                    <td class="p-2">{workshop.status}</td>
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
                onClick={() => setActiveTab("interaction")}
                className={`py-2.5 px-4 rounded-lg duration-150 hover:text-green-500 hover:bg-white active:bg-white/50 font-medium ${
                  activeTab === "interaction" &&
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
            {activeTab === "interaction"
              ? renderActiveTabData("interaction")
              : renderActiveTabData("workshop")}
          </div>
        </div>
      </section>
    </div>
  );
}
