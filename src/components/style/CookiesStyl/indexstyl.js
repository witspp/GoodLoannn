import styled from "styled-components";
export const Container = styled.div`
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f3fafb;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    
  }
`;
export const Policy = styled.div``;
export const Back = styled.div`
  padding-bottom: 40px;
`;
export const BackImage = styled.img`
  height: 14px;
  width: 16px;
`;
export const Heading = styled.div`
  /* height: 54px; */
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
  padding: 10px;
`;
export const Desc = styled.div`
font-family:'Open Sans';
  max-width: 685px;
  padding: 10px;
`;
export const ImageWrap = styled.div``;
export const Image = styled.img``;