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
import cross from '../../icons/cross.svg';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';

export function DiaryProductsItem() {
  const { t } = useTranslation();

  const { data: productsUser } = useGetProductsQuery('2022-07-18');

  console.log('productsUser', productsUser);

  // const {
  //   data: products,
  //   isUninitialized,
  //   isFetching,
  //   refetch,
  //   isError,
  // } = useGetProductsQuery();

  // function filterVisibleContacts() {
  //   console.log('products', products);
  // }

  // const showContacts = products && !isFetching && !isError;

  // showContacts && filterVisibleContacts();

  return (
    <>
      {productsUser &&
        productsUser.data.products.map(product => (
          <DiaryProductsItemStyled key={product._id}>
            <DiaryProductsItemProductStyled>
              {product.title}
            </DiaryProductsItemProductStyled>
            <DiaryProductsItemCaloriestStyled>
              {product.weight} {t('EatenProductsListItem.item_1')}
            </DiaryProductsItemCaloriestStyled>
            <DiaryProductsItemWeightStyled>
              {product.kcal}{' '}
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
