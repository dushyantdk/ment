import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  min-height: 500px;
  height: 52vh;
  padding-top: 130px;
  background: #040d21;
  @media (max-width: 768px) {
    height: 25vh;
    min-height: 350px;
    padding-top: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 10vw;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5vw;
    width: 90%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 80%;
  & > img {
    width: 100px;
    margin-bottom: 20px;
  }
  & > h1 {
    font-size: 42px;
    color: #fff;
    margin-top: 14px;
    margin: 0;
    font-weight: 400;
  }
  & > p {
    font-size: 75px;
    color: #aeb9d8;
    letter-spacing: 5px;
    line-height: 80px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  & > span {
    max-width: 470px;
    font-size: 18px;
    line-height: 141%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 90%;
    justify-content: center;
    & > img {
      width: 60px;
      margin-bottom: 10px;
    }
    & > h1 {
      font-size: 32px;
      margin: 0;
    }
    & > p {
      font-size: 52px;
      line-height: 50px;
      letter-spacing: 5px;
    }
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  & > img {
    width: 80%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
