import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 80px;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const Wrapper = styled.div`
  & > h1 {
    color: #fff;
    text-align: left;
    padding-top:25px;
  }
  & > p {
    display: block;
    margin-top: 26px;
    color: #fff;
    text-align: justify;
  }
  @media (max-width: 768px) {
    & > h1 {
      text-align: center;
     
    margin-bottom: 50px;
   
    }
    & > p {
      text-align: center;
      margin-top: -35px;
margin-bottom: 55px;
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
  color: #fff;
  letter-spacing: -0.318182px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BottomText = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-end;
  & > span {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
