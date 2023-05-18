import React from "react";
import secondHeroSecImg from "../../../assets/secondHeroSecImg.png";

function SecondHeroSec() {
  let heading =
    "Creativity is seeing what everyone else has seen and thinking what no one else has thought";
  // let content =
  //   "we are going live on this website soon, keep on eye out for an incredible online experience!";
  return (
    <section className="bg-white dark:bg-gray-900 container">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mt-0 lg:col-span-5 lg:flex md:flex-col-reverse sm:flex-col-reverse xl:flex-col-reverse flex-col-reverse">
          <img src={secondHeroSecImg} alt="hero Img" />
        </div>

        <div className="mr-auto place-self-center lg:col-span-7 ml-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl ">
            {heading}
          </h1>
          {/* <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {content}
          </p> */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondHeroSec;
