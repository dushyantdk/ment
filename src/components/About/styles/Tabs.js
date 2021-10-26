import styled from '@emotion/styled';

export const TabsContainer = styled.div`
  height: 65px;
  width: 100%;
  background: #10223a;
  display: flex;
  justify-content: center;
  z-index: 5;
  position: ${(props) => (props.fixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(174, 185, 216, 0.15);
  & > ul {
    height: 100%;
    max-width: 1200px;
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0 20px;
    margin: 0;
  }
  @media (max-width: 1200px) {
    justify-content: flex-start;
    & > ul {
      width: 100%;
      padding: 0;
      max-width: 700px;
      min-width: 700px;
    }
  }
  @media (max-width: 768px) {
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`;

export const ListItem = styled.li`
  border-top: ${(props) => (props.active ? '2px solid blue' : 'none')};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  width: calc(100%);
  cursor: pointer;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;
