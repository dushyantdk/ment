import styled from '@emotion/styled';

export const Container = styled.div`

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
  background:#212e3e;
  padding: 55px 40px;
`;

export const CardHeading = styled.div`
  font-style: normal;
  color: #fff;
`;

export const CardDescription = styled.div`
  font-style: normal;
  color: #d1d3d4;
`;
