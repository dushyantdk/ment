import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > .exchange-slider {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 40px;
  position: relative;
  background: #07132d;
  border-radius: 5px;
  box-sizing: border-box;
  & > img {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
    & > img {
      width: 100%;
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
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const CardSubText = styled.div`
  font-style: normal;
  color: #d1d3d4;
`;
