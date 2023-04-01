import React, { useState } from "react";

function ProfileForm() {
 let [register, setRegiser] = useState({
  fullName: "",
  email: "",
  Address: "",
  City: "",
  State: "",
  Zipcode: "",
  Country: "",
 });

 const handleChange = ({ target }) => {
  var { name, value } = target;
  setRegiser({ ...register, [name]: value });
 };
 return (
  //   <div>
  //    <figure style={{ width: "15%", margin: "auto", marginTop: "1rem" }}>
  //     <img style={{}} className="widthFull" src={ProfilePic} alt="Profile Pic" />
  //    </figure>
  //    <form action="">
  //     <fieldset className="display__Flex spaceBetween display__Flexwrap">
  //      <div className="profileInputDiv flex45">
  //       <label className="profileLable" htmlFor="">
  //        Full Name
  //       </label>
  //       <input
  //        onChange={(e) => handleChange(e)}
  //        type="text"
  //        name="fullName"
  //        value={register.fullName}
  //       />
  //      </div>

  //      <div className="profileInputDiv flex45">
  //       <label className="profileLable" htmlFor="">
  //        Email Address
  //       </label>
  //       <input
  //        onChange={(e) => handleChange(e)}
  //        type="email"
  //        name="email"
  //        value={register.email}
  //       />
  //      </div>

  //      <div className="profileInputDiv widthFull">
  //       <label className="profileLable" htmlFor="">
  //        Address
  //       </label>
  //       <input
  //        onChange={(e) => handleChange(e)}
  //        type="text"
  //        name="Address"
  //        value={register.Address}
  //       />
  //      </div>

  //      <div className="profileInputDiv flex45">
  //       <label className="profileLable" htmlFor="">
  //        City
  //       </label>
  //       <input
  //        onChange={(e) => handleChange(e)}
  //        type="text"
  //        name="City"
  //        value={register.City}
  //       />
  //      </div>

  //      <div className="profileInputDiv flex45">
  //       <label className="profileLable" htmlFor="">
  //        State/Pincode
  //       </label>
  //       <input
  //        onChange={(e) => handleChange(e)}
  //        type="text"
  //        name="State"
  //        value={register.State}
  //       />
  //      </div>

  //      <div className="profileInputDiv flex45">
  //       <label className="profileLable" htmlFor="">
  //        Zip Code
  //       </label>
  //       <input
  //        onChange={(e) => handleChange(e)}
  //        type="text"
  //        name="Zipcode"
  //        value={register.Zipcode}
  //       />
  //      </div>

  //      <div className="profileInputDiv flex45">
  //       <label className="profileLable" htmlFor="">
  //        Country
  //       </label>
  //       <input
  //        onChange={(e) => handleChange(e)}
  //        type="text"
  //        name="Country"
  //        value={register.Country}
  //       />
  //      </div>

  //      <div className="display__Flex" style={{ marginTop: "1rem" }}>
  //       <div className="downloadBtn">Save Profile</div>
  //       <div className="downloadBtn">Cancel</div>
  //      </div>
  //     </fieldset>
  //    </form>
  //   </div>
  <>
   <form>
    <div class="grid gap-3 mb-2 mt-6 md:grid-cols-2">
     <div>
      <label
       for="first_name"
       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       First name
      </label>
      <input
       type="text"
       id="first_name"
       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="John"
       required
      />
     </div>
     <div>
      <label
       for="last_name"
       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Last name
      </label>
      <input
       type="text"
       id="last_name"
       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Doe"
       required
      />
     </div>
     <div>
      <label
       for="phone"
       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Phone number
      </label>
      <input
       type="tel"
       id="phone"
       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="123-45-678"
       pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
       required
      />
     </div>
     <div class="">
      <label
       for="email"
       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Email address
      </label>
      <input
       type="email"
       id="email"
       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="john.doe@company.com"
       required
      />
     </div>
     <div class="">
      <label
       for="password"
       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Password
      </label>
      <input
       type="password"
       id="password"
       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="•••••••••"
       required
      />
     </div>
     <div class="">
      <label
       for="confirm_password"
       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Confirm password
      </label>
      <input
       type="password"
       id="confirm_password"
       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="•••••••••"
       required
      />
     </div>
    </div>
    <div class="flex ml-1 items-start mb-4">
     <div class="flex items-center h-5">
      <input
       id="remember"
       type="checkbox"
       value=""
       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
       required
      />
     </div>
     <label
      for="remember"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
     >
      I agree with the{" "}
      <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">
       terms and conditions
      </a>
      .
     </label>
    </div>
    <button
     type="submit"
     class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
     Submit
    </button>
   </form>
  </>
 );
}

export default ProfileForm;
