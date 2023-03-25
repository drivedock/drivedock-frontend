import React, { useState } from "react";
import ProfilePic from "../Profile/assets/profile.png";

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
   <div className="m-auto">
    <div class="flex items-center space-x-2 w-52 m-auto my-8">
     <img
      class="inline-block w-12 h-12 rounded-full"
      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
      alt="Dan_Abromov"
     />
     <span class="flex flex-col">
      <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
       Dan Abromov
      </span>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
       @dan_abromov
      </span>
     </span>
    </div>
   </div>
   <form>
    <div class="relative z-0 w-full mb-6 group">
     <input
      type="email"
      name="floating_email"
      id="floating_email"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
     />
     <label
      for="floating_email"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
     >
      Email address
     </label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
     <input
      type="password"
      name="floating_password"
      id="floating_password"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
     />
     <label
      for="floating_password"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
     >
      Password
     </label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
     <input
      type="password"
      name="repeat_password"
      id="floating_repeat_password"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
     />
     <label
      for="floating_repeat_password"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
     >
      Confirm password
     </label>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
     <div class="relative z-0 w-full mb-6 group">
      <input
       type="text"
       name="floating_first_name"
       id="floating_first_name"
       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
       placeholder=" "
       required
      />
      <label
       for="floating_first_name"
       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
       First name
      </label>
     </div>
     <div class="relative z-0 w-full mb-6 group">
      <input
       type="text"
       name="floating_last_name"
       id="floating_last_name"
       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
       placeholder=" "
       required
      />
      <label
       for="floating_last_name"
       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
       Last name
      </label>
     </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
     <div class="relative z-0 w-full mb-6 group">
      <input
       type="tel"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       name="floating_phone"
       id="floating_phone"
       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
       placeholder=" "
       required
      />
      <label
       for="floating_phone"
       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
       Phone number (123-456-7890)
      </label>
     </div>
     <div class="relative z-0 w-full mb-6 group">
      <input
       type="text"
       name="floating_company"
       id="floating_company"
       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
       placeholder=" "
       required
      />
      <label
       for="floating_company"
       class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
       Company (Ex. Google)
      </label>
     </div>
    </div>
    <button
     type="submit"
     class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
     Submit
    </button>
   </form>
  </>
 );
}

export default ProfileForm;
