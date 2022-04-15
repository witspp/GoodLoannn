import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 436px;
`;

export const Wrapper = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: 236px;
  width: 995px;
  border-radius: 0px;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #363b97;
  font-weight: 600;
  font-size: 32px;
  padding: 20px;
`;
export const PartnerWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Partners = styled.div``;

export const Img = styled.img`
  max-width: 263px;
  @media (max-width: 500px) {
    max-width: 80px;
    font-size: 12px;
    border-radius: 4px;
  }
`;
