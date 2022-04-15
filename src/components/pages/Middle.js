import React from "react";
import {
  Wrap,
  Main,
  Middle2,
  Div1,
  Div2,
  Button,
  Assistance,
  InputAssistance,
  Wrap2,
} from "../style/MiddleStyle";
import image from "../../assets/images/full.png";
import phone from "../../assets/images/phone.png";

const Middle = () => {
  return (
    <>
      <Wrap>
        <Main>
          <Div1>Loan upto 1,00,000 at </Div1>
          <Div2>your fingertips</Div2>
          <br></br>
          <Button>Borrow Now</Button>
        </Main>
        <Middle2 src={image} alt="load"></Middle2>
      </Wrap>
      <Wrap2>
        <Assistance src={phone} alt="load"></Assistance>
        <InputAssistance>
          <div className="p">Need Assisitance?</div>
          <div className="pp">Request a call back</div>
          <input placeholder="Enter your name " className="input"></input>
          <input placeholder="Your Phone Number " className="input"></input>
        </InputAssistance>
      </Wrap2>
    </>
  );
};

export default Middle;
