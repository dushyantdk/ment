import styled from '@emotion/styled';

export const Container = styled.div`
 
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 8vw;
  max-width: 1200px;
  margin: 0 auto;
  background: #212e3e;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  & > h1 {
    color: #fff;
    text-align: center;
    padding-bottom: 28px;
    margin-bottom: 50px;
   
    margin: 0;
    & > span {
      font-weight: bold;
    }
  }
  & > h5 {
    max-width: 760px;
    padding-bottom: 60px;
  /*  font-size: 20px;
    line-height: 31px; */
    text-align: center;
    font-weight: 400;
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 20px;
    & > h1 {
      text-align: center;
      
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  & > img {
    max-height: 40px;
  }
  @media (max-width: 768px) {
    & > img {
      margin-bottom: 30px;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #fff;
  opacity: 0.1;
  height: 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;
