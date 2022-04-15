import React from "react";
import {
  Container,
  Wrap,
  Back,
//   BackImage,
  Heading,
  Description,
  Policy,
  ImageWrap,
  Image,
} from "../../style/PrivacyStyl/PrivacyStyl";
import PolicyImg from "../../../assets/images/PrivacyLogo.png";
// import Backimg from "../../images/Backimg.png";

// import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Container>
      <Back>
        {/* <BackImage src={Backimg} /> */}
        {/* <Link
          to="/"
          style={{ textDecoration: "none", color: "#464040", fontSize: "18px" }}
        >
          Back to Home
        </Link> */}
      </Back>
      <Wrap>
        <Policy>
          <Heading>Privacy Policy</Heading>
          <Description>
            <b>
              This Privacy Policy describes how Goodloans and its affiliates
              (collectively, the ‘Goodloan’ or ‘we’ or ‘us’ or ‘our’) collect,
              use and disclose information about you and what choices you have
              with respect to your information.
            </b>
            <br />
            <br />
            Your privacy is really important to us, so whether you’re new to
            Goodlaon or a long-time user, please take the time to get to know
            our practices. We have made some updates to the format of this
            Privacy Policy to help you more easily find information. Our privacy
            practices have remained the same. Our previous privacy policy is
            available here. We have kept this simple to make it easy to
            understand, but if you are not familiar with any terms in this
            Privacy Policy, please reach out to us.
          </Description>
        </Policy>
        <ImageWrap>
          <Image src={PolicyImg} />
        </ImageWrap>
      </Wrap>
    </Container>
  );
};

export default Privacy;