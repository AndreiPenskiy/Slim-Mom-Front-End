import styled from 'styled-components';
import Datetime from 'react-datetime';

export const DiaryPageConteiner = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  display: flex;
  /* justify-content: baseline; */
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
