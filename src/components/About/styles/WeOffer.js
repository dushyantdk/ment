import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0;
  background: #ffffff;
  width: 100vw;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: calc(100% - 100px);
  padding: 0px 50px 150px 50px;
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
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 0px 50px 0px;
    width: 100%;
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background: #fff;
  width: calc(23% - 90px / 3);
  margin: 15px;
  display: flex;
  padding: 20px 46px 20px 40px;
  min-height: 175px;
  align-items: center;
  box-shadow: 0 2px 20px rgba(165, 165, 165, 0.3);
  border-radius: 5px;
  & > img {
    min-width: 40px;
    max-width: 40px;
    margin-right: 26px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    & > h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 19px;
      color: #383838;
      margin: 0;
      padding: 0;
      margin-bottom: 20px;
    }
    & > p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #637786;
      margin: 0;
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    width: calc(70% - 90px / 3);
  }
`;
