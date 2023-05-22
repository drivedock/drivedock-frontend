import React, { useState } from "react";
import "../Profile/profile.css";
import ProfileForm from "./ProfileForm";
import ProfilePic from "../Profile/assets/profile.png";
import { ProfileHeader } from "./ProfileHeader";

function IndetailProfile() {
  let value = ["Personal Details", "Notification", "Privacy", "Payment"];
  const [page, setPage] = useState("Personal Details");
  return (
    <section className="flex flex-col  h-80 p-5 w-full">
      <ProfileHeader />
      <ProfileForm />
    </section>
  );
}

export default IndetailProfile;
