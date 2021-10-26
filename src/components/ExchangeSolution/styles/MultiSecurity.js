import styled from '@emotion/styled';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  position: relative;
  background: #212e3e;
  border-radius: 5px;
  padding: 55px 40px;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 55px 20px;
  }
`;

export const CardWrapper = styled.div``;

export const CardHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  color: #fff;
  margin-bottom: 31px;
  text-align: center;
`;

export const CardDescription = styled.div`
  font-style: normal;
  color: #d1d3d4;
  text-align: center;
`;

export const BorderedDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  margin-top: 70px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
  padding-right: 113px;
  padding: 47px 53px;
  border: 2px solid #1da1f2;
  @media (max-width: 768px) {
    padding: 47px 15px;
  }
`;

export const BorderedHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 30px;
  color: #fff;
  text-align: left;
`;

export const BorderedDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #d1d3d4;
`;

export const SecurityContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SecurityWrapper = styled.div`
  width: calc(50% - 45px / 2);
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FirstSecurityDiv = styled.div`
  background: #171e29;
  border-radius: 5px;
  line-height: 44px;
  color: #fff;
  margin-bottom: 10px;
  height: 86px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > img {
    display: block;
    margin: 0 25px;
  }
`;

export const RemainingSecurity = styled.div`
  padding: 20px 30px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #636b75;
  &:last-child {
    border-bottom: none;
  }
`;

export const RemainingSecurityHeading = styled.div`
  color: #fff;
  margin-bottom: 6px;
`;

export const RemainingSecurityDescription = styled.div`
  font-weight: 400;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
`;

export const LastDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  padding-right: 113px;
  padding: 47px 53px;
  background: #171e29;
  @media (max-width: 768px) {
    padding: 47px 20px;
  }
`;
