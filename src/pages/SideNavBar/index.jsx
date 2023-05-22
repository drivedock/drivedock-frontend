import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import "../SideNavBar/SideNavBar.css";
import LogoImg from "../../assets/logo.png";
// import ProductLogo from "../../../assets/logo.png";
import MenuImg from "../SideNavBar/assets/menu.png";
import RibbonImg from "../SideNavBar/assets/ribbon.png";
import NotePadImg from "../SideNavBar/assets/notepad.png";
import ChatImg from "../SideNavBar/assets/chat.png";
import TodoImg from "../SideNavBar/assets/todo.png";
import ProfileImg from "../SideNavBar/assets/user.png";
import dummyUserImg from "../SideNavBar/assets/dummy_user_profile_pic.png";
import SettingImg from "../SideNavBar/assets/settings.png";
import SideEndLogoImg from "../SideNavBar/assets/sideEndLogo.png";

function SideNavBar(props) {
  const { handlePage } = props;
  let userEmail = localStorage.getItem("DDUserEmail");
  if (userEmail) {
    userEmail = userEmail.split("@")[0];
  }

  const history = useHistory();
  let sideNavBarArray = [
    {
      name: "Dashboard",
      image: MenuImg,
    },
    {
      name: "Cource",
      image: RibbonImg,
    },
    {
      name: "Resources",
      image: NotePadImg,
    },
    {
      name: "Chat",
      image: ChatImg,
    },
    {
      name: "Schedule",
      image: TodoImg,
    },
    {
      name: "Profile",
      image: ProfileImg,
    },
    {
      name: "Setting",
      image: SettingImg,
    },
  ];

  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    history.push("/signin");
  };

  return (
    <aside className="flex flex-col w-96 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 border rounded-md">
      <NavLink to="/">
        <img className="w-12 h-12" src={LogoImg} alt="" />
      </NavLink>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3">
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={() => handlePage("dashboard")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              ></path>
            </svg>
            <span className="mx-2 text-sm font-medium letSdisable">
              Dashboard
            </span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            // onClick={() => handlePage("workshops")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              ></path>
            </svg>
            <span className="mx-2 text-sm font-medium letSdisable">
              Meet experts
            </span>
          </a>
          <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={() => handlePage("profileSetting")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              ></path>
            </svg>
            <span className="mx-2 text-sm font-medium letSdisable">
              Profile Settings
            </span>
          </a>
        </nav>
        <div className="mt-6">
          <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800 letSdisable">
            <h2 className="text-sm font-medium text-gray-800 ">
              New feature available!
            </h2>
            {/* <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              harum officia eligendi velit.
            </p> */}
            <img
              className="object-cover w-full h-32 mt-2 rounded-lg"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1806&amp;q=80"
              alt="Feature"
            />
          </div>
          <div className="flex items-center justify-between mt-6 flexColum">
            <a href="#" className="flex items-center gap-x-2 flexColum    ">
              <img
                className="object-cover rounded-full h-7 w-7"
                src={dummyUserImg}
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700">
                {userEmail}
              </span>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={handleLogOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideNavBar;
