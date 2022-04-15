import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;
export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-self: flex-start;
  padding: 30px;
  height: 255px;
  width: 1440px;
  grid-gap: 10px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterLogo = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 45px;
  display: grid;
  align-self: center;
  text-transform: uppercase;
  color: #464040;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 18px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper1 = styled.div`
  gap: 100px;
`;
export const Heading = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 60px;
  color: #464040;
`;
export const About = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  color: #464040;
`;
export const Test = styled.div``;
export const Pri = styled.div``;