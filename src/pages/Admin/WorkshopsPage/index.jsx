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
  const [workshops, setWorkshops] = useState(dummyWorkshopsData);

  useEffect(() => {
    async function fetchData() {
      const res = await getWorkshops();
      console.log(res);
      setWorkshops(res.workshops);
    }
    fetchData();
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
        <table class="table border-collapse border border-slate-300">
          <thead>
            <tr class="bg-indigo-400 text-white">
              <td class="p-2">Name of the Workshop</td>
              <td class="p-2">Location</td>
              <td class="p-2">Desc</td>
              <td class="p-2">End date</td>
            </tr>
          </thead>
          <tbody>
            {workshops.map((workshop) => {
              return (
                <tr class="even:bg-gray-200 odd:bg-white-300">
                  <td class="p-2">{workshop.workshopName}</td>
                  <td class="p-2">{workshop.workshopLocation}</td>
                  <td class="p-2">{workshop.worshopDesc}</td>
                  <td class="p-2">{workshop.endDate}</td>
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
