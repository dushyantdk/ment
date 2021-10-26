import styled from '@emotion/styled';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  padding: 0;
  flex-direction: row;
  display: flex;
  flex: none;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const TopContainer = styled.div`
  margin-bottom: 0;
  /* margin-right: 120px; */
  position: relative;
  & > h2 {
    font-size: 16px;
    color: #2c89ca;
    line-height: 22px;
    margin: 0;
    font-weight: 600;
    text-align: center;
  }
  & > h1 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 45px;
    color: #293c57;
    line-height: 45px;
    text-align: center;
  }
  & > ul {
    padding: 0;
    list-style: none;
    font-size: 1.8rem;
    font-weight: 700;
    display: flex;
    overflow-x: scroll;
    margin-bottom: 20px;
    margin-top: 25px;
    background: #fff;
    justify-content: space-between;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    & > h2 {
      text-align: center;
    }
    & > h1 {
      text-align: center;
      font-size: 28px;
      line-height: 1.1;
    }
    & > ul {
      font-size: 1.2rem;
    }
  }
`;

export const ListItem = styled.li`
  margin: 0;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s;
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.selected ? '#fff' : '#10223A')};
  background: ${(props) => (props.selected ? '#10223A' : '#fff')};
  padding: 15px 30px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px 20px;
  }
`;

export const BottomContainer = styled.div`
  width: calc(100% - 8vw);
  height: 420px;
  overflow: auto;
  overflow-x: hidden;
  padding-right: 1.5rem;
  display: flex;
  padding: 0 8vw;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    height: 600px;
  }
`;

export const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  flex-direction: column;
  & > h2 {
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    color: #293c57;
  }
  & > p {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: 95%;
    padding: 0px;
    & > h2 {
      font-weight: 700;
      font-size: 28px;
    }
  }
`;

export const RightDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: ${(props) => (props.width ? props.width : '80%')};
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 200px;
  }
`;
