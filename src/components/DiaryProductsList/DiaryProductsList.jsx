import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { DiaryProductsItem } from './DiaryProductsItem';
import {
  DiaryProductsListStyled,
  DiaryProductsConteinerListStyled,
} from './DiaryProductsList.styled';

export default function DiaryProductsList() {
  return (
    <DiaryProductsConteinerListStyled>
      <SimpleBar
        style={{
          maxHeight: 300,
          maxWidth: 625,
          // caretColor: rgba(38, 64, 97, 1),
          // scrollbarColor: 'blue',
          // scrollbarWidth: '20px',
        }}
      >
        <DiaryProductsListStyled>
          <DiaryProductsItem />
        </DiaryProductsListStyled>
      </SimpleBar>
    </DiaryProductsConteinerListStyled>
  );
}
