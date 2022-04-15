import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* height: 1080px; */
  margin: 0 auto;
  max-width: 1440px;
  margin-bottom: 104px;
  
`;

export const Wrap = styled.div`
  height: 813px;
  width: 1282px;
  border-radius: 8px;
  background: #f3fafb;
`;
export const Heading = styled.div`
  color: #464040;
  line-height: 127px;
  font-size: 32px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 144px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 104px;
  text-transform: capitalize;
  color: #464040;
`;
export const Icons = styled.div``;

export const IconsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  height: 135px;
  border-radius: 25px;
  grid-column-gap: 20px;
  justify-items: center;
`;
export const Icon1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105px;
  width: 95px;
  border-radius: 30px;
  background-color: #ffffff; ;
`;
export const Image = styled.img`
  height: 40px;
  width: 37px;
`;
export const Icon2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
