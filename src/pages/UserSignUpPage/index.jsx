import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { EMAIL_REGEX } from "../../constants";
import { isValidPassword } from "../../helper";
import { registerUser } from "../../api/auth";

const UserSignUpPage = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    backendError: "",
  });

  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("isAuthenticated");
    if (token) {
      history.push("/profile");
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrors((values) => ({ ...values, [name]: "" }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { fullName, email, password, mobileNumber } = inputs;
    let anyError = false;
    if (fullName.length === 0) {
      setErrors((values) => ({
        ...values,
        fullName: "Please enter a valid full name",
      }));
      anyError = true;
    }

    if (email.length === 0) {
      setErrors((values) => ({
        ...values,
        email: "Please enter a valid email",
      }));
      anyError = true;
    }

    if (password.length === 0 || !isValidPassword(password)) {
      setErrors((values) => ({
        ...values,
        password:
          "Password must contain atleast one upper case, one lower case and special character",
      }));
      anyError = true;
    }
    if (mobileNumber.length === 0) {
      setErrors((values) => ({
        ...values,
        mobileNumber: "Please enter a valid mobile number",
      }));
      anyError = true;
    }

    if (anyError) return;
    // make a API call
    try {
      const response = await registerUser(inputs);
      if (response.success) {
        localStorage.setItem("isAuthenticated", response.token);
        history.push("/profile");
      } else {
        setErrors((values) => ({
          ...values,
          backendError: "Something went wrong! Please try after sometime",
        }));
      }
    } catch (e) {
      const errMsg = e.response?.data?.message;
      if (errMsg && errMsg.includes("Duplicate entry")) {
        setErrors((values) => ({
          ...values,
          backendError: "User already registered",
        }));
      } else {
        setErrors((values) => ({
          ...values,
          backendError: "Something went wrong! Please try after sometime",
        }));
      }
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 sm:px-6 lg:px-8" style={{height: '100vh'}}>
          <div className="absolute inset-0">
            <img
              className="object-cover object-top w-full h-full"
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Register and connect with professional profiles. <br />Get a chance to work on R&D projects.
              </h3>
            </div>
          </div>
        </div>
        {/* form block start */}
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black  sm:text-4xl">
              Sign Up
            </h2>
            <Link to="/signin">
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <span className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                  {" "}
                  Sign In
                </span>
              </p>
            </Link>

            <form className="mt-8" onSubmit={handleSignUp}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Enter You Full Name"
                      id="fullName"
                      name="fullName"
                      onChange={handleChange}
                    ></input>
                    {errors["fullName"] && (
                      <div className="mt-1.5 text-red-400 text-sm">
                        {errors["fullName"]}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      onChange={handleChange}
                    ></input>
                    {errors["email"] && (
                      <div className="mt-1.5 text-red-400 text-sm">
                        {errors["email"]}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      id="password"
                      onChange={handleChange}
                    ></input>
                    {errors["password"] && (
                      <div className="mt-1.5 text-red-400 text-sm">
                        {errors["password"]}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Mobile Number{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="tel"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      id="MobileNumber"
                      onChange={handleChange}
                    ></input>
                    {errors["mobileNumber"] && (
                      <div className="mt-1.5 text-red-400 text-sm">
                        {errors["mobileNumber"]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {errors["backendError"] && (
                <div className="mt-2 text-red-400 text-sm">
                  {errors["backendError"]}
                </div>
              )}
              <div className="mt-3 space-y-3">
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                  >
                    Register
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
                <p>
                  <span className="text-gray-500 text-sm">
                    Read our{" "}
                    <span className="capitalize text-indigo-600">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="capitalize text-indigo-600">
                      terms of service
                    </span>{" "}
                    to learn more
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* form block end */}
      </div>
    </section>
  );
};

export default UserSignUpPage;
