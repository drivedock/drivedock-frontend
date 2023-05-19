import React from "react";

import DeepuImage from '../assets/deepu_saladi.png';
import LasyaImage from '../assets/lasya_gunam.png';
import drBhrmaRaju from '../assets/dr_bhrma_raju.png';

function AllSmallCards() {
  return (
    <div className="container mx-auto px-10 md:px-0 pt-5">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-gray font-extrabold">
          Innovation needs Imagination
        </h1>
      </div>
      <div className="mt-4">
        <div className="relative flex h-[300px] items-center justify-center rounded-[10px] md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
            alt=""
            className="object-cover w-full h-full rounded-[10px] z-0"
          />
        </div>
        <section className="py-5">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 mt-4 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28 mb-4"
                  src={DeepuImage}
                  alt=""
                />
                <a href="https://www.linkedin.com/in/deepu-saladi/" className=" text-lg font-semibold leading-tight text-black cursor-pointer">
                  Deepu Saladi
                </a>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-400">
                  Chair Person Advisory Board
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28 mb-4"
                  src={LasyaImage}
                  alt=""
                />
                <a href="https://www.linkedin.com/in/lasya-srinivas-b86112170/" className=" text-lg font-semibold leading-tight text-black cursor-pointer">
                  Lasya Gunam
                </a>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-400">
                  Head of Operations
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28 mb-4"
                  src={drBhrmaRaju}
                  alt=""
                />
                <a href="https://www.linkedin.com/in/brahma-raju-8bb10215/" className=" text-lg font-semibold leading-tight text-black cursor-pointer">
                  Dr. K. Brahma Raju
                </a>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-400">
                  Advisor
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllSmallCards;
