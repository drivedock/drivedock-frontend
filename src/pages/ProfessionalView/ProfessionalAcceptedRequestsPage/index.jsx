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

  return (
    <div>
      <h2>Accepted Requests</h2>
      <table className="table border-collapse border border-slate-300">
        <thead>
          <tr className="bg-indigo-400 text-white">
            <td className="p-2">Name of the Candidate</td>
            <td className="p-2">Meeting Link</td>
            <td className="p-2">Topic</td>
            <td className="p-2">Date</td>
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
                <td>
                  {requestedDate && new Date(requestedDate).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProfessionalAcceptedRequestspage;
