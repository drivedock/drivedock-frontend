import React from "react";

const acceptedRequestsData = [
  {
    candidateName: "John Doe",
    confirmedDateTime: "2023/05/16",
    meetingLink: "https://zoom.us/dummylink",
  },
  {
    candidateName: "John Doe",
    confirmedDateTime: "2023/05/16",
    meetingLink: "https://zoom.us/dummylink",
  },
];

function ProfessionalAcceptedRequestspage() {
  return (
    <div>
      <h2>Accepted Requests</h2>
      <table className="table border-collapse border border-slate-300">
        <thead>
          <tr className="bg-indigo-400 text-white">
            <td className="p-2">Name of the Candidate</td>
            <td className="p-2">Meeting Link</td>
            <td className="p-2">Date</td>
          </tr>
        </thead>
        <tbody>
          {acceptedRequestsData.map((request, index) => {
            const { candidateName, confirmedDateTime, meetingLink } = request;
            return (
              <tr key={index} className="even:bg-gray-200 odd:bg-white-300">
                <td className="p-2">{candidateName}</td>
                <td className="p-2">{meetingLink}</td>
                <td>
                  {confirmedDateTime &&
                    new Date(confirmedDateTime).toISOString().slice(0, 10)}
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
