import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 150px 8vw 200px 8vw;
  max-width: 1400px;
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
    padding: 100px 0vw;
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    margin-top: 20px;
    background: #fff;
  }
`;

export const DescriptionTxtContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 45px;
  & > span {
    font-weight: 600;
  }
`;

export const BottomDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    padding-bottom: 6px;
    color: #383838;
    border-bottom: 3px solid #1da1f2;
  }
`;
