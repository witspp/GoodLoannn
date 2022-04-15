import React from "react";
import {
  Container,
  Wrap,
  Back,
//   BackImage,
  Heading,
  Desc,
  Policy,
  ImageWrap,
  Image,
} from "../../style/CookiesStyl/indexstyl";
import CookiesImg from "../../../assets/images/Cookiees.png";
// import Backimg from "../../images/Backimg.png";
// import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <Container>
      <Back>
        {/* <BackImage src={Backimg} /> */}
        {/* <Link
          to="/"
          style={{ paddingLeft: 13, textDecoration: "none", color: "#464040" }}
        >
          Back to Home
        </Link> */}
      </Back>
      <Wrap>
        <Policy>
          <Heading>Cookie Policy</Heading>
          <Desc>
            Our cookie policy explains our principles when it comes to the
            collection, processing, and storage of your information. This policy
            specifically explains how we, our partners, and users of our
            services deploy cookies, as well as the options you have to control
            them.
          </Desc>
        </Policy>
        <ImageWrap>
          <Image src={CookiesImg} />
        </ImageWrap>
      </Wrap>
    </Container>
  );
};

export default Cookies;