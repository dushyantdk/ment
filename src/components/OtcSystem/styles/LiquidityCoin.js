import styled from '@emotion/styled';

export const Container = styled.div`

  margin-top: 50px;
  background: #040d21;
`;

export const Wrapper = styled.div`
  padding: 80px 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  & > h3 {
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
  }
  & > div {
    display: flex;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    & > div {
      flex-direction: column;
    }
  }
`;

export const LeftContainer = styled.div`
  margin-bottom: 0;
  margin-right: 30px;
  position: relative;
  & > h2 {
    text-align: left;
    margin: 0;
    padding: 0;
  }
  & > ul {
    flex-direction: column;
    padding: 0;
    margin: 160px 0 0 0;
    list-style: none;
    display: flex;
  }
  @media (max-width: 980px) {
    margin-right: 0;
    width: 100%;
    & > h2 {
      text-align: center;
    }
    & > ul {
      margin-bottom: 20px;
      margin-top: 25px;
    }
  }
`;

export const ListItem = styled.li`
  margin: 5px 0;
  padding: 15px 0 15px 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s;
  list-style: none;
  font-weight: 700;
  min-width: 240px;
  border-radius: 5px;
  background: ${(props) => (props.selected ? '' : '#10223A')};
  color: ${(props) => (props.selected ? '#fff' : '#858a92')};
  border: ${(props) => (props.selected ? '2px solid #218fce' : '')};
  @media (max-width: 980px) {
    margin-right: 20px;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  &::-webkit-scrollbar {
    width: 5px;
  }
  @media (max-width: 980px) {
    width: 100%;
    padding-right: 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  @media (max-width: 980px) {
    grid-gap: 15px;
    grid-template-columns: repeat(1, 1fr);
    & > a {
      height: 80px;
    }
  }
`;

export const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 50px);
  min-height: 90px;
  padding: 20px 25px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background: rgba(33, 143, 206, 0.1);
`;

export const CardIcon = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  margin-bottom: 20px;
  color: #102039;
  position: relative;
  left: 2px;
  & > img {
    width: ${(props) => (props.width ? props.width : '40px')};
  }
`;

export const CardHead = styled.div`
  & > a {
    color: #fff;
    overflow: hidden;
    margin: 0;
    text-decoration: none;
    margin-bottom: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
  & > p {
    color: rgba(255, 255, 255, 0.7);
    margin: 8px 0;
  }
`;
