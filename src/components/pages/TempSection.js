import React from "react";
import {
  Container,
  Wrapper,
  Heading,
  AboutUs,
  Paging,
  Arrow,
  Image,
  CardWrap,
  Card1,
} from "../style/TempSecStyle";
import Templates from "./Templates";

import arrow from "../../assets/images/arrow.png";

const ReviewSection = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <AboutUs>What our customer says about us?</AboutUs>
          <Paging>
            <Arrow>
              <Image src={arrow} alt="arrow" />
            </Arrow>
          </Paging>
        </Heading>
        <CardWrap>
          <Card1>
            <Templates />
            <Templates />
            <Templates />
          </Card1>
        </CardWrap>
      </Wrapper>
    </Container>
  );
};

export default ReviewSection;