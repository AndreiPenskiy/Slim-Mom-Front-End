import 'simplebar-react/dist/simplebar.min.css';
import { useMediaQuery } from 'react-responsive';
import { DiaryProductsItem } from './DiaryProductsItem';
import {
  DiaryProductsListStyled,
  DiaryProductsConteinerListStyled,
  DiaryProductsLinkStyled,
  DiaryProductsPlusStyled,
  DiaryProductsOpasityStyled,
} from './DiaryProductsList.styled';
import plus from '../../icons/plus.svg';

export default function DiaryProductsList() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <>
      <DiaryProductsConteinerListStyled>
        <DiaryProductsListStyled>
          <DiaryProductsItem />
        </DiaryProductsListStyled>
      </DiaryProductsConteinerListStyled>
      {isDesktop && <DiaryProductsOpasityStyled />}
      {isMobile && (
        <DiaryProductsLinkStyled to="/diaryformmobile">
          <DiaryProductsPlusStyled src={plus} alt="plus" />
        </DiaryProductsLinkStyled>
      )}
    </>
  );
}
