import styled from '@emotion/styled';

export const Container = styled.div`
 
  background: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
    color: #293c57;
    margin: 0;
    font-weight: 400;
    text-align: center;
  }
  & > h3 {
    color: #293c57;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 50px;
    & > span {
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 5vw;
    
 
   
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 768px) {
   /* padding: 55px 20px;*/
   margin-top: 25px;
  } 
`;
export const CardWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const LeftCard = styled.div`
  max-width: 610px;
  margin-right: 65px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const CardHeading = styled.div`
  & > a {
    text-decoration: none;
    display: inline-block;
    color: #383838;
    margin-bottom: 23px;
  }
  & > p {
    color: #383838;
    margin-bottom: 42px;
    padding-right: 81px;
  }
  & > div {
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.2);
    width: 100%;
    & > a {
      & > img {
        display: block;
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    & > p {
      padding-right: 0;
    }
  }
`;

export const RightCard = styled.div`
  max-width: 316px;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  align-self: flex-end;
  min-height: 330px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

export const CardDescription = styled.div`
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  & > div {
    min-width: 10px;
    min-height: 10px;
    background: #21c5a2;
    border-radius: 50%;
    margin-right: 20px;
  }
  & > span {
    letter-spacing: 0;
    color: #63636e;
  }
`;

export const ProgressContainer = styled.div`
  position: relative;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
`;

export const LeftHeading = styled.div`
  font-style: normal;
  color: #fff;
  padding-bottom: 10px;
  border-bottom: 1px solid #434c56;
  margin-bottom: 13px;
`;
