import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { getWorkshops } from "../../../api/admin";

const dummyWorkshopsData = [
  {
    workshopTitle: "Robotics workshop",
    location: "CBIT, Hyderabad",
    status: "Upcoming",
  },
  {
    workshopTitle: "Hands on ML",
    location: "IIIT-H",
    status: "Completed",
  },
  {
    workshopTitle: "Hands on AI",
    location: "HCU",
    status: "Upcoming",
  },
  {
    workshopTitle: "Cyber Security",
    location: "Vasavi Engineering College",
    status: "Completed",
  },
];

function WorkshopsPage() {
  let history = useHistory();
  let mounted = false;
  const [workshops, setWorkshops] = useState(dummyWorkshopsData);

  useEffect(() => {
    async function fetchData() {
      const res = await getWorkshops();
      setWorkshops(res.workshops);
    }
    if (!mounted) {
      mounted = true;
      fetchData();
    }
  }, []);

  return (
    <div>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => history.replace("/admin/workshops/create")}
        >
          Create new workshop
        </button>
      </div>
      <div className="mt-3">
        <table className="table border-collapse border border-slate-300">
          <thead>
            <tr className="bg-indigo-400 text-white">
              <td className="p-2">Name of the Workshop</td>
              <td className="p-2">Location</td>
              <td className="p-2">Start date</td>
              <td className="p-2">End date</td>
            </tr>
          </thead>
          <tbody>
            {workshops.map((workshop, index) => {
              const { workshopName, workshopLocation, startDate, endDate } =
                workshop;
              return (
                <tr key={index} className="even:bg-gray-200 odd:bg-white-300">
                  <td className="p-2">{workshopName}</td>
                  <td className="p-2">{workshopLocation}</td>
                  <td>
                    {startDate &&
                      new Date(startDate).toISOString().slice(0, 10)}
                  </td>
                  <td className="p-2">
                    {endDate && new Date(endDate).toISOString().slice(0, 10)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkshopsPage;
