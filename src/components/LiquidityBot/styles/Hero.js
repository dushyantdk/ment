import styled from '@emotion/styled';

export const Container = styled.div`

  min-height: 600px;
  height: 80vh;
  padding-top: 100px;
  background: #040d21;
  & > video {
    position: absolute;
    top: 0;
    width: 100%;
    height: 95%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 991px) {
    min-height: 800px;
    padding-top: 80px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 600px;
  height: 95%;
  background: rgba(14, 27, 46, 0.85);
  z-index: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 991px) {
    flex-direction: column;
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
  @media (max-width: 991px) {
    width: 100%;
    align-items: center;
    height: 40%;
    margin: 0px ! important;
    /* justify-content: flex-start; */
    & > h1 {
      text-align: center;
      & > span {
        font-size: 32px;
        line-height: 1.25;
      }
    }
    & > p {
      text-align: center;
      margin-top:5px;
      margin-bottom: -40px;
    }
  }
  @media (max-width: 450px) {
    & > p {
      text-align: center;
      margin-top:5px;
      margin-bottom: 50px  !important;
    }
  }

  @media (max-width: 768px) {
    & > p {
      text-align: center;
      margin-top:5px;
      margin-bottom: -60px;
    }
  }
  @media (max-width: 1220px) {
     margin: 15px;
  }
`;


export const RightContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  & > form {
    width: 100%;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    & > form {
      width: 100%;
    }
  }
  @media (max-width: 349px) {
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 75px;
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
    height: 50px;
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
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    & > input {
      margin-bottom: 10px;
      width: 100%;
      &:nth-of-type(1) {
        width: 100%;
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
  @media (max-width: 991px) {
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
  outline: 0;
  user-select: none;
  white-space: nowrap;
  &:hover {
    background: #168ed7;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 10px 0 0 0;
  }
`;

export const StatsContainer = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;

export const StatsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  @media (max-width: 991px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Stats = styled.div`
  text-align: center;
  margin-right: 30px;
  @media (max-width: 991px) {
    margin-right: 0px;
  }
  @media (max-width: 1080px){
    margin-right: 15px;
  }
`;

export const TopText = styled.div`
  color: #fff;
  letter-spacing: -0.318182px;
  text-align: left;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

export const BottomText = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-end;
  & > span {
    margin-bottom: 10px;
  }
  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
