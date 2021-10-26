import styled from '@emotion/styled';

export const Container = styled.div`

  min-height: 600px;
  height: 50vh;
  padding-top: 100px;
  @media (max-width: 768px) {
    min-height: 830px;
    padding-top: 80px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
 /* padding: 0 8vw; */
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    padding: 0 5vw;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5vw;
    width: 90%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  height: 90%;
  z-index: 1;
  & > h1 {
    margin: 0;
    & > span {
      font-weight: bold;
      color: #cd7866;
      font-size: 70px;
    }
  }
  & > p {
    line-height: 141.6%;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    height: 40%;
    margin: 0px ! important;
    /* justify-content: flex-start; */
    & > h1 {
      text-align: center;
      & > span {
        font-size: 35px;
        line-height: 1.25;
      }
    }
    & > p {
      text-align: center;
      margin-top:5px;
      margin-bottom: 25px;
    }
  }
  @media (max-width: 450px) {
    & > p {
      text-align: center;
      margin-top:5px;
      margin-bottom: 50px;
    }
  }
  @media (max-width: 1024px) {
     margin: 15px;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > form {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    & > form {
      width: 90%;
    }
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > input {
    width: 100%;
    border: none;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: #fff;
    caret-color: #fff;
    margin-bottom: 7px;
    border: 1px solid rgba(209, 219, 227, 0.7);
    border-radius: 5px;
    background: rgba(26, 26, 26, 0.1);
    &:nth-of-type(1) {
      /* width: 40%; */
      margin-right: 20px;
    }
    &::placeholder {
      opacity: 1;
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    & > input {
      margin-bottom: 10px;
      width:100%;
      &:nth-of-type(1) {
        width:100%;
        margin-right: 0px;
      }
    }
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > textarea {
    width: 100%;
    border: none;
    height: 60px;
    line-height: 20px;
    padding: 15px 20px 5px 20px;
    color: #fff;
    caret-color: #fff;
    margin: 0px 20px 0px 0;
    border: 1px solid rgba(209, 219, 227, 0.7);
    border-radius: 5px;
    background: rgba(26, 26, 26, 0.1);
    &::placeholder {
      opacity: 1;
      color: #fff;
    }
  }
  & > span {
    color: #9d9d9d;
    margin-top: 20px;
    & > a {
      color: #9d9d9d;
    }
  }
  @media (max-width: 768px) {
    & > textarea {
      margin: 0;
    }
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-right: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  height: 50px;
  justify-content: center;
  padding: 0 18px;
  text-align: center;
  position: relative;
  background: ${(props) => props.color};
  border: none;
  color: #fff;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.25s, color 0.2s;
  border-radius: 5px;
  font-weight: 600;
  outline: 0;
  user-select: none;
  white-space: nowrap;
  &:hover {
    background: #168ed7;
    color: #fff;
  }
  @media (max-width: 768px) {
    margin: 10px 0 0 0;
  }
`;

