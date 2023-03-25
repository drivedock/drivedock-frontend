import React from "react";
import Header from "./Header";
import "../HomePage/HomePage.css";
import Hero from "./Hero";
import SecondHeroSec from "./SecondHeroSec";
import ThirdHeroSec from "./ThirdHeroSec";
import AllCards from "./AllCards";
import Packeges from "./Packeges";
import Footer from "./Footer";

const HomePage = () => {
 return (
  <>
   <Header />
   <Hero />
   <SecondHeroSec />
   <ThirdHeroSec />
   <AllCards />
   <Packeges />
   <Footer />
  </>
 );
};

export default HomePage;
