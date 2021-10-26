import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 80px;
  padding-top: 50px;
  background: #f4f6fa;
  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 0px;
  }
`;

export const Wrapper = styled.div`
  width: 98%;
  max-width: 1200px;
  margin: 0 auto;
  & > h2 {
    color: #040d21;
    text-align: center;
    padding-bottom: 100px;
    margin: 0;
    & > span {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 0 20px;
    & > h2 {
      text-align: center;
      margin: 0;
      padding-bottom: 60px;
    }
  }
`;

export const CardContainer = styled.div`
  padding-bottom: 80px;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-bottom: 50px;
    &:nth-of-type(even) {
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
  width: 30%;
  padding: 0 70px;
  & > h5 {
    color: #040d21;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const CardHeading = styled.h3`
  padding-bottom: 20px;
  font-weight: 900;
  color: #cd7866;
  opacity: 0.8;
  text-align: left;
  margin: 0;
  padding: 0;
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`;

export const CardIcon = styled.div`
  padding: 0 20px;
  width: 50%;
  & > img {
    width: 100%;
    border-radius: 15px;
  }
  @media (max-width: 1230px) {
    width: 100%;
    margin-bottom: 40px;
    & > img {
      width: 100%;
    }
  }
`;
