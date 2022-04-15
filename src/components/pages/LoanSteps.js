import React from "react";
import {
  Main,RingImg,
  PhoneImage,
  Text,
  Text1,
  Text2,
  Text3,
  Text4,
  Txt,
  CoinImg,Button
} from "../style/LoanStepsStyles";
// import PhoneImg from "../../assets/images/PhoneImage.png";
import PhoneImg from '../../assets/images/Group 1900.png'
import RingImage from '../../assets/images/Vector (5).png'

import coin from "../../assets/images/rupee 1.png";

const Icons = () => {
  return (
    <Main>
      {/* <PhoneImage src={PhoneImg} alt="load" /> */}
      <PhoneImage src={PhoneImg} alt="load" />
      <RingImg src ={RingImage} alt='load'/>
      <Text>
        <Text1>get </Text1>
        <Text2>fastest loan online </Text2>
        <Text3>in 4 steps</Text3>
        <Txt>
          <CoinImg src={coin} alt="load" />
          <Text4>Paperless Application</Text4>
        </Txt>
        <Txt>
          <CoinImg src={coin} alt="load" />
          <Text4>upload documents to complete the process</Text4>
        </Txt>
        <Txt>
          <CoinImg src={coin} alt="load" />
          <Text4>Check Loan eligibiity</Text4>
        </Txt>
        <Txt>
          <CoinImg src={coin} alt="load" />
          <Text4>voila! your loan is approved!</Text4>
        </Txt>
        <Button>Apply</Button>
      </Text>
    </Main>
  );
};

export default Icons;
