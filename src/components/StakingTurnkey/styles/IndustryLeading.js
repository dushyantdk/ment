import styled from '@emotion/styled';

export const Container = styled.div`
 
`;

export const Wrapper = styled.div`
  & > h2 {
    color: #fff;
    text-align: center;
    font-size: 70px;
    line-height: 84px;
    font-weight: 300;
    & > span {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    & > h2 {
      text-align: center;
      font-size: 40px;
      line-height: 60px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom: 1px solid #293944;
  text-align: center;
  padding: 25px 0;
  &:nth-of-type(2) {
    border: none;
    margin-top: 20px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 33%;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const CardIcon = styled.img``;

export const CardHeading = styled.h4`
  padding: 36px 0 16px;
  color: #fff;
 /* font-weight: 700;
  font-size: 36px; */
  margin: 0;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CardDescription = styled.h5`
/*  font-size: 16px;
  font-weight: 400;
  line-height: 24px; */
  padding: 0 40px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DividerDiv = styled.div`
  height: 251px;
  margin: 0 50px;
  width: 1px;
  background-color: #fff;
  opacity: 0.1;
  @media (max-width: 1000px) {
    display: none;
  }
`;
