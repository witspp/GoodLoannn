import React from "react";
import {
  Container,
  Main,
  Name,
  Title,
  Disc,
  Image,
} from "../style/TemplateStyles";
import Star from "../../assets/images/Star 1.png";

const Templates = (props) => (
  <Container>
    <Main>
      <Name>Lateef Mushtaq</Name>
      <Title>Title here</Title>
      <Disc>
        Nisi vivamus neque elementum, at pharetra. <br />
        Cras gravida congue in tincidunt neque, <br />
        ipsum eiiAgestas. Duis risus ipsum dis <br />
        commodo. Enim euismod velit amet volutpat <br />
        egestas urna in eget pellentesque.
      </Disc>
      <Image src={Star} alt="star" />
      <Image src={Star} alt="star" />
      <Image src={Star} alt="star" />
      <Image src={Star} alt="star" />
    </Main>
    
  </Container>
);
export default Templates;