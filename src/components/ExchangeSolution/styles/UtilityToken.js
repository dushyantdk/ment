import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background: #07132d;
  padding: 55px 40px;
`;

export const CardIcon = styled.div`
  margin-bottom: 30px;
  & > img {
    width: 100%;
  }
`;

export const CardHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 30px;
  color: #fff;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const CardDescription = styled.div`
  font-style: normal;
  color: #d1d3d4;
`;

export const Lists = styled.div`
  margin-top: 20px;
  & > span {
    font-style: normal;
    color: #d1d3d4;
    &:before {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: relative;
      left: 0;
      top: 14px;
      background: #00e8b6;
    }
    & > span {
      margin-left: 20px;
    }
  }
`;
