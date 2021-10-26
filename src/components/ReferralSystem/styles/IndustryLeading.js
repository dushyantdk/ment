import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 80px;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 0px;
  }
`;

export const Wrapper = styled.div`
  & > h2 {
    color: #fff;
    text-align: center;
  }
  @media (max-width: 768px) {
    & > h2 {
      text-align: center;
      margin: 0;
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
    margin: 40px 0;
  }
`;

export const CardIcon = styled.img``;

export const CardHeading = styled.h4`
  padding: 36px 0 16px;
  color: #fff;
  margin: 0;
`;

export const CardDescription = styled.h5`
  
  padding: 0 40px;
  color: #fff;
  font-size: 16px;
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
