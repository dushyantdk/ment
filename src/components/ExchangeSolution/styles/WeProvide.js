import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > h3 {
    margin: 0;
    padding: 0;
    color: #fff;
    line-height: 45px;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 40px;
  }
  @media (max-width: 768px) {
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  margin-bottom: 30px;
  color: #fff;
`;

export const CardDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #d1d3d4;
`;
