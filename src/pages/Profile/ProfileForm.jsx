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
  <div>
   <figure style={{ width: "15%", margin: "auto", marginTop: "1rem" }}>
    <img style={{}} className="widthFull" src={ProfilePic} alt="Profile Pic" />
   </figure>
   <form action="">
    <fieldset className="display__Flex spaceBetween display__Flexwrap">
     <div className="profileInputDiv flex45">
      <label className="profileLable" htmlFor="">
       Full Name
      </label>
      <input
       onChange={(e) => handleChange(e)}
       type="text"
       name="fullName"
       value={register.fullName}
      />
     </div>

     <div className="profileInputDiv flex45">
      <label className="profileLable" htmlFor="">
       Email Address
      </label>
      <input
       onChange={(e) => handleChange(e)}
       type="email"
       name="email"
       value={register.email}
      />
     </div>

     <div className="profileInputDiv widthFull">
      <label className="profileLable" htmlFor="">
       Address
      </label>
      <input
       onChange={(e) => handleChange(e)}
       type="text"
       name="Address"
       value={register.Address}
      />
     </div>

     <div className="profileInputDiv flex45">
      <label className="profileLable" htmlFor="">
       City
      </label>
      <input
       onChange={(e) => handleChange(e)}
       type="text"
       name="City"
       value={register.City}
      />
     </div>

     <div className="profileInputDiv flex45">
      <label className="profileLable" htmlFor="">
       State/Pincode
      </label>
      <input
       onChange={(e) => handleChange(e)}
       type="text"
       name="State"
       value={register.State}
      />
     </div>

     <div className="profileInputDiv flex45">
      <label className="profileLable" htmlFor="">
       Zip Code
      </label>
      <input
       onChange={(e) => handleChange(e)}
       type="text"
       name="Zipcode"
       value={register.Zipcode}
      />
     </div>

     <div className="profileInputDiv flex45">
      <label className="profileLable" htmlFor="">
       Country
      </label>
      <input
       onChange={(e) => handleChange(e)}
       type="text"
       name="Country"
       value={register.Country}
      />
     </div>

     <div className="display__Flex" style={{ marginTop: "1rem" }}>
      <div className="downloadBtn">Save Profile</div>
      <div className="downloadBtn">Cancel</div>
     </div>
    </fieldset>
   </form>
  </div>
 );
}

export default ProfileForm;
