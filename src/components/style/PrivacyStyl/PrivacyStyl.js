import styled from "styled-components";
export const Container = styled.div`
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 500px) {
    max-width: 500px;
    /* flex-direction: column-reverse; */
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    /* flex-direction: column-reverse; */
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
export const Link = styled.a`
  text-decoration: none;
  color: #0c0c0c;
`;

export const Heading = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    font-size: 12px;
    /* flex-direction: column-reverse; */
  }
`;
export const Description = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 350;
font-size: 20px;
line-height: 24px;
  max-width: 955px;
`;
export const ImageWrap = styled.div``;
export const Image = styled.img``;