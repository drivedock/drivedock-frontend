import React, { useEffect, useState } from "react";
import { getProfileDetails } from "../../../api/profile";

function ProfessionalProfilePage() {
  let mounted = false;
  let [userDetails, setUserDetails] = useState({
    name: "",
    mobileNumber: "",
    email: "",
  });

  useEffect(() => {
    async function getUserData() {
      const res = await getProfileDetails();
      if (res.success) {
        setUserDetails(res.profile);
      }
    }
    if (!mounted) {
      mounted = true;
      getUserData();
    }
  });

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
              value={userDetails?.name}
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
              value={userDetails?.mobileNumber}
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
              value={userDetails?.email}
              required
              readOnly
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ProfessionalProfilePage;
