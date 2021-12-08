import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 80px;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 98%;
  max-width: 1200px;
  margin: 0 auto;
  & > h2 {
    color: #fff;
    text-align: center;
    padding-bottom: 28px;
    & > span {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 0 20px;
    & > h2 {
      text-align: center;
      margin: 0;
    }
  }
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  max-width: 1000px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  @media (max-width: 1230px) {
    max-width: 770px;
  }
`;

export const CardIcon = styled.div`
  width: 28%;
  height: 150px;
  justify-content: center;
  background: linear-gradient(180deg, #203f5982 0%, #1a2f41 100%);
  border-top-right-radius: ${(props) => (props.right ? '20px' : 'none')};
  border-bottom-right-radius: ${(props) => (props.right ? '20px' : 'none')};
  border-bottom-left-radius: ${(props) => (props.right ? 'none' : '20px')};
  border-top-left-radius: ${(props) => (props.right ? 'none' : '20px')};
  display: flex;
  align-items: center;
`;

export const CardText = styled.div`
  display: flex;
  align-items: center;
  width: 72%;
  height: 150px;
  padding: 0 85px;
  background: linear-gradient(180deg, #203f595e 0%, #1a2f4185 127.31%);
  border-top-right-radius: ${(props) => (props.right ? 'none' : '20px')};
  border-bottom-right-radius: ${(props) => (props.right ? 'none' : '20px')};
  border-bottom-left-radius: ${(props) => (props.right ? '20px' : 'none')};
  border-top-left-radius: ${(props) => (props.right ? '20px' : 'none')};
  & > h4 {
    margin-block-start: 0;
    margin-block-end: 0;
    color: #fff;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const RightArrow = styled.img`
  position: absolute;
  right: 30px;
  top: 100px;
  height: 200px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LeftArrow = styled.img`
  position: absolute;
  left: 30px;
  bottom: 90px;
  height: 200px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BottomRightArrow = styled.img`
  display: none;
  @media (max-width: 1200px) {
    display: initial;
  }
`;

export const BottomLeftArrow = styled.img`
  display: none;
  @media (max-width: 1200px) {
    display: initial;
  }
`;
