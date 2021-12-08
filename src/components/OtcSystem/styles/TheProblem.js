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
  & > h2 {
    color: #040d21;
    text-align: center;
    padding-bottom: 28px;
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
  /* border-bottom: 1px solid #e6e7e9; */
  text-align: center;
  padding: 30px 0;
  &:nth-of-type(3) {
    border: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  background: #eff4f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 20px 0;
  min-height: 350px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const CardIcon = styled.img``;

export const CardHeading = styled.h4`
  padding: 36px 0 16px;
  color: #040d21;
  margin: 0;
`;

export const CardDescription = styled.h5`
  padding: 0 40px;
  color: #040d21;
  font-size: 16px;
`;

export const DividerDiv = styled.div`
  height: 251px;
  margin: 0 50px;
  width: 1px;
  background-color: #040d21;
  opacity: 0.1;
  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
    margin-bottom: 50px;
    margin-top: 30px;
  }
`;
