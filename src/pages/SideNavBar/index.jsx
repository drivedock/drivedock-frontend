import React from "react";
import "../SideNavBar/SideNavBar.css";
import LogoImg from "../../assets/logo.png";
import MenuImg from "../SideNavBar/assets/menu.png";
import RibbonImg from "../SideNavBar/assets/ribbon.png";
import NotePadImg from "../SideNavBar/assets/notepad.png";
import ChatImg from "../SideNavBar/assets/chat.png";
import TodoImg from "../SideNavBar/assets/todo.png";
import ProfileImg from "../SideNavBar/assets/user.png";
import SettingImg from "../SideNavBar/assets/settings.png";
import SideEndLogoImg from "../SideNavBar/assets/sideEndLogo.png";

function SideNavBar() {
 let sideNavBarArray = [
  {
   name: "Dashboard",
   image: MenuImg,
  },
  {
   name: "Cource",
   image: RibbonImg,
  },
  {
   name: "Resources",
   image: NotePadImg,
  },
  {
   name: "Chat",
   image: ChatImg,
  },
  {
   name: "Schedule",
   image: TodoImg,
  },
  {
   name: "Profile",
   image: ProfileImg,
  },
  {
   name: "Setting",
   image: SettingImg,
  },
 ];
 return (
  <nav className="flex23 sideNavbar">
   <div>
    <figure style={{ width: "20%", margin: "auto" }}>
     <img className="widthFull" src={LogoImg} alt="" />
    </figure>
    <div style={{ width: "63.5%", margin: "auto", marginTop: "0.5rem" }}>
     <h1 className="product__heading">Drive Dock</h1>
     <span style={{ marginLeft: "1rem", float: "right" }}>Groups</span>
     <span style={{ float: "clear" }}></span>
    </div>
   </div>
   <ul className="SideUl">
    {sideNavBarArray.map((each) => (
     <li className="display__Flex eachElement">
      <img style={{ width: "1.4rem" }} src={each.image} alt="" />
      <p className="EachElementPara">{each.name}</p>
     </li>
    ))}
   </ul>

   <figure style={{ width: "80%", margin: "auto", marginTop: "3rem" }}>
    <img className="widthFull" src={SideEndLogoImg} alt="" />
   </figure>
  </nav>
 );
}

export default SideNavBar;
