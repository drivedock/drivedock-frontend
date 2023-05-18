import React from "react";
import { Link } from "react-router-dom";
import ProductLogo from "../../../assets/logo.png";

function Header() {
  const navNames = ["Home", "Career", "Features", "About Us"];
  const LoginValues = ["Login", "SignUp"];
  return (
    <header className="container">
      <div>
        <nav className="relative px-4 py-4 flex justify-between items-center border-y border-gray-400">
          <a className="text-3xl font-bold leading-none" href="#">
            <img className="w-12 h-12" src={ProductLogo} alt="" />
          </a>

          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            {navNames.map((each, index) => (
              <React.Fragment key={index}>
                <li>
                  <a
                    className="text-md hover:text-green-500 hover:transition-all text-gray-500 hover:font-bold"
                    href="#"
                  >
                    {each}
                  </a>
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </li>
              </React.Fragment>
            ))}
          </ul>

          <div className="space-x-2 lg:block">
            <Link to="/signin">
              <button className="rounded-md border border-green-500 px-3.5 py-0.5 text-base font-semibold leading-7 text-green-500 hover:text-white hover:bg-green-500">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="rounded-md  bg-green-500 px-3.5 py-0.5 text-base font-semibold leading-7 text-white">
                SignUp
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
