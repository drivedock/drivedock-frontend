import React from "react";
import { Link } from "react-router-dom";
import ProductLogo from "../../../assets/logo.png";

function Header() {
  const navNames = ["Home", "Career", "Features", "About Us"];
  const LoginValues = ["Login", "SignUp"];
  return (
    <header className="container">
      {/* <div className="display__Flex alignCenter header">
    <div className="display__Flex alignCenter">
     <div className="display__Flex flex25">
      <figure className="" style={{ width: "25%" }}>
       <img className="widthFull" src={ProductLogo} alt="Logo" />
      </figure>
      <div>
       <h1 className="product__heading">Drive Dock</h1>
       <span style={{ marginLeft: "1rem", float: "right" }}>Groups</span>
       <span style={{ float: "clear" }}></span>
      </div>
     </div>

     <nav className="flex40 navFlexLing">
      <ul className="display__Flex spaceBetween alignCenter">
       {navNames.map((each, index) => (
        <li className="each_Nav_value" key={index}>
         {each}
        </li>
       ))}
      </ul>
     </nav>
    </div>

    <nav>
     <ul className="display__Flex alignCenter">
      {LoginValues.map((each, index) => (
       <li className="signInValues" key={index}>
        {each}
       </li>
      ))}
     </ul>
    </nav>
   </div> */}
      <div>
        <nav className="relative px-4 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
          <a className="text-3xl font-bold leading-none" href="#">
            <img className="w-12 h-12" src={ProductLogo} alt="" />
          </a>

          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            {navNames.map((each) => (
              <>
                <li>
                  <a
                    className="text-md hover:text-green-500 hover:transition-all text-gray-500 hover:font-bold dark:text-gray-300"
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
              </>
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
