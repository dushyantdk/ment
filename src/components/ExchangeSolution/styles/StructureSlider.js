import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > .exchange-slider {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #07132d;
  & > div {
    padding: 55px 40px;
  }
`;

export const CardHeading = styled.div`
  font-style: normal;
  line-height: 130%;
 /* margin-bottom: 30px;*/
  color: #fff;
  text-align: center;
`;

export const CardDescription = styled.div`
  font-style: normal;
  color: #d1d3d4;
  text-align: center;
`;

export const CardImg = styled.div`
  & > img {
    width: 100%;
  }
`;

export const Divider = styled.div`
  border-bottom: 1.5px solid #3c4856;
  max-width: 761px;
  margin: 0 auto 75px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ListItem = styled.div`
  position: relative;
  padding-left: 25px;
  margin: 0 20px;
  color: #fff;
  & > span {
    display: block;
  }
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #21c5a2;
    position: absolute;
    left: 0;
    top: 13px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    & > span {
      display: none;
    }
  }
`;

export const PrevArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  width: 44px;
  height: 44px;
  transition: all 0.5s;
  position: absolute;
  top: 50%;
  margin-top: -22px;
  cursor: pointer;
  z-index: 89;
  transform: rotate(${(props) => (props.right ? '180deg' : '')});
`;
