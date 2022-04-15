
   
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Privacy from "../PrivacyPage/Privacy";
import PrivacyDetails from "./PrivacyTexts";
const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Privacy />
      <PrivacyDetails />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;