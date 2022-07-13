import styled from 'styled-components';

export const DiaryProductsConteinerListStyled = styled.div`
  padding-top: 60px;
`;

export const DiaryProductsListStyled = styled.ul`
  height: 300px;
  width: 625px;
  overflow: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    /* background-color: #264061; */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #264061;
    max-height: 5px;
    /* border-radius: 20px; */
    /* border: 3px solid orange; */
  }
  ::-webkit-scrollbar-track {
    background: #f0f1f3;
  }
  /* ::-webkit-scrollbar-track-piece {
    height: 4px;
  } */
  /* ::-webkit-resizer {
    height: 4px;
  } */
`;
