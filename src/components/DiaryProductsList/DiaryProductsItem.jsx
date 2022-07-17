import {
  useGetProductsQuery,
  // useDeleteContactsMutation,
} from '../../redux/productsApi';
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
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';

export function DiaryProductsItem() {
  const { t } = useTranslation();

  const {
    data: products,
    isUninitialized,
    isFetching,
    refetch,
    isError,
  } = useGetProductsQuery();

  function filterVisibleContacts() {
    console.log('products', products);
  }

  const showContacts = products && !isFetching && !isError;

  showContacts && filterVisibleContacts();

  return (
    <>
      {showContacts && <div>{products}</div>}
      {productsData.map(product => (
        <DiaryProductsItemStyled key={product.products}>
          <DiaryProductsItemProductStyled>
            {product.products}
          </DiaryProductsItemProductStyled>
          <DiaryProductsItemCaloriestStyled>
            {product.calories} {t('EatenProductsListItem.item_1')}
          </DiaryProductsItemCaloriestStyled>
          <DiaryProductsItemWeightStyled>
            {product.weight}{' '}
            <DiaryProductsItemSpanStyled>
              {t('EatenProductsListItem.item_2')}
            </DiaryProductsItemSpanStyled>
          </DiaryProductsItemWeightStyled>
          <DiaryProductsItemBtnDeleteStyled>
            <DiaryProductsImgDeleteStyled src={cross} alt="calendar" />
          </DiaryProductsItemBtnDeleteStyled>
        </DiaryProductsItemStyled>
      ))}
    </>
  );
}
