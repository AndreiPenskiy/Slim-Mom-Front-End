import styled from 'styled-components';

export const DiaryPageConteiner = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  /* max-width: 280px; */
  @media screen and (max-width: 767px) {
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    width: 610px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 625px;
    margin-left: 16px;
  }
  /* padding-right: 124px; */
  /* align-items: center; */
  /* margin: 20px; */
  background-color: white;

  /* @media screen and (max-width: 767px) {
    overflow: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar-thumb {
      background-color: #264061;
      max-height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f0f1f3;
    }
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
  } */
`;
