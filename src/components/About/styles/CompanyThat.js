import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0;
  background: #ffffff;
  width: 100vw;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  width: calc(100% - 100px);
  padding: 0px 50px 150px 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h3 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 80px;
    color: #293c57;
    line-height: 45px;
    text-align: center;
    & > b {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 10px 50px 10px;
    width: calc(100% - 20px);
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 720px;
  margin-top: 80px;
  /* @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

export const Card = styled.div`
  background: ${(props) => (props.active ?'#f6f6f6' : '#0a0825')};
  margin: 7.5px 10px;
  padding: 13px 15px;
  align-items: center;
  border-radius: 20px;
  font-style: normal;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  color: ${(props) => (props.active ? '#f6f6f6' : '#fff')};
  transition: all 1s;
  & > span {
    font-weight: bold;
  }
  /* @media (max-width: 768px) {
  } */
`;
