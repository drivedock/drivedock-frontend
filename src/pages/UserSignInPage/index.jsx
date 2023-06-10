import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { loginUser } from "../../api/auth";

const UserSignInPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("isAuthenticated");
    if (token) {
      history.push("/dashboard/home");
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrorMsg("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    let anyError = false;
    if (email.length === 0 || password.length === 0) {
      anyError = true;
    }
    if (anyError) {
      setErrorMsg("Please provide valid credentials");
      return;
    }

    // make api call
    try {
      const response = await loginUser(inputs);
      if (response.success) {
        const { userType, token } = response;
        localStorage.setItem("DDUserEmail", email);
        localStorage.setItem("userType", userType);
        localStorage.setItem("isAuthenticated", token);
        if (userType === "admin") {
          history.push("/admin/workshops");
        } else {
          history.push("/dashboard/home");
        }
      } else {
        setErrorMsg(response.message);
      }
    } catch (e) {
      setErrorMsg("Something went wrong! Please try after sometime");
    }
  };

  return (
    <section className="h-screen">
      <div className="grid grid-cols-1 h-screen lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 sm:px-6 lg:px-8">
          <div className="absolute h-full inset-0">
            <img
              className="object-cover object-top w-full h-full"
              src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Register and attend various workshops, have a chance to work
                with DriveDock R&D projects
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-11 flex-col  px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="flex justify-end w-full">
            <NavLink to="/">
              <button className="inline-flex items-center rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to home
              </button>
            </NavLink>
          </div>
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black  sm:text-4xl">
              Sign in
            </h2>
            <Link to="/signup">
              <p className="mt-2 text-base text-gray-600">
                Don&apos;t have an account?{" "}
                <span className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                  {" "}
                  Create a free account
                </span>
              </p>
            </Link>

            <form action="#" onSubmit={handleSignIn} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>

                    <Link
                      to="/forgot-password"
                      title=""
                      className="text-sm font-medium text-indigo-600 hover:underline hover:text-indigo-700 focus:text-indigo-700"
                    >
                      {" "}
                      Forgot password?{" "}
                    </Link>
                  </div>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                {errorMsg && (
                  <div className="mt-1.5 text-red-400 text-sm">{errorMsg}</div>
                )}
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-green-500"
                  >
                    Get started
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserSignInPage;
