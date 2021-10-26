import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 80px;
  padding-top: 50px;
  background: #040d21;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 98%;
  max-width: 980px;
  margin: 0 auto;
  & > h2 {
    color: #fff;
    text-align: left;
    padding-bottom: 28px;
  }
  & > p {
    display: block;
    margin-top: 26px;
    color: #fff;
    text-align: justify;
  }
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 0 20px;
    & > h2 {
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
