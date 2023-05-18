import React from "react";

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
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black ">
                  Deepu Saladi
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-400">
                  Chair Person Advisory Board
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black ">
                 Lasya Gunam
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-400">
                  Head of Operations
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black ">
                  Dr. Bhrma Raju
                </p>
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
