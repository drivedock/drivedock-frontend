import React from "react";
import { InfoBanner } from "../../components/InfoBanner";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Data = [
  {
    id: 1,
    title: "Status tracking",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "/dashboard/status",
  },
  {
    id: 2,
    title: "Register for a workshop",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "/dashboard/workshops",
  },
  {
    id: 3,
    title: "Idea dropbox",
    image:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "/dashboard/idea-dropbox",
  },
  {
    id: 4,
    title: "R&D projects",
    image:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    link: "/dashboard/r-and-d-projects",
  },
];

const DashboardTab = ({ handlePage }) => {
  const history = useHistory();

  const handleNavigation = (link) => {
    if (link) {
      history.push(link);
    }
  };

  return (
    <>
      <InfoBanner />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {Data.map((item) => (
          <div
            key={item.id}
            className="col-span-6 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left rounded"
            style={{ height: 250, backgroundColor: "gray" }}
            onClick={() => handleNavigation(item.link)}
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
    </>
  );
};

export default DashboardTab;
