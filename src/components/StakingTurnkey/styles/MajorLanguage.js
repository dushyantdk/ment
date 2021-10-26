import styled from '@emotion/styled';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 40px;
  position: relative;
  background: #212e3e;
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
  font-weight: 700;
  font-size: 28px;
  line-height: 130%;
  margin-bottom: 30px;
  color: #fff;
`;

export const CardSubText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #d1d3d4;
`;
