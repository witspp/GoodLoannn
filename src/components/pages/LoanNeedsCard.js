import React from "react";
import {
  Container,
  Wrap,
  Heading,
  Icons,
  IconsWrap,
  Icon1,
  Image,
  Icon2,
} from "../style/LoanNeedCardStyle";
import icon1 from "../../assets/images/Vector3.png";
import icon2 from "../../assets/images/Vector3.png";
import Icon3 from "../../assets/images/Vector3.png";
import icon4 from "../../assets/images/Vector3.png";

const Section5 = () => {
  return (
    <Container>
      <Wrap>
        <Heading>Few Personal loan Needs</Heading>
        <Icons>
          <IconsWrap>
            <Icon1>
              <Image src={icon1} alt="image" />
            </Icon1>
            <Icon1>
              <Image src={icon2} alt="image" />
            </Icon1>
            <Icon1>
              <Image src={Icon3} alt="image" />
            </Icon1>
            <Icon1>
              <Image src={icon4} alt="image" />
            </Icon1>
          </IconsWrap>
          <IconsWrap>
            <Icon2>Travel</Icon2>
            <Icon2>Education</Icon2>
            <Icon2>wedding</Icon2>
            <Icon2>Electronics</Icon2>
          </IconsWrap>
        </Icons>
        <Icons>
          <IconsWrap>
            <Icon1>
              <Image src={icon1} alt="image" />
            </Icon1>
            <Icon1>
              <Image src={icon2} alt="image" />
            </Icon1>
            <Icon1>
              <Image src={Icon3} alt="image" />
            </Icon1>
            <Icon1>
              <Image src={icon4} alt="image" />
            </Icon1>
          </IconsWrap>
          <IconsWrap>
            <Icon2>Credit card</Icon2>
            <Icon2>Emergency</Icon2>
            <Icon2>
              Medical <br />
              Emergency
            </Icon2>
            <Icon2>
              Home <br />
              Renovation
            </Icon2>
          </IconsWrap>
        </Icons>
      </Wrap>
    </Container>
  );
};

export default Section5;
