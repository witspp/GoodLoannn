import React, { useState } from "react";

import {
  Wrapper,
  LoanWrapper,
  Amount,
  Heading,
  Box,
  Line,
  Text1,
  BottomText,
  ApplyButton,
  Div,
  Value1,
  Wrap1,
  EmiInterest,
  EmiInterest1,
  AmountSlider,
  Styledbtn,
} from "../style/CalcStyle";

import { Slider } from "@mui/material";

const Calculator = () => {
  const [value, setValue] = useState(30000);
  const [selectedNumber, setSelectedNumber] = useState(6);
  const [percentage, setPercentage] = useState(12);
  const [EmiValue, setEmiValue] = useState(340);

  const chooseMonth = (e) => {
    setSelectedNumber(e.target.value === "" ? "" : Number(e.target.value));
    calculateEMI();
  };

  // const handleEmi = () => {
  //   setEmiValue(value);
  // };

  const calculateEMI = () => {
    setEmiValue(value);
    // setEmiValue();
  };

  const handleSliderChange = (e, updatedValue) => {
    setValue(updatedValue);
    calculateEMI();
  };
  const handlePercentChange = (e, percentage) => {
    setPercentage(percentage);
    calculateEMI();
  };
  const Interst = value /parseInt(10);

  return (
    <Wrapper>
      <Heading>Loan EMI calculator</Heading>
      <LoanWrapper>
        <Amount>Loan Amount</Amount>
        <Slider
          defaultValue={value}
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          // onClick={handleSliderChange}
          size="small"
          aria-label="Small"
          step={10000}
          min={10000}
          max={100000}
          style={{ width: 400, height: 10, margin: 20, color: "white" }}
        />
        <Box>{value}</Box>
      </LoanWrapper>

      <LoanWrapper>
        <Amount>Loan tenure</Amount>

        <AmountSlider>
          <Styledbtn onClick={chooseMonth} value="3">
            3 Months
          </Styledbtn>
          <Styledbtn onClick={chooseMonth} value="6">
            6 Months
          </Styledbtn>
          <Styledbtn onClick={chooseMonth} value="9">
            9 Months
          </Styledbtn>
          <Styledbtn onClick={chooseMonth} value="12">
            12 Months
          </Styledbtn>
        </AmountSlider>
        <Box>{selectedNumber} months</Box>
      </LoanWrapper>
      <LoanWrapper>
        <Amount>Rate of interest</Amount>
        <Slider
          size="small"
          defaultValue={percentage}
          value={typeof percentage === "number" ? percentage : 0}
          onChange={handlePercentChange}
          aria-label="Small"
          step={1}
          min={10}
          max={36}
          style={{
            width: 400,
            height: 10,
            margin: 20,
            color: "white",
          }}
        />
        <Box style={{ marginRight: "6px", marginLeft: "27px" }}>
          {percentage}%
        </Box>
      </LoanWrapper>
      <Line />
      <BottomText>
        <EmiInterest1>
          <Wrap1>
            <Text1>EMI</Text1>
            <Value1>Rs. {EmiValue}</Value1>
          </Wrap1>

          <Wrap1>
            <Text1>Interest amount</Text1>
            <Value1>{value}</Value1>
          </Wrap1>
        </EmiInterest1>
        <EmiInterest>
          <Wrap1>
            <Text1>Principal amount</Text1>
            <Value1>{value}</Value1>
          </Wrap1>

          <Wrap1>
            <Text1>Total amount</Text1>
            <Value1>{value + value}</Value1>
          </Wrap1>
        </EmiInterest>
      </BottomText>

      <Div>
        <ApplyButton>Apply for personal loan</ApplyButton>
      </Div>
    </Wrapper>
  );
};

export default Calculator;
