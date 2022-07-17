import styled from 'styled-components';

export const StyledContainer = styled.div`
  @media screen and (min-width: 320px) {
    min-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    height: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
