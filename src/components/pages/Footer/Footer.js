 
import React from "react";
import {
  Container,
  FooterWrapper,
  Wrap,
  FooterLogo,
  Wrapper1,
  Heading,
  About,
} from "../../style/Footer/FooterStyl";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterLogo>Good loans</FooterLogo>
        <Wrap>
          <Wrapper1>
            <Heading>Company</Heading>
            <About>About</About>
            <About>Testimonials</About>

            {/* <About> */}
            {/* <Link
              to="/privacy"
              style={{
                textDecoration: "none",
                color: "#464040",
              }}
            >
              Privacy Policy
            </Link> */}
            {/* </About> */}
          </Wrapper1>
          <Wrapper1>
            <Heading>Region</Heading>
            <About>India</About>
            <About />
            <About />
          </Wrapper1>
          <Wrapper1>
            <Heading>Help</Heading>
            <About>Help Center </About>
            <About>Contact </About>
            <About>How it works</About>
          </Wrapper1>
        </Wrap>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;