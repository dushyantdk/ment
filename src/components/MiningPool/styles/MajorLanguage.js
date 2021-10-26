import styled from '@emotion/styled';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 8vw 20px 8vw;
  max-width: 980px;
  width: calc(100% - 16vw);
  margin: 0 auto;
  & > .exchange-slider {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 0px 5vw 20px 5vw;
    width: calc(100% - 10vw);
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 40px;
  position: relative;
  background:#202d3d;
  border-radius: 5px;
  box-sizing: border-box;
  & > img {
    width: 40%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    & > img {
      width: 100%;
      margin-bottom: 50px;
    }
  }
`;

export const CardDescription = styled.div`
  max-width: 396px;
`;

export const CardHeading = styled.div`
  font-style: normal;
  margin-bottom: 30px;
  color: #fff;
`;

export const CardSubText = styled.div`
  font-style: normal;
  color: #d1d3d4;
`;
