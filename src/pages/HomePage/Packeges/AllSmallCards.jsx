import React from "react";
import amazon from "../../../assets/amazon.png";
import flipkart from "../../../assets/flipkart.png";
import git from "../../../assets/git.png";
import linkdin from "../../../assets/linkdin.png";
import samsung from "../../../assets/samsung.png";
import skill from "../../../assets/skill.png";
import uber from "../../../assets/uber.png";
import youtube from "../../../assets/youtube.png";
import SmallCard from "./SmallCard";

function AllSmallCards() {
  return (
    //   <section className="container">
    //    <div
    //     className="display__Flex alignCenter spaceEvenly display__Flexwrap"
    //     style={{ marginTop: "2rem", width: "80%", margin: "auto" }}
    //    >
    //     <SmallCard image={amazon} />
    //     <SmallCard image={flipkart} />
    //     <SmallCard image={git} />
    //     <SmallCard image={linkdin} />
    //     <SmallCard image={samsung} />
    //     <SmallCard image={skill} />
    //     <SmallCard image={git} />
    //     <SmallCard image={uber} />
    //     <SmallCard image={youtube} />
    //    </div>
    //    <div
    //     className="display__Flex justifyCenter alignCenter"
    //     style={{ marginTop: "2rem" }}
    //    >
    //     <div className="downloadBtn">DOWNLOAD MOBILE APP</div>
    //     <div className="downloadBtn">CREATE AN ACCOUNT</div>
    //    </div>
    //   </section>
    <div className="container mx-auto px-10 md:px-0 py-10">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-medium text-black dark:text-white">
          International package tracking
        </h2>
        <p className="text-base font-medium text-gray-600 dark:text-gray-200">
          Regardless of the online store or the market you have purchased, you
          can
          <br />
          always trace the full path of the order with our parcel tracking
          service
        </p>
      </div>
      <div className="mt-8">
        <div className="relative flex h-[300px] items-center justify-center rounded-[10px] md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
            alt=""
            className="object-cover w-full h-full rounded-[10px] z-0"
          />
        </div>
        <section className="py-10">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Jenny Wilson
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  Founder
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Jenifer K
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  Co-Founder
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  John Doe
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  Frontend
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Mike hussy
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  Designer
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Ketty P
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  Designer
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Tom D
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  CTO
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJzfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Javed B
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  SEO
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Dan R
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  Backend
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt=""
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black dark:text-white">
                  Shu D
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600 dark:text-gray-200">
                  Marketing
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllSmallCards;
