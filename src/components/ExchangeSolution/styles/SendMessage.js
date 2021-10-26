import styled from '@emotion/styled';

export const Container = styled.div`
  
  background-color: #e9eef6;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 50px 8vw;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 50px 5vw;
  }
`;

export const FormContainer = styled.div`
  background: #e9eef6;
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
    border: none;
    height: 50px;
    line-height: 40px;
    padding: 0 20px;
    color: #040d21;
    caret-color: #040d21;
    margin-bottom: 20px;
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
    color: #040d21;
    caret-color: #040d21;
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
  width: 100px;
  margin-top: 20px;
  box-sizing: border-box;
  height: 50px;
  justify-content: space-between;
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
`;
