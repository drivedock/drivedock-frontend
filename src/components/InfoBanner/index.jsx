import React, { useState } from "react";
import "../../index.css";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const InfoBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      {showBanner && (
        <div className="border-l-4 border-green-200 p-2 rounded-md bg-green-100">
          <div className="flex items-center space-x-4">
            <div className="">
              <InformationCircleIcon className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium text-indigo-600">
                We're still cooking our site, Hold tight!
              </p>
            </div>
            <div>
              <XMarkIcon
                className="h-5 w-5 text-indigo-600 cursor-pointer"
                onClick={() => setShowBanner(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

InfoBanner.displayName = "InfoBanner";
