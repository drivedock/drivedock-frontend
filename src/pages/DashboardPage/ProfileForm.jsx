import React, { useState } from "react";
import { updateProfileResume } from "../../api/profile";

function ProfileForm({ userData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isResumeUploaded, setIsResumeUploaded] = useState(
    userData?.isResumeAvailable === 1
  );
  const [errorMsg, setErrorMsg] = useState("testing");

  const handleUploadResume = async () => {
    const { type, name } = selectedFile;
    const response = await updateProfileResume({
      contentType: type,
      filename: name,
    });
    if (response.success) {
      const fileUploadResponse = await fetch(response.uploadURL, {
        method: "PUT",
        body: selectedFile,
      });
      if (fileUploadResponse.status === 200) {
        setIsResumeUploaded(true);
        setErrorMsg("");
      } else {
        setErrorMsg("Something went wrong! Please try again later");
      }
    } else {
      setErrorMsg("Something went wrong! Please try again later");
    }
  };

  return (
    <>
      <form>
        <div className="grid gap-3 mb-2 mt-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Name
            </label>
            <input
              type="text"
              id="first_name"
              value={userData?.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              value={userData?.mobileNumber}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
              readOnly
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={userData?.email}
              required
              readOnly
            />
          </div>
          {isResumeUploaded && (
            <div className="mt-2 ml-2 d-flex align-items-center">
              <input
                type="checkbox"
                name="isCertified"
                checked={userData?.isResumeAvailable}
                readOnly
              />
              <label
                htmlFor=""
                className="ml-2 text-base font-medium text-gray-900"
              >
                {" "}
                Resume Uploaded
              </label>
            </div>
          )}
        </div>
      </form>
      {!isResumeUploaded && (
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-sm font-medium text-gray-900">
              {" "}
              Upload your resume{" "}
            </label>
          </div>
          <input
            type="file"
            className="mt-2.5"
            onChange={(event) => setSelectedFile(event.target.files[0])}
          />
          {errorMsg && <p className="mt-1 text-red-400 text-sm">{errorMsg}</p>}
          {selectedFile && (
            <div className="mt-2">
              <button
                type="submit"
                className="h-10 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold leading-7 text-white"
                onClick={handleUploadResume}
              >
                Save
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProfileForm;
