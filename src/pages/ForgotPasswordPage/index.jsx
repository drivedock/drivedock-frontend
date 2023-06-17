import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Header from "../HomePage/Header";
import { getOTPToResetPassword, resetPassword } from "../../api/auth";
import { isValidPassword } from "../../helper";

const ForgotPasswordPage = () => {
  let history = useHistory();
  const [ctaText, setCTAText] = useState("Get Verification Code");
  const [showEmailField, setShowEmailField] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    verificationCode: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (showEmailField) {
      // make api call for get otp
      // after response show the password fileds
      const otpResponse = await getOTPToResetPassword({ user: inputs.email });
      if (otpResponse.success) {
        setShowEmailField(false);
        setCTAText("Reset Password");
      } else {
        setErrorMsg("Something went wrong! Please try again later.");
      }
    } else {
      // reset password api call and redirect to login
      const { verificationCode, email, password, confirmPassword } = inputs;
      if (password && !isValidPassword(password)) {
        setErrorMsg(
          "Password must contain atleast one upper case, one lower case and special character"
        );
        return;
      }

      if (password !== confirmPassword) {
        setErrorMsg("Password and Confirm Password should be same");
        return;
      }

      const resetPasswordResponse = await resetPassword({
        otp: verificationCode,
        email,
        password,
      });
      if (resetPasswordResponse.success) {
        history.replace({
          pathname: "/signin",
          params: {
            source: "forgot-password",
          },
        });
      } else {
        setErrorMsg("Something went wrong! Please try again later.");
      }
    }
  };

  return (
    <div>
      <Header />
      <section className="bg-gray-50 dark:bg-gray-900 md:h-screen pt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot Password
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit}
            >
              {showEmailField ? (
                <>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label
                      htmlFor="verificationCode"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Verification Code
                    </label>
                    <input
                      type="password"
                      name="verificationCode"
                      id="verificationCode"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              {errorMsg && (
                <div className="my-1.5 text-red-400 text-sm">{errorMsg}</div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {ctaText}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
