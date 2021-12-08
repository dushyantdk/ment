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

export const CardHeading = styled.div`
  font-style: normal;
  line-height: 130%;
  margin-bottom: 30px;
  color: #fff;
`;

export const CardDescription = styled.div`
  font-style: normal;
  line-height: 150%;
  color: #d1d3d4;
`;
