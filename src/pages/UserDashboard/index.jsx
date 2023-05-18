import React from "react";
import { InfoBanner } from "../../components/InfoBanner";

const Data = [
  {
    id: 1,
    title: "Online/Offline Workshop",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "#",
  },
  {
    id: 2,
    title: "R & D",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "#",
  },
  {
    id: 3,
    title: "Register upcoming workshop",
    image:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "#",
  },
  {
    id: 4,
    title: "Volunteer for upcoming workshop",
    image:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "#",
  },
];

export const UserDashboard = () => {
  return (
    <section className="flex flex-col  h-80 p-5 w-full">
      <div className="">
        <div className="">
          <nav className="relative px-8 pb-4 flex justify-between items-center border-y border-gray-400">
            <ul className=" lg:flex lg:items-center lg:justify-end grow mr-4">
              <li>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search"
                  />
                </div>
              </li>
            </ul>
            <div className=" lg:block">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="3 3 18 18"
              >
                <title>GitHub</title>
                <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
              </svg>
            </div>
          </nav>
        </div>
      </div>
      <InfoBanner />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {Data.map((item) => (
          <div
            key={item.id}
            className="col-span-6 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left rounded"
            style={{height: 250, backgroundColor: 'gray'}}
          >
            <div
              className="flex  h-full w-full flex-col justify-end rounded-md relative overflow-hidden"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full rounded-[10px] z-0"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute p-4 bottom-4 text-left">
                <h1 className="text-2xl text-green-100 font-semibold">
                  {item.title}
                </h1>
                {/* <p className="text-gray-300 mt-2 leading-6">
                  {item.description}
                </p> */}
                <button className="text-base text-green-200 hover:text-green-600 cursor-pointer mt-2 font-semibold">
                  Know more &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UserDashboard.displayName = "UserDashboard";
