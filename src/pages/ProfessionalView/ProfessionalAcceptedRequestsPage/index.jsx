import React, { useState, useEffect } from "react";
import { getInteractions } from "../../../api/professionalView";

function ProfessionalAcceptedRequestspage() {
  let mounted = false;
  const [requestsData, setRequestsData] = useState([]);

  async function getInteractionsData() {
    const response = await getInteractions("accepted");
    if (response.success) {
      setRequestsData(response.results);
    }
  }

  useEffect(() => {
    if (!mounted) {
      mounted = true;
      getInteractionsData();
    }
  }, []);

  const getFormattedDateTime = (dateTimeString) => {
    const dateTimeArr = dateTimeString.split("T");
    const timeArr = dateTimeArr[1].split(".");
    return dateTimeArr[0] + " " + timeArr[0];
  };

  return (
    <div>
      <h2>Accepted Requests</h2>
      <table className="table border-collapse border border-slate-300">
        <thead>
          <tr className="bg-indigo-400 text-white">
            <td className="p-2">Name of the Candidate</td>
            <td className="p-2">Meeting Link</td>
            <td className="p-2">Topic</td>
            <td className="p-2">Date & Time (IST)</td>
          </tr>
        </thead>
        <tbody>
          {requestsData.map((request, index) => {
            const { StudentName, requestedDate, topicName, meetingLink } =
              request;
            return (
              <tr key={index} className="even:bg-gray-200 odd:bg-white-300">
                <td className="p-2">{StudentName}</td>
                <td className="p-2">
                  <a href={meetingLink}>Link</a>
                </td>
                <td className="p-2">{topicName}</td>
                <td>{requestedDate && getFormattedDateTime(requestedDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProfessionalAcceptedRequestspage;
