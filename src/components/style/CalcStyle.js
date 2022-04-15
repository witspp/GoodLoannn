import styled from "styled-components";

export const Wrapper = styled.div``;
export const LoanWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 112px;
`;
export const Amount = styled.div`
  font-size: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #ffffff;
  align-self: center;
`;

export const Heading = styled.div`
  color: #ffffff;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    font-size: 16px;
  }
  justify-content: space-around;
  line-height: 159px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  text-transform: capitalize;
  color: #ffffff;
`;

export const Box = styled.button`
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 16px;
  padding-left: 82px;
  padding-right: 82px;
  background: linear-gradient(180deg, #363b97 0%, #454bb6 79.34%, #363b97 100%);
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
`;
export const Box2 = styled.div`
  background-color: white;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: white;
  width: 440px;
  margin-right: -4px;
`;

export const Line = styled.hr`
  max-width: 960px;
  border: 1.3px solid white;
`;

export const Text1 = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #83d1d8;
`;
export const BottomText = styled.div`
  display: flex;
  justify-content: center;
  gap: 81px;
`;
export const ApplyButton = styled.button`
  width: 291px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #eae9f2;
  border-radius: 10px;
`;
export const Div = styled.div`
  display: flex;
  margin-top: 61px;
  justify-content: space-evenly;
`;

export const Value1 = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
`;
export const Wrap1 = styled.div``;
export const EmiInterest1 = styled.div`
  display: flex;
  gap: 139px;
`;
export const EmiInterest = styled.div`
  display: flex;
  gap: 80px;
`;

export const AmountSlider = styled.div`
  min-height: 53px;
  width: 460px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  @media (max-width: 500px) {
    max-width: 163px;
    font-size: 12px;
    border-radius: 4px;
  }
`;
export const SliderValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  width: 225px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: 1px solid #ffffff;
  color: #ffffff;
  @media (max-width: 500px) {
    max-width: 92px;
    border-radius: 4px;
    font-size: 12px;
  }
`;
export const Styledbtn = styled.button`
  max-width: 100px;
  height: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #4046ac;
  background: #fafafa;
  border: none;
  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05);
    background: #83d1d8;
    border-radius: 8px;
  }
  &:active {
    background: #83d1d8;
    border-radius: 8px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
