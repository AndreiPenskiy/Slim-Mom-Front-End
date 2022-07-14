import {
  DiaryProductsItemStyled,
  DiaryProductsItemProductStyled,
  DiaryProductsItemCaloriestStyled,
  DiaryProductsItemWeightStyled,
  DiaryProductsItemBtnDeleteStyled,
  DiaryProductsImgDeleteStyled,
  DiaryProductsItemSpanStyled,
} from './DiaryProductsItem.styled';
import { productsData } from 'components/helpers/productsData';
import cross from '../../icons/cross.svg';

export function DiaryProductsItem() {
  return (
    <>
      {productsData.map(product => (
        <DiaryProductsItemStyled key={product.products}>
          <DiaryProductsItemProductStyled>
            {product.products}
          </DiaryProductsItemProductStyled>
          <DiaryProductsItemCaloriestStyled>
            {product.calories} g
          </DiaryProductsItemCaloriestStyled>
          <DiaryProductsItemWeightStyled>
            {product.weight}{' '}
            <DiaryProductsItemSpanStyled>kcal</DiaryProductsItemSpanStyled>
          </DiaryProductsItemWeightStyled>
          <DiaryProductsItemBtnDeleteStyled>
            <DiaryProductsImgDeleteStyled src={cross} alt="calendar" />
          </DiaryProductsItemBtnDeleteStyled>
        </DiaryProductsItemStyled>
      ))}
    </>
  );
}
