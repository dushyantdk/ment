import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 0;
  padding-bottom: 150px;
  max-width: 1600px;
  margin: 0 auto;
  width: 100vw;
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 98%;
  max-width: 980px;
  margin: 0 auto;
`;

export const SaysContainer = styled.div`
  padding-top: 207px;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  & > img {
    display: block;
    margin-right: 20px;
    width: 50px;
  }
  & > span {
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 62px;
    color: #323232;
  }
  @media (max-width: 768px) {
    & > img {
      display: none;
    }
    & > span {
      font-size: 48px;
      text-align: center;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  cursor: grab;
`;

export const CardHeading = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 130.69%;
  text-align: center;
  color: #323232;
  & > p {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const CardDescription = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: 21px;
  line-height: 98.19%;
  margin-top: 40px;
  text-align: center;
  color: #898989;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
