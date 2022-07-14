import styled from 'styled-components';
import Datetime from 'react-datetime';

export const DiaryPageConteiner = styled.div`
  padding-top: 40px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 140px;
  }
  display: flex;
  align-items: baseline;
`;

export const DiaryPageDatetimeStyled = styled(Datetime)`
  /* color: red; */
  display: flex;
  justify-content: left;
  /* align-items: center; */
`;

export const DiaryProductsCalendarStyled = styled.img`
  margin-left: 21px;
  width: 20px;
  height: 20px;
`;
