import styled from '@emotion/styled';

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  background: #1da1f2;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TopWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  & > div {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    text-align: center;
    & > h1 {
      margin: 0;
      color: #fff;
    }
    & > p {
      margin: 0;
      color: #fff;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 50%;
  padding: 30px;
  background: ${(props) => props.bg};
  @media (max-width: 1000px) {
    width: calc(100% - 60px);
  }
`;

export const BottomRightContainer = styled.div`
  width: 50%;
  padding: 30px;
`;

export const CardHeading = styled.div`
  color: ${(props) => props.color};
  & > h2 {
    margin: 0;
    text-align: center;
  }
  & > h3 {
    margin: 0;
    text-align: center;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 27px 0;
`;

export const BigPhoneImage = styled.img`
  max-width: 30%;
  @media (max-width: 768px) {
    max-width: 50%;
  }
`;

export const BigLaptopImage = styled.img`
  max-width: 80%;
  margin: 35px 0;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardBottom = styled.div`
  text-align: center;
  color: ${(props) => props.color};
  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 25px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  width: 125px;
  margin-top: ${(props) => props.marginTop};
  margin-right: 20px;
  box-sizing: border-box;
  height: 50px;
  justify-content: space-between;
  padding: 0 25px;
  text-align: center;
  position: relative;
  background: ${(props) => props.color};
  border: none;
  color: ${(props) => props.fontColor};
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.25s, color 0.2s;
  border-radius: 2px;
  font-weight: 600;
  outline: 0;
  user-select: none;
  white-space: nowrap;
  &:hover {
    background: #fff;
    color: ${(props) => (props.color === '#fff' ? '#000' : props.color)};
    & > div {
      background: #edeffa;
    }
  }
  @media (max-width: 768px) {
    margin: 0 0 20px 0;
    width: 130px;
    height: 50px;
  }
`;
