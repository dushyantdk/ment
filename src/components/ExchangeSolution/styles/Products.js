import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
    margin: 0;
  }
  & > h3 {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 280px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const CenterContainer = styled.div`
  width: 90%;
  background: #f4f6fa;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border-bottom: 0.02rem solid #e0e2e7; */
  background: #f4f6fa;
  position: relative;
  padding: 20px 40px;
`;

export const CenterDescription = styled.div`
  margin-bottom: 25px;
  margin-top: 15px;
  & > p {
    margin: 0;
    padding: 0;
    color: #5f6b7d;
    line-height: 20px;
    font-weight: 400;
  }
`;

export const RightContainer = styled.div`
  width: 280px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 25px;
  cursor: pointer;
  height: 33.4%;
  border-bottom: 1px solid #eee;
  max-width: 217px;
  min-width: 217px;
  background: ${(props) => (props.open ? '#1da1f2' : '#fff')};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    & > img {
      width: 60px;
    }
    & > h3 {
      color: ${(props) => (props.open ? '#fff' : '#293c57')};
    }
  }
  @media (max-width: 1200px) {
    justify-content: space-between;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    max-width: unset;
    min-width: unset;
    & > div {
      flex-direction: row;
      text-align: left;
      & > img {
        width: 30px;
        margin-right: 20px;
      }
    }
  }
`;

export const ExpandDiv = styled.div`
  display: none;
  & > p {
    display: none;
  }
  @media (max-width: 1200px) {
    display: initial;
    & > p {
      display: initial;
      color: #2c89ca;
      margin: 0;
    }
  }
`;

export const SmallCenterDiv = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: initial;
  }
`;

export const ArrowDiv = styled.div`
  display: ${(props) => (props.open ? 'initial' : 'none')};
  position: relative;
  top: 44px;
  left: ${(props) => (props.right ? '-101px' : '101px')};
  border: 16px solid #f4f6fa;
  border-left: 20px solid #1da1f2;
  border-right: 20px solid #1da1f2;
  border-top: #1da1f2;
  transform: ${(props) => (props.right ? 'rotate(90deg)' : 'rotate(-90deg)')};
  @media (max-width: 1200px) {
    display: none;
  }
`;
