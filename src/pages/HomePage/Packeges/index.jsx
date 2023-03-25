import React from "react";
import AllSmallCards from "./AllSmallCards";

function Packeges() {
 return (
  <section className="container" style={{ marginTop: "5rem" }}>
   {/* <div style={{ width: "50%", margin: "auto" }}>
    <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "700" }}>
     International package tracking
    </h2>
    <p style={{ textAlign: "center", marginTop: "0.5rem", lineHeight: "1.5" }}>
     Regardless of the online store or the market you have purchased, you can
     always trace the full path of the order with our parcel tracking service
    </p>
   </div> */}
   <AllSmallCards />
  </section>
 );
}

export default Packeges;
