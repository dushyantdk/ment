import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 80px;
  padding-top: 50px;
  background: #fff;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const Wrapper = styled.div`
  & > h1 {
    color: #383838;
    text-align: left;
  
    & > span {
      font-weight: bold;
    }
  }
  & > p {
    display: block;
   /* font-size: 20px;
    line-height: 29px; */
    margin-top: 26px;
    color: #63636e;
    text-align: justify;
  }
  @media (max-width: 768px) {
   /* width: calc(100% - 40px);*/
    padding: 0 20px;
    & > h1 {
      text-align: center;
     
    }
    & > p {
      text-align: center;
     
    }
  }
`;

export const StatsContainer = styled.div``;

export const StatsWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Stats = styled.div`
  text-align: center;
  margin-right: 60px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const TopText = styled.div`
  color: #454545;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.318182px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BottomText = styled.div`
  font-weight: bold;
  font-size: 70px;
  line-height: 75px;
  color: #454545;
  display: flex;
  align-items: flex-end;
  & > span {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
