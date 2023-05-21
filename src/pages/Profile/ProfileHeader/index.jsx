import React from "react";

export const ProfileHeader = () => {
  return (
    <div className="py-2 px-1 md:px-8">
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
        <li className="py-2">
          <button
            role="tab"
            className="py-2.5 px-4 rounded-lg duration-150 hover:text-green-600 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
          >
            R & D projects
          </button>
        </li>
      </ul>
    </div>
  );
};

ProfileHeader.displayName = "ProfileHeader";
