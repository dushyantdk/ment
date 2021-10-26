import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0;
  background: #040d21;
  width: 100vw;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  width: calc(100% - 100px);
  padding: 150px 50px 150px 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h3 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 80px;
    color: #fff;
    line-height: 45px;
    text-align: center;
    margin-bottom: 80px;
    & > b {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 10px 50px 10px;
    width: calc(100% - 20px);
    & > h3 {
      font-size: 48px;
    }
  }
`;

export const Grid = styled.div`
  width: 98%;
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 48px 40px;
  background: #10273e;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  margin: 0 auto 23px;
  transition: transform 0.5s, -webkit-transform 0.5s;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
`;

export const CardHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  color: #fff;
  margin-bottom: 23px;
`;

export const CardBody = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
`;
