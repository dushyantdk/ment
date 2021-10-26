import styled from '@emotion/styled';
import QuoteImg from '../../../assests/images/AboutUs/about-quote-bottom.svg';

export const Container = styled.div`
  padding: 0;
  background: #f7f7f7;
  width: 100vw;
  padding: 150px 0;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  width: calc(100% - 100px);
  padding: 0px 50px 0px 50px;
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
    & > b {
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 10px 0px 10px;
    width: calc(100% - 20px);
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const TopContainer = styled.div`
  width: 98%;
  max-width: 980px;
  margin: 0 auto;
  & > p {
    margin: 0 auto;
    max-width: 980px;
    border-top: 5px solid #383838;
    border-bottom: 5px solid #383838;
    padding: 65px 0;
    position: relative;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 43px;
    color: #383838;
    & > span {
      font-weight: 700;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -28px;
      display: block;
      width: 100%;
      height: 37px;
      background: #f7f7f7 center bottom/auto url(${QuoteImg}) no-repeat;
    }
  }
`;

export const TopWrapper = styled.div`
  & > a {
    align-items: center;
    margin-top: 70px;
    justify-content: flex-start;
    display: flex;
    text-decoration: none;
    & > img {
      display: block;
      flex-shrink: 0;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ReviewText = styled.div`
 
  & > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 26px;
    color: #383838;
    margin: 0;
  }
  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #383838;
    margin: 0;
  }
`;
