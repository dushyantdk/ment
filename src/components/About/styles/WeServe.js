import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 150px 8vw;
  max-width: 1000px;
  margin: 0 auto;
  & > h3 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 80px;
    color: #293c57;
    line-height: 45px;
    text-align: center;
    & > b {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 20px;
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const CenterContainer = styled.div`
  align-items: stretch;
  padding-bottom: 110px;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  /* @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    margin-top: 20px;
    background: #fff;
  } */
`;

export const CenterCard = styled.div`
  width: calc(50% - 35px);
  margin: 0 10px;
  background: #f5f5f5;
  border: 2px solid rgba(157, 175, 189, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 108px;
  color: #676767;
  position: relative;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    min-height: 50px;
    margin: 0 5px;
  }
`;

export const LeftArrow = styled.img`
  position: absolute;
  bottom: -96%;
  right: -9px;
  @media (max-width: 768px) {
    right: 0px;
    bottom: -180%;
    width: 150px;
  }
`;

export const RightArrow = styled.img`
  position: absolute;
  bottom: -96%;
  left: -9px;
  @media (max-width: 768px) {
    right: 0px;
    bottom: -180%;
    width: 150px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 30px 20%;
  border: 2px solid rgba(157, 175, 189, 0.5);
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ListItems = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #383838;
    margin: 0;
    padding: 0;
    margin-left: 19px;
  }
  @media (max-width: 768px) {
    & > p {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const Dot = styled.div`
  min-width: 8px;
  min-height: 8px;
  max-width: 8px;
  max-height: 8px;
  border-radius: 50%;
  background-color: #10223a;
`;
