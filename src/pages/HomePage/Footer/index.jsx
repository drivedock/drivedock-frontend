import React from "react";
import ProductLogo from "../../../assets/logo.png";

function Footer() {
 const navNames = ["Home", "Career", "Features", "About Us"];
 const LoginValues = ["Login", "SignUp"];
 return (
  <footer className="footer" style={{ marginTop: "3rem" }}>
   <div className="container display__Flex alignCenter header ">
    <div className="display__Flex alignCenter">
     <div className="display__Flex flex25">
      <figure className="" style={{ width: "25%" }}>
       <img className="widthFull" src={ProductLogo} alt="Logo" />
      </figure>
      <div>
       <h1 className="product__heading">Drive Dock</h1>
       <span style={{ marginLeft: "1rem", float: "right" }}>Groups</span>
       <span style={{ float: "clear" }}></span>
      </div>
     </div>

     <nav className="flex40 navFlexLing">
      <ul className="display__Flex spaceBetween alignCenter">
       {navNames.map((each, index) => (
        <li className="each_Nav_value" key={index}>
         {each}
        </li>
       ))}
      </ul>
     </nav>
    </div>

    <nav>
     <ul className="display__Flex alignCenter">
      <i className="fa-brands fa-twitter socialMedia"></i>
      <i className="fa-brands fa-youtube socialMedia"></i>
      <i className="fa-brands fa-instagram socialMedia"></i>
     </ul>
    </nav>
   </div>
  </footer>
 );
}

export default Footer;
