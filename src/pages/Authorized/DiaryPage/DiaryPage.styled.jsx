import styled from 'styled-components';


export const Container = styled.div`
  border: 2px solid white;
  max-width: 320px;
  padding: 10px;
  /* display: flex;
  gap: 19px; */

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 27px;
  }

  @media (min-width: 1200px) {
    max-width: 1480px;
    padding: 34px;
  }
`;

export const SVG = styled.svg`
  width: 16px;
  height: 16px;
`;

export const TitelPage = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
`;

export const Section = styled.div`
  border: 2px solid white;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 27px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 1480px;
    padding: 34px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-basis: calc((100% - 20px) / 2);
  }
`;