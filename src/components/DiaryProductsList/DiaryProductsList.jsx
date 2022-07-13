import 'simplebar-react/dist/simplebar.min.css';
import { DiaryProductsItem } from './DiaryProductsItem';
import {
  DiaryProductsListStyled,
  DiaryProductsConteinerListStyled,
} from './DiaryProductsList.styled';

export default function DiaryProductsList() {
  return (
    <DiaryProductsConteinerListStyled>
      <DiaryProductsListStyled>
        <DiaryProductsItem />
      </DiaryProductsListStyled>
    </DiaryProductsConteinerListStyled>
  );
}
