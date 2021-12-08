import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  background: #040d21;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 50px 8vw;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  & > h3 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DemoListBottom = styled.ul`
  padding: 0;
  & > li {
    color: #fff;
    list-style: none;
    border-bottom: 1px solid grey;
    padding: 12px 0;
    margin-bottom: 10px;
    & > img {
      width: 20px;
      position: relative;
      top: 3px;
    }
  }
`;

export const DemoList = styled.ul`
  margin-bottom: 30px;
  & > li {
    color: #fff;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  padding-left: 20px;
  & > h3 {
    color: #cd7866;
    margin: 0;
    padding: 0;
  }
  & > h2 {
    color: #fff;
    margin: 0;
    padding: 0;
    font-weight: 800;
  }
  & > div {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
    padding-left: 0px;
    & > h3 {
      margin-bottom: 5px;
    }
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  /* margin: 0px 20px; */
`;

export const QuoteContainer = styled.div`
  position: relative;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  flex: 1 1 0%;
`;

export const QuoteWrapper = styled.div`
  position: relative;
  max-width: 380px;
  margin-bottom: 20px;
  & > img {
    position: absolute;
    left: 5px;
    bottom: -23px;
    z-index: 3;
    overflow: hidden;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background-position: 50% 50%;
    background-size: cover;
    box-shadow: rgba(73, 81, 126, 0.11) -9px 9px 42px -8px;
  }
  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

export const ShapeOne = styled.div`
  position: absolute;
  top: 28%;
  left: 30%;
  z-index: 1;
  width: 240px;
  height: 200px;
  border-radius: 0px 80px;
  background-color: ${(props) => props.color};
  transform: translate(24px, 19px) rotate(-63deg);
  @media (max-width: 768px) {
    left: 18%;
    top: 33%;
  }
  @media (max-width: 410px) {
    left: 12%;
  }
`;

export const ReviewWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: visible;
  min-height: 100px;
  padding: 32px 36px 28px;
  border-radius: 2px 50px;
  background-color: rgb(245, 247, 252);
  box-shadow: rgba(73, 81, 126, 0.15) -6px 17px 50px -5px;
  & > p {
    position: relative;
    z-index: 2;
    margin-bottom: 12px;
    color: rgb(35, 42, 85);
    text-align: left;
    letter-spacing: 0.2px;
    line-height: 25px;
  }
  & > img {
    position: absolute;
    left: 40px;
    bottom: -22px;
    z-index: 3;
    display: block;
    width: 94px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > div {
    position: relative;
    z-index: 1;
    margin-top: 0px;
    margin-bottom: 0px;
    color: rgb(35, 42, 85);
    line-height: 1.5;
    font-weight: 400;
    text-align: right;
    letter-spacing: 0.4px;
    text-decoration: none;
  }

  & > p {
    position: relative;
    z-index: 1;
    margin-bottom: 0px;
    margin-left: 50px;
    color: rgb(63, 67, 88);
    text-align: right;
    letter-spacing: 0.4px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  width: 156px;
  margin-top: ${(props) => props.marginTop};
  margin-left: 20px;
  box-sizing: border-box;
  height: 55px;
  justify-content: space-between;
  padding: 0 18px;
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
    width: 150px;
    height: 50px;
  }
`;
