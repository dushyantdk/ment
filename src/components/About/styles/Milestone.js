import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0 150px 0;
  max-width: 1200px;
  margin: 0 auto;
  & > p {
    font-size: 16px;
    color: #2c89ca;
    line-height: 22px;
    margin: 0;
  }
  & > h3 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 70px;
    color: #293c57;
    line-height: 45px;
    text-align: center;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding: 50px 0 50px 0vw;
    & > h3 {
      font-size: 28px;
      line-height: 1.2;
    }
  }
`;

export const ListContainer = styled.ol`
  background: #fff;
  padding: 40px 30px;
  margin-bottom: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  & > li {
    display: flex;
    & > span {
      line-height: 20px;
      font-size: 16px;
      display: inline-block;
      min-width: 70px;
      position: relative;
      margin-bottom: 20px;
      color: #293c57;
      font-weight: bold;
      & > b {
        display: inline-block;
        width: 4px;
        height: 4px;
        background: #293c57;
        transform: translateY(-50%);
        margin: 0 5px;
      }
    }
    & > p {
      display: inline-block;
      line-height: 20px;
      font-size: 16px;
      flex: 1;
      margin: 0;
      margin-bottom: 20px;
      color: #293c57;
    }
  }
  @media (max-width: 1200px) {
    padding: 10px;
    & > li {
      & > span {
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 10px;
      }
      & > p {
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 10px;
      }
    }
  }
`;

export const SmallMilestoneContainer = styled.div`
  display: flex;
  position: relative;
  width: 95%;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const SmallMilestoneWrapper = styled.div`
  padding: 0 20px;
  float: left;
  min-width: calc(100% - 200px);
  max-width: calc(100% - 200px);
  flex: 1;
  @media (max-width: 1200px) {
    min-width: calc(100% - 20px);
    max-width: calc(100% - 20px);
    padding: 0;
  }
`;

export const SmallLine = styled.div`
  width: 2px;
  padding-top: 20px;
  position: relative;
  left: 66px;
  z-index: 0;
  height: 100%;
  top: 0;
  margin: 0;
  float: left;
  background: #38aafc;
  @media (max-width: 1200px) {
    left: 47px;
  }
`;

export const SmallTxtContainer = styled.div`
  display: flex;
  & > h4 {
    font-size: 20px;
    font-weight: bold;
    line-height: 10px;
    float: left;
    margin-right: 0px;
    margin-top: 30px;
    width: 60px;
  }
  & > div {
    height: 10px;
    margin-top: 30px;
    width: 10px;
    margin-right: 30px;
    float: left;
    background: #38aafc;
  }
  @media (max-width: 1200px) {
    & > h4 {
      font-size: 14px;
      margin-right: 0px;
    }
    & > div {
      margin-right: 10px;
    }
  }
`;
