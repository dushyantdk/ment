import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
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
  @media (max-width: 768px) {
    padding-top: 0px;
  padding-bottom: 50px;
  }
`;

export const TopContainer = styled.div`
  margin-bottom: 0;
  /* margin-right: 120px; */
  position: relative;
  & > h2 {
    color: #2c89ca;
    margin: 0;
    font-weight: 600;
    text-align: center;
  }
  & > h1 {
    margin: 0;
    padding: 0;
    line-height: 45px;
    text-align: center;
  }
  & > ul {
    padding: 0;
    list-style: none;
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
      line-height: 1.1;
    }
  }
`;

export const ListItem = styled.li`
  margin: 0;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s;
  list-style: none;
  font-weight: 500;
  color: ${(props) => (props.selected ? '#fff' : '#040d21')};
  background: ${(props) => (props.selected ? '#040d21' : '#fff')};
  padding: 15px 30px;
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 420px;
  overflow: auto;
  overflow-x: hidden;
  padding-right: 1.5rem;
  display: flex;
  padding: 0;
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
    color: #293c57;
  }
  @media (max-width: 768px) {
    width: 95%;
   
    & > h2 {
      font-weight: 700;
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
