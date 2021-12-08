import styled from '@emotion/styled';
import BgImg from '../../../assests/img/macbook-png_2461633.png';

export const Container = styled.div`
  width: 100vw;
  background: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
    margin: 0;
    font-weight: 700;
  }
  & > h3 {
    text-align: center;
  }
  @media (max-width: 768px) {
    /*padding: 10vw 5vw; */
    margin-top: -50px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 25px;
  }
  @media (max-width: 1024px) {
     margin-bottom: 25px;
  }
`;


export const SliderContainer = styled.div`
  width: 90%;
  height: 564px;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  margin: 50px 0;
  & > div {
    width: 74.8%;
    height: 90%;
    position: relative;
    left: -2px;
  }
  @media (max-width: 1050px) {
    width: 75%;
    height: 400px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 360px;
    & > div {
      left: -1px;
    }
  }
  @media (max-width: 500px) {
    height: 220px;
    & > div {
      left: -0.5px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 450px;
  @media (max-width: 1050px) {
    height: 319px;
  }
  @media (max-width: 768px) {
    height: 287px;
  }
  /* @media (max-width: 600px) {
    height: 239px;
  } */
  @media (max-width: 500px) {
    height: 176px;
  }
`;
