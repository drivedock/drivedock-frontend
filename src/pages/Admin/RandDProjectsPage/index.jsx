import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import TagsInput from "react-tagsinput";

import { DEPARTMENTS } from "../../../constants";
import { createRandDProject } from "../../../api/admin";
function RandDProjectsPage() {
  let history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    desc: "",
    location: "",
    dept: "",
    duration: "",
    linkedInLink: "",
  });

  const [professionalEmails, setProfessionalEmails] = useState([]);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.dept.length === 0) {
      setErrorMsg("Please select department");
      return;
    }
    try {
      const response = await createRandDProject({
        ...inputs,
        professionalEmails,
      });
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
      <h4>Create new Project</h4>
      <div>
        <form action="#" onSubmit={handleSubmit} className="mt-8 w-50">
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Name of the project{" "}
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
                  required
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
                  Department{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <select
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="dept"
                  id="cars"
                  onChange={handleChange}
                >
                  {DEPARTMENTS.map((dept) => {
                    return (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    );
                  })}
                </select>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  LinkedIn Job URL{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Please enter linkedIn Job URL"
                  name="linkedInLink"
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
                  Professional Emails{" "}
                </label>
              </div>
              <div className="mt-2.5 w-full">
                <TagsInput
                  value={professionalEmails}
                  inputProps={{
                    placeholder: "Add an email",
                    className: "react-tagsinput-input w-100",
                  }}
                  onChange={(professionalEmails) =>
                    setProfessionalEmails(professionalEmails)
                  }
                />
                <div className="mt-0.5 text-sm text-gray-500">
                  Add an email and press 'Enter' key to add more
                </div>
              </div>
            </div>
            {errorMsg && (
              <div className="mt-1.5 text-red-400 text-sm">{errorMsg}</div>
            )}
            <div>
              <button
                type="submit"
                className="w-50 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white"
              >
                Create Project
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RandDProjectsPage;
