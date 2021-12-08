import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0;
  background: #ffffff;
  width: 100vw;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  width: calc(100% - 100px);
  padding: 150px 50px 150px 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h3 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 80px;
    color: #293c57;
    line-height: 45px;
    text-align: center;
    padding-bottom: 50px;
    & > b {
      font-weight: bold;
    }
  }
  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 80px;
    color: #383838;
  }
  @media (max-width: 768px) {
    padding: 50px 10px 50px 10px;
    width: calc(100% - 20px);
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const ReviewContainer = styled.div`
  width: 98%;
  max-width: 980px;
  margin: 0 auto;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 851px;
  margin: 0 auto;
  margin-top: 80px;
  &:nth-of-type(1) {
    margin: 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    &:nth-of-type(even) {
      flex-direction: column-reverse;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  flex-shrink: 0;
  &:nth-of-type(even) {
    margin-left: 20px;
  }
  & > img {
    display: block;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    &:nth-of-type(even) {
      margin-top: 20px;
    }
  }
`;

export const RightContainer = styled.div`
  padding: 20px 46px;
  padding-right: 50px;
  background: #0a0825;
  border-radius: 20px;
  box-sizing: border-box;
`;

export const ThirdDiv = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130.7%;
  color: #fff;
`;
