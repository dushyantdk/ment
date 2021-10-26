import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const grove = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const Container = styled.div`
 
  border-top: 1px solid rgba(174, 185, 216, 0.15);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
  /*  font-size: 18px;*/
    color: #fff;
   /* line-height: 25px;*/
    margin: 0;
    font-weight: 400;
    text-align: center;
  }
  & > h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    margin: 0px 0px 50px;
  }
  }
  @media (max-width: 768px) {
    padding: 10px 2vw;
    & > h3 {
      font-size: 30px;
      line-height: 1.2;
    }
    & > p {
      font-size: 16px;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  background: #10273e;
  border-radius: 5px;
  padding: 55px 40px;
  box-sizing: border-box;
  margin-top: 80px;
  @media (max-width: 768px) {
    padding: 55px 20px;
  }
`;

export const CardWrapper = styled.div``;

export const CardHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 44px;
  color: #fff;
  margin-bottom: 31px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const CardDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #d1d3d4;
  & > span {
    font-weight: 700;
  }
`;

export const ProgressContainer = styled.div`
  position: relative;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
`;

export const LeftHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  padding-bottom: 10px;
  border-bottom: 1px solid #434c56;
  margin-bottom: 13px;
`;

export const FullProgressContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const FullProgress = styled.div`
  opacity: 1;
  animation: 2s ease-in ${grove};
  width: 100%;
  height: 11px;
  border-radius: 4px;
  transform-origin: left center;
  background: #434c56;
`;

export const FullProgressText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.318182px;
  color: #fff;
  margin-left: 14px;
  flex-shrink: 0;
`;

export const FullProgressSubText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  opacity: 0.7;
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const SmallProgressContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const SmallProgress = styled.div`
  max-width: 58px;
  width: 100%;
  height: 11px;
  border-radius: 4px;
  transform-origin: left center;
  background: ${(props) => props.color};
`;

export const SmallSubText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  opacity: 0.7;
  margin-top: 8px;
`;

export const RightContainer = styled.div`
  width: 155px;
  flex-shrink: 0;
  margin-left: 49px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const RightBorder = styled.div`
  padding-top: 31px;
  border-bottom: 1px solid #434c56;
  margin-bottom: 15px;
`;

export const RightSubText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  opacity: 0.7;
  margin-top: 10px;
`;

export const BottomContainer = styled.div`
  margin-top: 80px;
  padding: 35px 28px;
  box-sizing: border-box;
  background: #040d21;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  line-height: 160%;
  color: #fff;
  & > svg {
    flex-shrink: 0;
    margin-right: 20px;
    display: block;
  }
  & > p {
    margin: 0;
    padding: 0;
    & > span {
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
