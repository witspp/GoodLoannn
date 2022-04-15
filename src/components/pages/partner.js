import React from "react";
import {
  Container,
  Wrapper,
  Heading,
  PartnerWrap,
  Partners,
  Img,
} from "../style/partnerStyl";
import niraimg from "../../assets/images/Nira.png";
import lifeimg from "../../assets/images/MyShubh.png";
import fullertonimg from "../../assets/images/Fullerton.png";

const Partner = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our Partners</Heading>
        <PartnerWrap>
          <Partners>
            <Img src={niraimg} alt="pager" />
          </Partners>
          <Partners>
            <Img src={lifeimg} alt="pager" />
          </Partners>
          <Partners>
            <Img src={fullertonimg} alt="pager" />
          </Partners>
        </PartnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Partner;