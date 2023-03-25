import React from "react";

export const ProfileHeader = () => {
  return (
    <div className="py-2 px-1 md:px-8 dark:bg-gray-900">
      <ul
        role="tablist"
        className="hidden max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 dark:bg-slate-800 rounded-lg sm:flex"
      >
        <li className="py-2">
          <button
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 hover:text-green-500 hover:bg-white active:bg-white/50 font-medium bg-white text-green-600 shadow-sm"
          >
            Profile
          </button>
        </li>
        <li className="py-2 ">
          <button
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 hover:text-green-600 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
          >
            Workshops Attended
          </button>
        </li>
        <li className="py-2">
          <button
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 hover:text-green-600 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
          >
            R & D
          </button>
        </li>
        <li className="py-2">
          <button
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 hover:text-green-600 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
          >
            Transactions
          </button>
        </li>
      </ul>
      {/* <div className="relative text-gray-500 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <select className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-500">
          <option>Overview</option>
          <option>Integration</option>
          <option>Billing</option>
          <option>Transactions</option>
          <option>plans</option>
        </select>
      </div> */}
      {/* Above code is for multiselect */}
    </div>
  );
};

ProfileHeader.displayName = "ProfileHeader";
