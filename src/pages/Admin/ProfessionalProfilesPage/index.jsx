import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import TagsInput from "react-tagsinput";

import "react-tagsinput/react-tagsinput.css";
import { DEPARTMENTS } from "../../../constants";
import { createProfessionalProfile } from "../../../api/admin";
import { InfoBanner } from "../../../components/InfoBanner";

function ProfessionalProfilesPage() {
  let history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    mobileNumber: "",
    desc: "",
    location: "",
    currentRole: "",
    dept: "Mechanical", //default for dropdown
    education: "",
  });

  const [topics, setTopics] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSuccessMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.dept.length === 0) {
      setErrorMsg("Please select department");
      return;
    }
    if (!selectedFile) {
      setErrorMsg("Please select a user image");
      return;
    }
    if (!selectedFile?.type.includes("image")) {
      setErrorMsg("Please select a valid image file - jpeg / png");
      return;
    }
    try {
      const { type, name } = selectedFile;
      const response = await createProfessionalProfile({
        ...inputs,
        topics,
        contentType: type,
        filename: name,
      });
      if (response.success) {
        if (response.uploadUrl) {
          const fileUploadResponse = await fetch(response.uploadUrl, {
            method: "PUT",
            body: selectedFile,
          });
          if (fileUploadResponse.status === 200) {
            setSuccessMsg(true);
            resetForm();
          } else {
            setErrorMsg("Something went wrong! Please try again later");
          }
        } else {
          setErrorMsg("Something went wrong! Please try again later");
        }
      } else {
        setErrorMsg("Something went wrong! Please try again later");
      }
    } catch (e) {
      setErrorMsg("Something went wrong! Please try again later");
    }
  };

  const resetForm = () => {
    setInputs({
      email: "",
      name: "",
      mobileNumber: "",
      desc: "",
      location: "",
      currentRole: "",
      dept: "",
      education: "",
    });
    setTopics([]);
    setSelectedFile(null);
    setErrorMsg("");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrorMsg("");
  };

  return (
    <div>
      <h4>Create a Professional Profile</h4>
      <div>
        <form action="#" onSubmit={handleSubmit} className="mt-8 w-50">
          <div className="space-y-5">
            {showSuccessMsg && (
              <p className="mb-2 text-green-600">
                Profile created successfully
              </p>
            )}
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Name of the Professional{" "}
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Email Address{" "}
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div>
              <label
                htmlFor="number"
                className="text-base font-medium text-gray-900"
              >
                {" "}
                Mobile Number{" "}
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  id="MobileNumber"
                  value={inputs.mobileNumber}
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
                  Current Role{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  className="flex h-30 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Please add your current role"
                  name="currentRole"
                  value={inputs.currentRole}
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
                  placeholder="Quick intro about you"
                  name="desc"
                  value={inputs.desc}
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
                  value={inputs.location}
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
                  value={inputs.dept}
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
                  Highest Degree{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Highest degree"
                  name="education"
                  value={inputs.education}
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
                  Topics{" "}
                </label>
              </div>
              <div className="mt-2.5 w-full">
                <TagsInput
                  value={topics}
                  inputProps={{
                    placeholder: "Add a topic",
                  }}
                  onChange={(topics) => setTopics(topics)}
                />
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Upload profile image{" "}
                </label>
              </div>
              <input
                type="file"
                className="mt-2.5"
                onChange={(event) => {
                  setSelectedFile(event.target.files[0]);
                }}
              />
            </div>

            {errorMsg && (
              <div className="mt-1.5 text-red-400 text-sm">{errorMsg}</div>
            )}
            <div>
              <button
                type="submit"
                className="w-50 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white"
              >
                Create Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfessionalProfilesPage;
