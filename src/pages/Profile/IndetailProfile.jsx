import React, { useState } from "react";
import "../Profile/profile.css";
import ProfileForm from "./ProfileForm";
import ProfilePic from "../Profile/assets/profile.png";

function IndetailProfile() {
 let value = ["Personal Details", "Notification", "Privacy", "Payment"];
 const [page, setPage] = useState("Personal Details");
 return (
  <section className="indetailProfile flex75">
   <div className="display__Flex spaceBetween alignCenter">
    <div className="flex30 display__Flex alignCenter indetailTop">
     <h3 style={{ fontSize: "1.5rem" }}>Profile</h3>
     <i
      class="fa-solid fa-magnifying-glass searchIcon"
      style={{ marginLeft: "1rem", marginTop: "-0.5rem" }}
     ></i>
    </div>

    <div className="flex23 display__Flex alignCenter">
     <i class="fa-regular fa-bell"></i>
     <figure style={{ width: "25%", marginTop: "1rem" }}>
      <img
       style={{ marginTop: "-1rem" }}
       className="widthFull"
       src={ProfilePic}
       alt="Profile Pic"
      />
     </figure>
     <p>Martin Nel </p>
     <i
      class="fa-solid fa-sort-down"
      style={{ display: "inline", marginLeft: "0.4rem" }}
     ></i>
    </div>
   </div>

   <div className="ProfileSetting">
    <h2 style={{ fontSize: "2rem", marginTop: "1rem" }}>Profile Setting</h2>
    <ul className="display__Flex" style={{ marginTop: "1.5rem" }}>
     {value.map((each) => (
      <li
       onClick={() => setPage(each)}
       className={
        page == each ? "eachElemLiHighLight eachElemLi" : "eachElemLi"
       }
      >
       {each}
      </li>
     ))}
    </ul>

    <div style={{ minHeight: "73vh", padding: "0rem 2rem" }}>
     {page == "Personal Details" ? <ProfileForm /> : null}
    </div>
   </div>
  </section>
 );
}

export default IndetailProfile;
