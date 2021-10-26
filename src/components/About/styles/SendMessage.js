import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  background-color: #10223a;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 80px 8vw;
  max-width: 800px;
  margin: 0 auto;
  & > h3 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 80px;
    color: #fff;
    line-height: 84px;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    & > span {
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 5vw;
    & > h3 {
      font-size: 48px;
      line-height: 1.2;
    }
  }
`;

export const FormContainer = styled.div`
  background: #10223a;
  width: 100%;
  margin-top: 50px;
  & > form {
    & > div {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
    width: calc(100% - 40px);
    margin-top: 20px;
  }
`;

export const TopContainer = styled.div`
  width: 48%;
  display: flex;
  justify-content: space-between;
  & > input {
    width: 38%;
    background: #10273e;
    border: 1px solid #fff;
    border-radius: 5px;
    height: 50px;
    line-height: 40px;
    padding: 0 20px;
    color: #fff;
    caret-color: #fff;
    margin-bottom: 20px;
    &::placeholder {
      opacity: 1;
      color: #fff;
    }
    &:nth-of-type(1) {
      /* width: 40%; */
      margin-right: 20px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    & > input {
      margin-bottom: 10px;
      width: calc(100% - 40px);
      &:nth-of-type(1) {
        width: calc(100% - 40px);
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
    height: 170px;
    line-height: 20px;
    padding: 15px 20px 5px 20px;
    color: #fff;
    caret-color: #fff;
    background: #10273e;
    border: 1px solid #fff;
    border-radius: 5px;
    &::placeholder {
      opacity: 1;
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    & > textarea {
      width: calc(100% - 40px);
    }
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  width: 150px;
  margin-top: 20px;
  box-sizing: border-box;
  height: 50px;
  justify-content: center;
  padding: 0 18px;
  text-align: center;
  position: relative;
  background: ${(props) => props.color};
  border: none;
  color: #fff;
  font-size: 16px;
  line-height: 1;
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
    background: #fff;
    color: ${(props) => (props.color === '#fff' ? '#000' : props.color)};
    & > div {
      background: #edeffa;
    }
  }
`;
