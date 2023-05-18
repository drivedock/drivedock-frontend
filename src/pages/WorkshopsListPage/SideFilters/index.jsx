import React, { useState } from "react";
import ArrowDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";

export const SideFilters = () => {
  const [selected, setSelected] = useState("fruits-vegetables");
  return (
    <section className="pt-8  w-full max-h-screen  sm:py-16 lg:py-10">
      <div className="">
        <div className="">
          <nav className="relative px-8 pb-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
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
                    className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
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
      <div className="px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between  w-full md:gap-6  ">
          <div className="md:block w-96">
            <div className="bg-white border border-gray-200 rounded-md">
              <div className="px-7 py-6">
                <p className="text-lg font-bold text-gray-800">Category</p>
                <ul className="mt-4">
                  <ul className="text-xs xl:py-8" dir="ltr">
                    {items.map((item) => (
                      <React.Fragment key={item.slug}>
                        <li
                          key={item.slug}
                          className="rounded-md py-1 bg-white"
                          onClick={() =>
                            setSelected(item.slug === selected ? "" : item.slug)
                          }
                        >
                          <button className="flex w-full items-center py-2 font-semibold text-body-dark outline-none transition-all ease-in-expo  focus:text-accent focus:outline-none focus:ring-0 ltr:text-left rtl:text-right text-accent text-sm">
                            <span className="flex h-5 w-5 items-center justify-center ltr:mr-4 rtl:ml-4">
                              {item.icon}
                            </span>
                            <span>{item.name}</span>
                            <span className="ltr:ml-auto ltr:mr-4 rtl:ml-4 rtl:mr-auto">
                              {selected === item.slug ? (
                                <ArrowUpIcon className="h-3 w-3" />
                              ) : (
                                <ArrowDownIcon className="h-3 w-3" />
                              )}
                            </span>
                          </button>
                        </li>
                        {selected === item.slug ? (
                          <li>
                            <ul
                              className="text-xs ltr:ml-4 rtl:mr-4 h-auto opacity-100"
                              data-projection-id={33}
                            >
                              {item.children.map((child) => (
                                <li
                                  key={child.slug}
                                  className="rounded-md py-1 bg-white"
                                  data-projection-id={34}
                                >
                                  <button className="flex w-full items-center py-2 font-semibold text-body-dark outline-none transition-all ease-in-expo  focus:text-accent focus:outline-none focus:ring-0 ltr:text-left rtl:text-right text-body-dark text-sm text-body ltr:ml-5 rtl:mr-5">
                                    <span>{child.name}</span>
                                    <span className="ltr:ml-auto ltr:mr-4 rtl:ml-4 rtl:mr-auto" />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <section className="py-4 max-h-screen sm:py-16 rounded-md  overflow-auto lg:py-20 bg-gray-50 dark:bg-gray-900">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              {/* Head */}
              <div className="flex items-center justify-center lg:justify-between">
                <h2 className="text-2xl z-10 w-full  font-bold text-gray-900  sm:text-3xl">
                  Upcoming workshops
                </h2>
              </div>
              {/* Products */}
              <div className="flex flex-wrap  overflow-auto gap-2 mt-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:mt-10">
                {/* mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:mt-10 */}
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-xl group"
                  >
                    <div className="absolute z-10 top-3 right-3">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center text-gray-400 hover:text-rose-500"
                      >
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="relative ">
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          className="object-contain w-full h-52 p-4"
                          src={product.imageSrc}
                          alt={product.imageAlt}
                        />
                      </div>

                      <div className="px-6 py-4 flex-1 flex flex-col">
                        <p className="text-xs font-medium tracking-widest text-gray-500 dark:text-gray-300 uppercase">
                          {product.brand}
                        </p>
                        <h3 className="mt-2 text-sm font-medium text-gray-900 ">
                          <a href="#" title="">
                            {product.name}
                          </a>
                        </h3>
                        <div className="flex items-center mt-2.5">
                          <div className="flex items-center space-x-px">
                            {[1, 2, 3, 4, 5].map((e) => (
                              <svg
                                key={e}
                                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-sm font-medium text-gray-500 ml-1.5 dark:text-gray-300">
                            ({product.ratings})
                          </p>
                        </div>
                        <p className="mt-5 text-sm font-bold text-gray-900 ">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-indigo-600"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Small Screen View All */}
              <div className="mt-12 text-center lg:hidden">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
                >
                  View all
                  <svg
                    className="w-5 h-5 ml-2 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

const products = [
  {
    id: 1,
    brand: "Apple",
    name: "APPLE iPhone 13 (Midnight, 128 GB)",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    href: "#",
    price: "₹61,999",
    color: "Midnight",
    imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
    quantity: 1,
    ratings: "12,873",
  },
  {
    id: 1,
    brand: "Apple",
    name: "APPLE iPhone 13 (Midnight, 128 GB)",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    href: "#",
    price: "₹61,999",
    color: "Midnight",
    imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
    quantity: 1,
    ratings: "12,873",
  },
  {
    id: 1,
    brand: "Apple",
    name: "APPLE iPhone 13 (Midnight, 128 GB)",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    href: "#",
    price: "₹61,999",
    color: "Midnight",
    imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
    quantity: 1,
    ratings: "12,873",
  },
  {
    id: 1,
    brand: "Apple",
    name: "APPLE iPhone 13 (Midnight, 128 GB)",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    href: "#",
    price: "₹61,999",
    color: "Midnight",
    imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
    quantity: 1,
    ratings: "12,873",
  },
  {
    id: 2,
    brand: "Apple",
    name: "APPLE Airpods Pro Bluetooth Headset",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70",
    href: "#",
    price: "₹22,500",
    color: "White, True Wireless",
    imageAlt: "APPLE Airpods Pro Bluetooth Headset",
    quantity: 1,
    ratings: "8,381",
  },
  {
    id: 3,
    brand: "Apple",
    name: "APPLE iPad (9thGen) 64GB Headset",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    href: "#",
    price: "₹29,900",
    color: "Space Grey",
    imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
    quantity: 1,
    ratings: "1,530",
  },
  // More products...
];

const items = [
  {
    name: "Mechanical",
    slug: "mechanical",
    children: [
      { name: "Fruits", slug: "fruits" },
      { name: "Vegetables", slug: "vegetables" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.347 24.101"
        fill="currentColor"
        className="h-full w-full"
      >
        <g id="Grocery" transform="translate(-39.481 0.052)">
          <path
            id="Path_17386"
            data-name="Path 17386"
            d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z"
            transform="translate(-294.289 -380.346)"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.1"
          />
          <path
            id="Path_17387"
            data-name="Path 17387"
            d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z"
            transform="translate(-0.5)"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.1"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Meat & Fish",
    slug: "meat-fish",
    children: [
      { name: "Fresh Fish", slug: "fresh-fish" },
      { name: "Meat", slug: "meat" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24.003 24"
        fill="currentColor"
        className="h-full w-full"
      >
        <g
          id="Meat_Fish"
          data-name="Meat & Fish"
          transform="translate(-100.274 -126.786)"
        >
          <path
            id="Path_17433"
            data-name="Path 17433"
            d="M152.165,147.238c-.186,0-.366-.005-.542-.016a.465.465,0,0,1-.27-.108c-.525-.442-1.049-.911-1.546-1.38-.508-.508-.952-1.036-1.383-1.546a.545.545,0,0,1-.124-.289c-.234-3.811,2.129-10.143,4.769-12.784a9.528,9.528,0,0,1,1.8-1.453.463.463,0,1,1,.5.781,8.639,8.639,0,0,0-1.629,1.318c-2.42,2.42-4.661,8.375-4.515,11.929.4.474.8.944,1.236,1.378.439.414.907.835,1.379,1.236,3.5.153,9.508-2.1,11.919-4.506a8.691,8.691,0,0,0,1.328-1.638.463.463,0,1,1,.781.5,9.625,9.625,0,0,1-1.462,1.8C161.888,144.973,156.01,147.238,152.165,147.238Z"
            transform="translate(-42.009 -2.453)"
            fill="currentColor"
          />
          <path
            id="Path_17434"
            data-name="Path 17434"
            d="M105.065,249.978a2.457,2.457,0,0,1-1.745-.729,2.547,2.547,0,0,1-.707-1.61,2.454,2.454,0,0,1-2.338-2.483,2.479,2.479,0,0,1,3.513-2.21l2.637-2.663a.464.464,0,0,1,.659.653l-2.889,2.916a.465.465,0,0,1-.592.055,1.547,1.547,0,0,0-2.4,1.257,1.544,1.544,0,0,0,.457,1.114,1.572,1.572,0,0,0,1.365.416.463.463,0,0,1,.535.536,1.592,1.592,0,0,0,.425,1.374,1.54,1.54,0,0,0,2.355-1.963.464.464,0,0,1,.062-.583l2.916-2.888a.463.463,0,1,1,.652.658l-2.668,2.644a2.487,2.487,0,0,1-.491,2.778A2.454,2.454,0,0,1,105.065,249.978Z"
            transform="translate(0 -99.192)"
            fill="currentColor"
          />
          <path
            id="Path_17435"
            data-name="Path 17435"
            d="M206.374,138.769a5.236,5.236,0,0,1-2-.475A14.609,14.609,0,0,1,200,135.177c-2.193-2.193-3.6-4.707-3.593-6.4a1.862,1.862,0,0,1,1.989-1.987h.018c1.7,0,4.2,1.408,6.385,3.593l0,0c2.629,2.655,4.592,6.308,3.05,7.848A2.011,2.011,0,0,1,206.374,138.769Zm-7.96-11.056H198.4a.948.948,0,0,0-1.067,1.066c-.008,1.439,1.327,3.747,3.322,5.743a13.669,13.669,0,0,0,4.084,2.92c1.138.483,2.054.532,2.455.133.814-.814-.239-3.7-3.054-6.541C202.153,129.045,199.854,127.713,198.414,127.713Z"
            transform="translate(-84.117 0)"
            fill="currentColor"
          />
          <path
            id="Path_17436"
            data-name="Path 17436"
            d="M216.843,148.223h0c-1.039,0-2.9-1.214-4.749-3.084-1.538-1.518-3.09-3.585-3.079-4.77a.963.963,0,0,1,.283-.715.95.95,0,0,1,.7-.266H210c1.187,0,3.243,1.544,4.76,3.081,1.868,1.845,3.079,3.707,3.082,4.746a.944.944,0,0,1-1,1.008Zm-6.811-7.916a.268.268,0,0,0-.1.017c-.133.33.7,2.069,2.815,4.161,2.27,2.3,3.912,2.933,4.181,2.8.115-.253-.521-1.895-2.816-4.159l0,0C212.174,141.163,210.54,140.306,210.032,140.306Z"
            transform="translate(-95.146 -11.027)"
            fill="currentColor"
          />
          <path
            id="Path_17437"
            data-name="Path 17437"
            d="M181.251,168.174l-.83-.41a5.223,5.223,0,0,1,.391-.689.464.464,0,0,1,.755.539A4.148,4.148,0,0,0,181.251,168.174Z"
            transform="translate(-70.129 -35.084)"
            fill="currentColor"
          />
          <path
            id="Path_17438"
            data-name="Path 17438"
            d="M164.789,189.173a.478.478,0,0,1-.095-.01.463.463,0,0,1-.359-.548,18.285,18.285,0,0,1,1.23-3.8.464.464,0,0,1,.845.381,17.358,17.358,0,0,0-1.168,3.611A.463.463,0,0,1,164.789,189.173Z"
            transform="translate(-56.046 -50.535)"
            fill="currentColor"
          />
          <path
            id="Path_17439"
            data-name="Path 17439"
            d="M239.96,170.8a.463.463,0,0,1-.328-.136l-.382-.382a.463.463,0,0,1,.655-.655l.382.382a.464.464,0,0,1-.328.791Z"
            transform="translate(-121.487 -37.372)"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Snacks",
    slug: "snacks",
    children: [
      { name: "Nuts & Biscuits", slug: "nuts-biscuits" },
      { name: "Chocolates", slug: "chocolates" },
      { name: "Crisps", slug: "crisps" },
      { name: "Noodles & Pasta", slug: "noodles-pasta" },
      { name: "Sauce", slug: "sauce" },
      { name: "Soup", slug: "soup" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.143"
        height={22}
        viewBox="0 0 25.143 22"
        fill="currentColor"
        className="h-full w-full"
      >
        <g id="Snacks" transform="translate(0 -32.001)">
          <g
            id="Group_5714"
            data-name="Group 5714"
            transform="translate(3.142 40.381)"
          >
            <g
              id="Group_5713"
              data-name="Group 5713"
              transform="translate(0 0)"
            >
              <path
                id="Path_17398"
                data-name="Path 17398"
                d="M80.227,202.654H65.559a1.573,1.573,0,0,0-1.571,1.571v1.048a9.928,9.928,0,0,0,5.388,8.847.524.524,0,1,0,.481-.931,8.883,8.883,0,0,1-4.821-7.916v-1.048a.524.524,0,0,1,.524-.524H80.227a.524.524,0,0,1,.524.524v1.048a8.879,8.879,0,0,1-4.822,7.915.524.524,0,0,0,.241.99.517.517,0,0,0,.24-.059,9.923,9.923,0,0,0,5.389-8.846v-1.048A1.573,1.573,0,0,0,80.227,202.654Z"
                transform="translate(-63.988 -202.654)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Group_5716"
            data-name="Group 5716"
            transform="translate(0 50.857)"
          >
            <g
              id="Group_5715"
              data-name="Group 5715"
              transform="translate(0 0)"
            >
              <path
                id="Path_17399"
                data-name="Path 17399"
                d="M24.056,416.29a.525.525,0,0,0-.484-.324H.524a.524.524,0,0,0-.371.895l1.174,1.175a3.645,3.645,0,0,0,2.593,1.074H20.174a3.651,3.651,0,0,0,2.6-1.074l1.174-1.175A.523.523,0,0,0,24.056,416.29ZM22.027,417.3a2.6,2.6,0,0,1-1.852.767H3.921a2.6,2.6,0,0,1-1.852-.767l-.281-.281h20.52Z"
                transform="translate(0 -415.966)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Group_5718"
            data-name="Group 5718"
            transform="translate(17.438 42.474)"
          >
            <g id="Group_5717" data-name="Group 5717">
              <path
                id="Path_17400"
                data-name="Path 17400"
                d="M361.785,245.653c-1.411-.907-3.666.078-3.918.192a.524.524,0,0,0,.435.954c.505-.229,2.125-.773,2.917-.263a1.488,1.488,0,0,1,.532,1.358c0,2.1-4.23,3.365-5.864,3.677l-.371.073a.523.523,0,0,0,.1,1.037.486.486,0,0,0,.1-.01l.368-.072c.274-.052,6.712-1.315,6.712-4.705A2.471,2.471,0,0,0,361.785,245.653Z"
                transform="translate(-355.093 -245.272)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Group_5720"
            data-name="Group 5720"
            transform="translate(14.667 32.001)"
          >
            <g
              id="Group_5719"
              data-name="Group 5719"
              transform="translate(0 0)"
            >
              <path
                id="Path_17401"
                data-name="Path 17401"
                d="M300.125,35.994a3.139,3.139,0,0,0,0-3.8.524.524,0,1,0-.818.655,2.113,2.113,0,0,1,0,2.488,3.135,3.135,0,0,0,0,3.8.524.524,0,1,0,.818-.655A2.11,2.11,0,0,1,300.125,35.994Z"
                transform="translate(-298.666 -32.001)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Group_5722"
            data-name="Group 5722"
            transform="translate(11.52 32.001)"
          >
            <g
              id="Group_5721"
              data-name="Group 5721"
              transform="translate(0 0)"
            >
              <path
                id="Path_17402"
                data-name="Path 17402"
                d="M236.055,36a3.135,3.135,0,0,0,0-3.8.524.524,0,1,0-.818.655,2.11,2.11,0,0,1,0,2.488,3.139,3.139,0,0,0,0,3.8.524.524,0,1,0,.818-.655A2.113,2.113,0,0,1,236.055,36Z"
                transform="translate(-234.597 -32.009)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Group_5724"
            data-name="Group 5724"
            transform="translate(8.381 32.002)"
          >
            <g
              id="Group_5723"
              data-name="Group 5723"
              transform="translate(0 0)"
            >
              <path
                id="Path_17403"
                data-name="Path 17403"
                d="M172.125,36.015a3.139,3.139,0,0,0,0-3.8.524.524,0,0,0-.818.654,2.113,2.113,0,0,1,0,2.488,3.135,3.135,0,0,0,0,3.8.524.524,0,1,0,.818-.654A2.11,2.11,0,0,1,172.125,36.015Z"
                transform="translate(-170.666 -32.022)"
                fill="currentColor"
              />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Pet Care",
    slug: "pet-care",
    children: [
      { name: "Cat Food", slug: "cat-food" },
      { name: "Dog Food", slug: "dog-food" },
      { name: "Accessories", slug: "accessories" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={60}
        height={60}
        fill="currentColor"
        className="h-full w-full"
      >
        <g id="Outline">
          <path
            d="M83.242,192.5,76.758,177.87c-18.5,8.2-28.133,17.987-28.7,29.087L16.142,374.5a8,8,0,0,0,3.812,8.4C47.161,398.85,82.72,411.28,125.642,419.845,165.487,427.8,210.564,432,256,432s90.513-4.2,130.358-12.155c42.922-8.565,78.481-21,105.688-36.943a8,8,0,0,0,3.812-8.4l-10.667-56L469.475,321.5l3.263,17.136-10.656,5.557a270.53,270.53,0,0,1-48.076,19.552C369.917,376.806,313.8,384,256,384c-59.3,0-116.534-7.531-161.151-21.206l-4.69,15.3C136.255,392.219,195.151,400,256,400c59.3,0,117.028-7.428,162.551-20.917a286.6,286.6,0,0,0,50.929-20.706l6.385-3.329,3.2,16.819c-107.232,58.747-338.9,58.747-446.137,0L60.214,228.632q11.793,9.07,34.867,16.276C134.037,257.041,192.689,264,256,264s121.963-6.959,160.92-19.092q23.056-7.182,34.867-16.276L466.428,305.5l15.717-2.994-18.187-95.477c-.88-18.8-27.229-33.514-78.388-43.754l-3.14,15.688C434.3,189.342,448,202.5,448,208c0,4.68-8.951,12.184-28.716,19.253a48.237,48.237,0,0,0-35.856-26.672,48.122,48.122,0,0,0-40-40.008,48.147,48.147,0,0,0-13.489-26.511,47.646,47.646,0,0,0-26.5-13.493,48.015,48.015,0,0,0-94.864,0,47.647,47.647,0,0,0-26.506,13.494,48.167,48.167,0,0,0-12.7,22.608c-29.7,3.39-55.8,8.518-75.8,14.905l4.87,15.241a316.9,316.9,0,0,1,40.8-9.67,47.54,47.54,0,0,0-10.67,23.422,47.647,47.647,0,0,0-26.506,13.494,48.175,48.175,0,0,0-9.33,13.2C72.955,220.188,64,212.681,64,208,64,204.629,69.055,198.787,83.242,192.5Zm30.134,32.88A31.791,31.791,0,0,1,136,216a8,8,0,0,0,8-8,32.013,32.013,0,0,1,32-32,8,8,0,0,0,8-8c0-1.055.055-2.15.16-3.228A32.023,32.023,0,0,1,216,136a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,8,8,32.024,32.024,0,0,1,31.838,28.747c.107,1.1.162,2.2.162,3.253a8,8,0,0,0,8,8,32.036,32.036,0,0,1,32,32,8,8,0,0,0,8,8,32.12,32.12,0,0,1,27.754,16.073C366.446,242.232,313.315,248,256,248s-110.44-5.768-147.748-15.925A32.2,32.2,0,0,1,113.376,225.377ZM248,176v16a24.027,24.027,0,0,0-24,24H208A40.045,40.045,0,0,1,248,176Zm24-24H256V136h16Zm32,64H288V200h16ZM168,200h16v16H168ZM74.3,294.646l15.726,2.948L79.437,354.081,63.71,351.134Zm18.294-11.175-15.742-2.862,3.28-18.04,15.742,2.862Z"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Home & Cleaning",
    slug: "home-cleaning",
    children: [
      { name: "Air Freshner", slug: "air-freshner" },
      { name: "Cleaning Products", slug: "cleaning-products" },
      { name: "Kitchen Accessories", slug: "kitchen-accessories" },
      { name: "Laundry", slug: "laundry" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.59 25.05"
        fill="currentColor"
        className="h-full w-full"
      >
        <g
          id="home_cleaner"
          data-name="home cleaner"
          transform="translate(-2142.193 -787.635)"
        >
          <path
            id="Path_17440"
            data-name="Path 17440"
            d="M2188.815,831.346a2.538,2.538,0,0,1,2.6-1.81v-1.584a27.676,27.676,0,0,0-3.734-.111,3.962,3.962,0,0,0-3.169,2.034c-.33.684,2.49-.339,2.716,1.471"
            transform="translate(-39.669 -37.554)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <path
            id="Path_17441"
            data-name="Path 17441"
            d="M2289.466,862.334a10.742,10.742,0,0,0,1.89,3.765c.082.119-.025.28-.137.207a6.8,6.8,0,0,1-2.94-3.5"
            transform="translate(-138.167 -70.32)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <path
            id="Path_17442"
            data-name="Path 17442"
            d="M2226.052,898.788a2.93,2.93,0,0,0,1.4.214,3.341,3.341,0,0,0,1.319-.214v-1.436a.17.17,0,0,0-.169-.17h-2.377a.17.17,0,0,0-.169.17Z"
            transform="translate(-79.113 -103.39)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <path
            id="Path_17443"
            data-name="Path 17443"
            d="M2156.93,1189.207"
            transform="translate(-13.516 -380.522)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <path
            id="Path_17444"
            data-name="Path 17444"
            d="M2320.353,830.622h1.328v1.584h-1.328"
            transform="translate(-168.605 -40.225)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <path
            id="Path_17445"
            data-name="Path 17445"
            d="M2153.421,936.6a15.113,15.113,0,0,1-1.134,4.707.744.744,0,0,1-.68.515h-7.4a.751.751,0,0,1-.688-.544,12.078,12.078,0,0,1,2.065-12.242,3.527,3.527,0,0,0,.679-3.055,1.052,1.052,0,0,1,.675-1.195"
            transform="translate(0 -129.588)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <path
            id="Path_17446"
            data-name="Path 17446"
            d="M2278.913,926.025c1.471.905-.25,1.974.006,2.2.847.757-.006,1.8-.006,1.8a1.4,1.4,0,0,1,.369,1.741,8.765,8.765,0,0,1,2.391,2.01"
            transform="translate(-129.259 -130.762)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <line
            id="Line_15"
            data-name="Line 15"
            y1="1.511"
            x2="3.16"
            transform="translate(2154.628 788.235)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <line
            id="Line_16"
            data-name="Line 16"
            x2="3.16"
            y2="1.511"
            transform="translate(2154.628 792.632)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <line
            id="Line_17"
            data-name="Line 17"
            x2="4.259"
            transform="translate(2154.628 791.189)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <circle
            id="Ellipse_9"
            data-name="Ellipse 9"
            cx="2.047"
            cy="2.047"
            r="2.047"
            transform="translate(2158.239 799.709)"
            strokeWidth="0.9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            id="Path_17447"
            data-name="Path 17447"
            d="M2383.738,957.387a1.489,1.489,0,0,0,2.978,0,1.489,1.489,0,0,0-2.978,0Z"
            transform="translate(-228.757 -159.112)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
          <circle
            id="Ellipse_10"
            data-name="Ellipse 10"
            cx="2.764"
            cy="2.764"
            r="2.764"
            transform="translate(2152.212 802.109)"
            strokeWidth="0.9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Dairy",
    slug: "dairy",
    children: [
      { name: "Milk", slug: "milk" },
      { name: "Butter", slug: "butter" },
      { name: "Egg", slug: "egg" },
      { name: "Yogurt", slug: "yogurt" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16.967 22.1"
        fill="currentColor"
        className="h-full w-full"
      >
        <g id="Dairy" transform="translate(-71.95 -15.95)">
          <path
            id="Path_17395"
            data-name="Path 17395"
            d="M72.733,36.167v-8.8a8.516,8.516,0,0,1,.693-3.374l.755-1.762c.064-.15.126-.3.183-.46a6.94,6.94,0,0,1,2.722.055,7.585,7.585,0,0,0,2.869.085c.041.107.085.214.13.321l.755,1.763.674-.289-.755-1.763c-.08-.188-.154-.379-.22-.568a8.55,8.55,0,0,1-.465-2.44h.359a.367.367,0,0,0,.367-.367V17.1A1.1,1.1,0,0,0,79.7,16H74.567a1.1,1.1,0,0,0-1.1,1.1v1.467a.367.367,0,0,0,.367.367h.359a8.552,8.552,0,0,1-.45,2.4c-.071.207-.15.412-.235.61L72.752,23.7A9.247,9.247,0,0,0,72,27.367v8.8A1.835,1.835,0,0,0,73.833,38H79.7v-.733H73.833A1.1,1.1,0,0,1,72.733,36.167ZM74.2,17.1a.367.367,0,0,1,.367-.367H79.7a.367.367,0,0,1,.367.367v1.1H74.2Zm5.141,1.833a9.271,9.271,0,0,0,.375,2.27,6.855,6.855,0,0,1-2.47-.095,7.673,7.673,0,0,0-2.633-.118,9.278,9.278,0,0,0,.314-2.057Z"
            transform="translate(0 0)"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.1"
          />
          <path
            id="Path_17397"
            data-name="Path 17397"
            d="M241.533,201.833c0-1.2-2.4-1.833-4.767-1.833s-4.767.63-4.767,1.833a.88.88,0,0,0,.01.132l1.092,11.271a.367.367,0,0,0,.365.33h6.6a.367.367,0,0,0,.365-.33l1.092-11.271A.884.884,0,0,0,241.533,201.833Zm-1,3-.185.062a5.813,5.813,0,0,1-3.526.053,6.566,6.566,0,0,0-3.778,0l-.033.01-.181-2.047a10.662,10.662,0,0,0,7.873,0Zm-3.767-4.1c2.593,0,4.015.717,4.032,1.093l0,.046c-.091.382-1.506,1.061-4.028,1.061s-3.937-.679-4.028-1.061l0-.046C232.752,201.451,234.173,200.733,236.767,200.733Zm2.968,12.1H233.8l-.718-7.128.175-.052a5.859,5.859,0,0,1,3.357,0,6.539,6.539,0,0,0,3.845-.02Z"
            transform="translate(-152.667 -175.567)"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.1"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Cooking",
    slug: "cooking",
    children: [
      { name: "Oil", slug: "oil" },
      { name: "Rice", slug: "rice" },
      { name: "Salt & Sugar", slug: "salt-sugar" },
      { name: "Spices", slug: "spices" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28.9 16.9"
        fill="currentColor"
        className="h-full w-full"
      >
        <g id="Cooking" transform="translate(-61.55 -195.55)">
          <g
            id="Group_12320"
            data-name="Group 12320"
            transform="translate(62 196)"
          >
            <g
              id="Group_12319"
              data-name="Group 12319"
              transform="translate(11.006 10.518)"
            >
              <line
                id="Line_10"
                data-name="Line 10"
                x2="0.963"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="0.9"
              />
              <line
                id="Line_11"
                data-name="Line 11"
                x2="0.963"
                transform="translate(2.345)"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="0.9"
              />
              <line
                id="Line_12"
                data-name="Line 12"
                x2="0.963"
                transform="translate(4.691)"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="0.9"
              />
            </g>
            <path
              id="Path_17428"
              data-name="Path 17428"
              d="M578.074,414.485l3.192-.59v-1.15h-3.192Z"
              transform="translate(-553.266 -406.978)"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="0.9"
            />
            <path
              id="Path_17429"
              data-name="Path 17429"
              d="M506.668,414.485l-3.192-.59v-1.15h3.192Z"
              transform="translate(-503.476 -406.978)"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="0.9"
            />
            <path
              id="Path_17430"
              data-name="Path 17430"
              d="M523.823,401.744a17.212,17.212,0,0,0-10.749,3.829h21.615A17.751,17.751,0,0,0,523.823,401.744Z"
              transform="translate(-509.882 -399.805)"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="0.9"
            />
            <line
              id="Line_13"
              data-name="Line 13"
              y1="1.939"
              transform="translate(13.941)"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth="0.9"
            />
            <line
              id="Line_14"
              data-name="Line 14"
              x2="3.606"
              transform="translate(12.197)"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth="0.9"
            />
            <path
              id="Path_17431"
              data-name="Path 17431"
              d="M534.69,412.643s-.333,10.268-5.321,10.268H518.395c-4.988,0-5.321-10.268-5.321-10.268Z"
              transform="translate(-509.882 -406.911)"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="0.9"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Breakfast",
    slug: "breakfast",
    children: [
      { name: "Bread", slug: "bread" },
      { name: "Cereal", slug: "cereal" },
      { name: "Jam", slug: "jam" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25.408 18.5"
        fill="currentColor"
        className="h-full w-full"
      >
        <g id="Breakfast" transform="translate(0.25 -70.75)">
          <path
            id="Path_17388"
            data-name="Path 17388"
            d="M241.73,131a.73.73,0,0,0-.73.73v1.946a.73.73,0,0,0,1.459,0V131.73A.73.73,0,0,0,241.73,131Z"
            transform="translate(-229.276 -57.081)"
            fill="currentColor"
            stroke="#fff"
            strokeWidth="0.4"
          />
          <path
            id="Path_17389"
            data-name="Path 17389"
            d="M292.335,131.324a.73.73,0,1,0-1.214.81l.973,1.459a.73.73,0,0,0,1.214-.81Z"
            transform="translate(-276.841 -57.08)"
            fill="currentColor"
            stroke="#fff"
            strokeWidth="0.4"
          />
          <path
            id="Path_17390"
            data-name="Path 17390"
            d="M173.105,131.121a.73.73,0,0,0-1.012.2l-.973,1.459a.73.73,0,1,0,1.214.81l.973-1.459A.73.73,0,0,0,173.105,131.121Z"
            transform="translate(-162.679 -57.08)"
            fill="currentColor"
            stroke="#fff"
            strokeWidth="0.4"
          />
          <path
            id="Path_17391"
            data-name="Path 17391"
            d="M24.908,80.487A2.68,2.68,0,0,0,22.926,77.9a6.867,6.867,0,0,0-3.151-4.777A12.907,12.907,0,0,0,12.454,71a12.907,12.907,0,0,0-7.321,2.125A6.867,6.867,0,0,0,1.982,77.9a2.676,2.676,0,0,0,.159,5.207l.874,3.5A3.158,3.158,0,0,0,6.083,89H18.825a3.158,3.158,0,0,0,3.068-2.4l.874-3.5A2.68,2.68,0,0,0,24.908,80.487ZM4.431,86.251l-.772-3.089H6.945l.547,4.378H6.083a1.7,1.7,0,0,1-1.652-1.29Zm12.061-3.089-.547,4.378H13.184V83.162Zm-4.768,4.378H8.963l-.547-4.378h3.309Zm8.753-1.29a1.7,1.7,0,0,1-1.652,1.29H17.416l.547-4.378h3.286ZM22.232,81.7H2.676a1.216,1.216,0,0,1,0-2.432.73.73,0,0,0,.73-.73,5.255,5.255,0,0,1,2.561-4.217,11.44,11.44,0,0,1,6.488-1.864,11.44,11.44,0,0,1,6.488,1.864A5.255,5.255,0,0,1,21.5,78.541a.73.73,0,0,0,.73.73,1.216,1.216,0,1,1,0,2.432Z"
            transform="translate(0 0)"
            fill="currentColor"
            stroke="#fff"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Beverage",
    slug: "beverage",
    children: [
      { name: "Coffee", slug: "coffee" },
      { name: "Energy Drinks", slug: "energy-drinks" },
      { name: "Juice", slug: "juice" },
      { name: "Fizzy Drinks", slug: "fizzy-drinks" },
      { name: "Tea", slug: "tea" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14.569 26.099"
        className="h-full w-full"
      >
        <path
          id="bevarage"
          d="M901.182,394.343v-.267c0-1.455,0-2.911,0-4.366,0-.192-.037-.279-.246-.333a7.179,7.179,0,0,1-5.405-7.48c.093-1.293.3-2.579.459-3.867q.247-2,.5-3.993a.536.536,0,0,1,.621-.544q5.626,0,11.252,0a.536.536,0,0,1,.614.552c.306,2.43.6,4.862.92,7.291a7.253,7.253,0,0,1-5.12,7.982c-.482.144-.483.144-.483.663q0,2.04,0,4.08v.27c.508.073,1,.13,1.5.219a7.565,7.565,0,0,1,2.734.93,2.92,2.92,0,0,1,.508.4,1.325,1.325,0,0,1,.01,2,3.705,3.705,0,0,1-1.341.82,12.018,12.018,0,0,1-3.443.721,16.444,16.444,0,0,1-5.062-.306,12.666,12.666,0,0,1-1.887-.633,2.91,2.91,0,0,1-.834-.562,1.323,1.323,0,0,1-.03-2.054,4.29,4.29,0,0,1,1.763-.958,12.137,12.137,0,0,1,2.667-.527C900.976,394.376,901.069,394.359,901.182,394.343Zm7.541-13.96c-.329.106-.636.19-.933.3a5.372,5.372,0,0,1-3.76.018c-.931-.323-1.869-.626-2.8-.937a4.011,4.011,0,0,0-2.269-.227c-.695.174-1.376.4-2.061.617a.231.231,0,0,0-.129.159,12.072,12.072,0,0,0-.171,2.765,6.182,6.182,0,0,0,8.7,4.938,6.035,6.035,0,0,0,3.624-5.24A10.427,10.427,0,0,0,908.723,380.383Zm-11.243-5.84-.56,4.5c.2-.061.359-.1.51-.159a5.867,5.867,0,0,1,4.451,0c.917.356,1.867.628,2.806.925a3.391,3.391,0,0,0,1.868.129c.644-.163,1.277-.372,1.909-.577.055-.018.108-.16.1-.237-.125-1.074-.262-2.147-.4-3.22q-.085-.677-.17-1.354Zm3.7,20.782c-.893.191-1.747.332-2.574.567a5.433,5.433,0,0,0-1.343.65c-.332.206-.326.45-.006.681a4.151,4.151,0,0,0,.97.535,12.9,12.9,0,0,0,4.672.683,12.466,12.466,0,0,0,4.433-.712,3.869,3.869,0,0,0,.776-.41c.457-.312.453-.555.006-.869a3.233,3.233,0,0,0-.517-.294,10.12,10.12,0,0,0-3.3-.76c0,.471,0,.928,0,1.384,0,.429-.192.623-.615.624q-.948,0-1.9,0a.531.531,0,0,1-.607-.6C901.18,396.347,901.182,395.889,901.182,395.326Zm1.058-5.713v6.734h1v-6.734Z"
          transform="translate(-895.457 -373.443)"
          fill="currentColor"
          stroke="#fff"
          strokeWidth="0.1"
        />
      </svg>
    ),
  },
  {
    name: "Health & Beauty",
    slug: "health-beauty",
    children: [
      { name: "Bath", slug: "bath" },
      { name: "Cream", slug: "cream" },
      { name: "Deodorant", slug: "deodorant" },
      { name: "Face Care", slug: "face-care" },
      { name: "Oral Care", slug: "oral-care" },
      { name: "Shaving Needs", slug: "shaving-needs" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17.112 24"
        fill="currentColor"
        className="h-full w-full"
      >
        <g id="Beauty" transform="translate(-1278.138 -490.139)">
          <path
            id="Path_17448"
            data-name="Path 17448"
            d="M1295.25,496.812a.432.432,0,0,0-.432-.432h-1.467a6.671,6.671,0,0,0-13.314,0h-1.467a.433.433,0,0,0-.432.432,8.567,8.567,0,0,0,8.124,8.545v6.335h-3.6a1.223,1.223,0,1,0,0,2.447h8.065a1.223,1.223,0,1,0,0-2.447h-3.6v-6.335A8.567,8.567,0,0,0,1295.25,496.812Zm-4.165,16.1a.359.359,0,0,1-.359.358h-8.065a.359.359,0,1,1,0-.717h8.065A.359.359,0,0,1,1291.085,512.916ZM1286.694,491a5.808,5.808,0,1,1-5.808,5.808A5.814,5.814,0,0,1,1286.694,491Zm-7.679,6.24h1.022a6.671,6.671,0,0,0,13.314,0h1.022a7.691,7.691,0,0,1-15.358,0Z"
            fill="currentColor"
          />
          <path
            id="Path_17449"
            data-name="Path 17449"
            d="M1334.423,532.013a.431.431,0,0,0,.306-.127l3.391-3.392a.432.432,0,0,0-.612-.611l-3.391,3.391a.432.432,0,0,0,.306.738Z"
            transform="translate(-50.749 -34.18)"
            fill="currentColor"
          />
          <path
            id="Path_17450"
            data-name="Path 17450"
            d="M1390.525,532.974a.431.431,0,0,0,.306-.127l.569-.569a.432.432,0,0,0-.612-.612l-.569.569a.433.433,0,0,0,.306.738Z"
            transform="translate(-101.725 -37.618)"
            fill="currentColor"
          />
          <path
            id="Path_17451"
            data-name="Path 17451"
            d="M1337.9,552.1a.432.432,0,0,0,.611,0l3.894-3.894a.432.432,0,0,0-.611-.611l-3.894,3.894A.432.432,0,0,0,1337.9,552.1Z"
            transform="translate(-54.184 -52.089)"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
  },
];

SideFilters.displayName = "SideFilters";
