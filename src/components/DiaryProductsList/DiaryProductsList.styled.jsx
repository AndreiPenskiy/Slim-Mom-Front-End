import styled from 'styled-components';

export const DiaryProductsConteinerListStyled = styled.div`
  padding-top: 60px;
`;

export const DiaryProductsListStyled = styled.ul`
  height: 300px;
  width: 625px;
  /* overflow: auto; */
  scroll-behavior: smooth;
  scrollbar-color: rgba(38, 64, 97, 1);
  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid orange;
  }
  ::-webkit-scrollbar-track {
    background: orange;
  }
`;
