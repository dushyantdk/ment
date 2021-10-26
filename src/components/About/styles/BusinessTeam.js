import styled from '@emotion/styled';
import BgImg from '../../../assets/img/global-3faa874ffa.png';

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0vw;
  max-width: 1800px;
  margin: 0 auto;
  & > h3 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 80px;
    color: #293c57;
    line-height: 45px;
    text-align: center;
    margin-bottom: 50px;
    & > b {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 0 0 100px 0px;
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const GlobContainer = styled.div`
  height: 612px;
  width: 100%;
  background-size: 1763px 583px;
  background-image: url(${BgImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  margin-top: 50px;
  @media (max-width: 1200px) {
    background: none;
    margin-top: 10px;
    height: auto;
  }
`;

export const GlobalWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    & > li {
      float: left;
      font-size: 16px;
      color: #293c57;
      line-height: 24px;
      &:nth-of-type(1) {
        width: 27%;
      }
      &:nth-of-type(2) {
        width: 26%;
      }
      &:nth-of-type(3) {
        width: 24%;
      }
      &:nth-of-type(4) {
        width: 23%;
        white-space: nowrap;
      }
      & > span {
        padding: 0 10px;
        display: inline-block;
        height: 30px;
        text-align: center;
        color: #fff;
        line-height: 30px;
        margin-right: 5px;
        background: #040d21;
      }
    }
  }
  & > img {
    display: none;
  }
  @media (max-width: 1200px) {
    min-width: unset;
    & > img {
      display: initial;
      width: 100vw;
      height: auto;
      margin-top: 20px;
    }
    & > ul {
      flex-direction: column;
      margin-left: 20px;
      align-items: center;
      & > li {
        margin: 10px 0;
        font-size: 16px;
        display: flex;
        justify-content: center;
        &:nth-of-type(1) {
          width: 100%;
        }
        &:nth-of-type(2) {
          width: 100%;
        }
        &:nth-of-type(3) {
          width: 100%;
        }
        &:nth-of-type(4) {
          width: 100%;
        }
      }
    }
  }
`;

export const StatsContainer = styled.div`
  padding: 20px 0 0px 0px;
  position: relative;
  bottom: 0;
  background: #fff;
  width: 95%;
  display: grid;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  grid-template-columns: repeat(3, 1fr);
  & > div {
    width: 100%;
    display: flex;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
    padding: 40px 0 1px 0px;
    & > div {
      border-bottom: 1px solid #d7dee8;
      padding-left: 20px;
      width: calc(100% - 20px);
    }
  }
`;

export const StatsInfo = styled.div`
  float: left;
  border-left: 1px solid #d7dee8;
  padding-left: 10px;
  height: 100%;
  width: 50%;
  & > h3 {
    font-size: 32px;
    color: #293c57;
    font-weight: 600;
    line-height: 45px;
    margin: 0;
    & > span {
      font-size: 22px;
      color: #293c57;
      line-height: 30px;
      position: relative;
      top: -12px;
    }
  }
  & > p {
    margin-top: 10px;
    font-size: 16px;
    color: #7f8fa4;
  }
  @media (max-width: 1200px) {
    & > h3 {
      font-size: 22px;
      & > span {
        font-size: 18px;
        top: -2px;
        left: -5px;
      }
    }
  }
`;
