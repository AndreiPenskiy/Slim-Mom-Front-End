import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryProductsConteinerListStyled = styled.div`
  padding-top: 32px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 55px;
  }
`;
export const DiaryProductsListStyled = styled.ul`
  height: 200px;
  overflow: auto;
  scroll-behavior: smooth;
  @media screen and (min-width: 768px) {
    height: 240px;
  }
  @media screen and (min-width: 1280px) {
    height: 300px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
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

export const DiaryProductsLinkStyled = styled(Link)`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #fc842d;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  :hover {
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
`;
export const DiaryProductsPlusStyled = styled.img`
  width: 24px;
  height: 24px;
`;
export const DiaryProductsOpasityStyled = styled.div`
  position: absolute;
  top: 110%;
  left: 25%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 730px;
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 42.19%
  ); */
`;
