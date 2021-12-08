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
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
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
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`;

export const CardDescription = styled.div`
  font-style: normal;
  color: #d1d3d4;
  text-align: center;
`;
