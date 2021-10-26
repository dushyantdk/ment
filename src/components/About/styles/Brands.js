import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0;
  background: #ffffff;
  width: 100vw;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
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
    padding: 0px 0px 100px 0px;
    width: 100%;
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const Grid = styled.div`
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 80px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background: #f5f5f5;
  display: flex;
  padding: 0 50px;
  min-height: 175px;
  align-items: center;
  & > img {
    min-width: 40px;
    max-width: 40px;
    margin-right: 26px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    & > h2 {
      color: #383838;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 135%;
      margin: 0;
      padding: 0;
    }
    & > p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 135%;
      color: #383838;
      margin: 0;
      padding: 0;
    }
  }
`;
