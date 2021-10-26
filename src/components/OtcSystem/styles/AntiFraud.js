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
  color: #fff;
  text-align: center;
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

export const SecurityWrapperLeft = styled.div`
  width: calc(50% - 45px / 2);
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecurityWrapper = styled.div`
  width: calc(50% - 45px / 2);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .exchange-lock-animation {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListItem = styled.div`
  display: block;
  text-transform: uppercase;
  color: ${(props) => (props.active ? '#e5e5e5' : '#67707c')};
  padding-top: 10px;
  margin-top: 25px;
  border-top: 1px solid ${(props) => (props.active ? '#e5e5e5' : '#67707c')};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #e5e5e5;
    border-top: 1px solid #e5e5e5;
  }
`;

export const SliderDescription = styled.div`
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;
