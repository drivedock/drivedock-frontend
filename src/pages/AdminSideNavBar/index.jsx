import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import "../SideNavBar/SideNavBar.css";
import LogoImg from "../../assets/logo.png";

function AdminSideNavBar(props) {
  const history = useHistory();

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
            className="flex items-center px-3 py-1 text-gray-600"
            href="admin/workshops"
          >
            Workshops
          </a>
          <a
            className="flex items-center px-3 py-1 text-gray-600"
            href="admin/create-professionals"
          >
            Create Professionals
          </a>
          <a
            className="flex items-center px-3 py-1 text-gray-600"
            href="admin/create-projects"
          >
            Create R&D projects
          </a>
        </nav>
        <div className="mt-6">
          <div className="flex items-center justify-between mt-6 flexColum">
            <button
              href="#"
              className="text-gray-500 transition-colors duration-200 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AdminSideNavBar;
