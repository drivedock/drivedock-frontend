import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { createWorkshop } from "../../../api/admin";

function CreateWorkshop() {
  let history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    desc: "",
    location: "",
    duration: "",
  });

  const [isCertified, setIsCertified] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...inputs,
        isCertified: isCertified ? 1 : 0,
      };
      console.log("Data to send", dataToSend);
      const response = await createWorkshop(dataToSend);
      if (response.success) {
        history.replace("/admin/workshops");
      } else {
        setErrorMsg("Something went wrong! Please try again later");
      }
    } catch (e) {
      setErrorMsg("Something went wrong! Please try again later");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrorMsg("");
  };

  return (
    <div>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => history.replace("/admin/workshops")}
        >
          Back to list of workshops
        </button>
      </div>
      <div>
        <form action="#" onSubmit={handleSubmit} className="mt-8 w-50">
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Name of Workshop{" "}
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                  required
                >
                  {" "}
                  Description{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <textarea
                  className="flex h-30 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Please add description here"
                  name="desc"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Location{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Location"
                  name="location"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Duration{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Duration"
                  name="duration"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                name="isCertified"
                value="true"
                checked={isCertified}
                onChange={() => setIsCertified(!isCertified)}
              />
              <label
                htmlFor=""
                className="ml-2 text-base font-medium text-gray-900"
              >
                {" "}
                Will audience get a certificate?
              </label>
            </div>
            {errorMsg && (
              <div className="mt-1.5 text-red-400 text-sm">{errorMsg}</div>
            )}
            <div>
              <button
                type="submit"
                className="w-50 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white"
              >
                Create new workshop
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateWorkshop;
