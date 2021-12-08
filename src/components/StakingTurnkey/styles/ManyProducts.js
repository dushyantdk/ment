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
  border-radius:5px;  
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
  font-size: 28px;
  line-height: 130%;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const CardDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #d1d3d4;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
