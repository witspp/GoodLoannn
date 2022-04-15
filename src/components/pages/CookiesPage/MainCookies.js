
   
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Cookies from "../CookiesPage/index";
import CookiesDetails from "./CookiesTexts";

const CookiesPolicy = () => {
  return (
    <>
      <Navbar />
      <Cookies />
      <CookiesDetails />
      <Footer />
    </>
  );
};

export default CookiesPolicy;