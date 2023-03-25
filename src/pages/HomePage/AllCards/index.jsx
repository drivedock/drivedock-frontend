import React from "react";
import Card from "./Card";
import firstCard from "../../../assets/firstCard.png";
import secondCard from "../../../assets/secondCard.png";
import thirdCard from "../../../assets/thirdCard.png";
import fourchCard from "../../../assets/fourchCard.png";

function AllCards() {
 return (
  //   <section className="container">
  //    <div className="display__Flex spaceEvenly" style={{ marginTop: "4rem" }}>
  // <Card image={firstCard} />
  //     <Card image={secondCard} />
  //     <Card image={thirdCard} />
  //     <Card image={fourchCard} />
  //    </div>
  //   </section>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 container">
   {/* <div class="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
    <img
     class="w-full"
     src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
     alt="Mountain"
    />
    <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2">Mountain</div>
     <p class="text-gray-700 dark:text-gray-300 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, Nonea! Maiores et perfe
     </p>
    </div>
    <div class="px-6 pt-4 pb-2">
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      photography
     </span>
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      travel
     </span>
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      winter
     </span>
    </div>
   </div> */}
   <Card image={firstCard} />

   {/* <div class="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
    <img
     class="w-full"
     src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
     alt="Mountain"
    />
    <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2">Forest</div>
     <p class="text-gray-700 dark:text-gray-300 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, Nonea! Maiores et perfe
     </p>
    </div>
    <div class="px-6 pt-4 pb-2">
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      photography
     </span>
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      travel
     </span>
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      winter
     </span>
    </div>
   </div> */}
   <Card image={secondCard} />

   {/* <div class="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
    <img
     class="w-full"
     src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
     alt="Mountain"
    />
    <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2">Beach</div>
     <p class="text-gray-700 dark:text-gray-300 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, Nonea! Maiores et perfe
     </p>
    </div>
    <div class="px-6 pt-4 pb-2">
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      photography
     </span>
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      travel
     </span>
     <span class="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
      winter
     </span>
    </div>
   </div> */}
   <Card image={thirdCard} />

   <Card image={fourchCard} />
  </div>
 );
}

export default AllCards;
