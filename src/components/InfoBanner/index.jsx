import React from "react";
import '../../index.css'
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const InfoBanner = () => {
  return (
    <>
      <div className="border-l-4 border-green-200 p-2 rounded-md bg-green-100">
        <div className="flex items-center space-x-4">
          <div className="">
            <InformationCircleIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="mt-3">
            <p className="text-sm font-medium text-indigo-600">
              We're still cooking our site, Hold tight!
            </p>
          </div>
          {/* <div>
            <XMarkIcon className="h-6 w-6 text-indigo-600 cursor-pointer" />
          </div> */}
        </div>
      </div>
    </>
  );
};

InfoBanner.displayName = "InfoBanner";
