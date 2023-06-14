import React, { useState } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { IDEA_STATUS, IDEA_TYPE } from "../../constants";
import { dropYourIdea } from "../../api/dashboard";

export default function IdeaDropBoxPage() {
  let history = useHistory();
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    problemStatement: "",
    solution: "",
    teamSize: "",
    status: "",
    targetAudience: "",
    ideaType: "",
    fundValue: 0,
  });

  const [fundingNeeded, setFundingNeeded] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSuccessMsg, setSuccessMsg] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setInputs({
      title: "",
      desc: "",
      problemStatement: "",
      solution: "",
      teamSize: "",
      status: "",
      targetAudience: "",
      ideaType: "",
      fundValue: 0,
      acceptTerms: true,
    });
    setSelectedFile(null);
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      setErrorMsg("Please accept the note");
      return;
    }
    try {
      console.log(inputs);
      const { type, name } = selectedFile;
      const response = await dropYourIdea({
        ...inputs,
        acceptTerms,
        fundingNeeded,
        contentType: type,
        filename: name,
      });
      if (response.success) {
        const fileUploadResponse = await fetch(response.uploadURL, {
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
      <h4>Drop your Idea</h4>
      <div>
        {" "}
        {showSuccessMsg && (
          <p className="mb-2 text-green-600">Idea submitted successfully</p>
        )}
        <form action="#" onSubmit={handleSubmit} className="mt-8 w-50">
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Title{" "}
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Description{" "}
              </label>
              <div className="mt-2.5">
                <textarea
                  className="flex h-30 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Explain the idea in 250 words"
                  name="desc"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Problem Statement{" "}
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  name="problemStatement"
                  placeholder="Problem Statement"
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
                  Solution{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <textarea
                  className="flex h-30 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Please add solution here in 250 words"
                  name="solution"
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
                  Team size{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder="please enter team size"
                  name="teamSize"
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
                  Status{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <select
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="status"
                  onChange={handleChange}
                >
                  {IDEA_STATUS.map((statusType) => {
                    return (
                      <option key={statusType} value={statusType}>
                        {statusType}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Target Audience{" "}
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Who are the target audience?"
                  name="targetAudience"
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
                  Idea type{" "}
                </label>
              </div>
              <div className="mt-2.5">
                <select
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  name="ideaType"
                  onChange={handleChange}
                  required
                >
                  {IDEA_TYPE.map((ideaType) => {
                    return (
                      <option key={ideaType} value={ideaType}>
                        {ideaType}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Share your proposal document{" "}
                </label>
              </div>
              <input
                type="file"
                className="mt-2.5"
                onChange={(event) => setSelectedFile(event.target.files[0])}
              />
            </div>

            <div className="d-flex">
              <input
                type="checkbox"
                name="fundingNeeded"
                value={fundingNeeded}
                checked={fundingNeeded}
                onChange={() => setFundingNeeded(!fundingNeeded)}
              />
              <label htmlFor="" className="ml-2 font-medium text-gray-900">
                Funding Needed?
              </label>
            </div>

            {fundingNeeded && (
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    How much funding is required?{" "}
                  </label>
                </div>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Please enter the funding required"
                    name="fundValue"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
            )}

            <div className="d-flex">
              <input
                type="checkbox"
                name="acceptTerms"
                value="true"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                required
              />
              <label
                htmlFor=""
                className="ml-2 text-sm font-medium text-gray-900"
              >
                This idea will be studied in your presence and taken to next
                level for seed funding
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
                Submit your idea
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
