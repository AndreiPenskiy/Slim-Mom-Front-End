import { useCreateProductsMutation } from '../../redux/productsApi';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import {
  DiaryFormConteiner,
  DiaryFormProductStyled,
  DiaryFormGramsStyled,
  DiaryFormProductConteinerStyled,
  DiaryFormGramsConteinerStyled,
  DiaryFormButton,
  DiaryFormProductLabelStyled,
  DiaryFormGramsLabelStyled,
  DiaryFormButtonConteiner,
  ErrorText,
} from './DiaryAddProductForm.styled';
import { StyledLink } from 'components/UserInfo/UserInfo.styled';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import { getDate } from 'redux/diary/diary-selectors';
import { useState } from 'react';
import { DiaryListProducts } from './DiaryListProducts';

export default function DiaryAddProductForm() {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const isLoggedIn = useSelector(getLoggedIn);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const selectedDate = useSelector(getDate);
  const isDisabled =
    new Date().toLocaleDateString('fr-ca') !==
    new Date(selectedDate).toLocaleDateString('fr-ca');
  const [addProducts] = useCreateProductsMutation();

  const handleChangeForm = (event, values, handleChange) => {
    handleChange(event);
    let { name, value } = event.target;
    switch (name) {
      case 'product':
        return setProduct(value);
      case 'grams':
        return setGrams(value);
      default:
        throw new Error();
    }
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      ></ErrorMessage>
    );
  };

  const DiaryAddProductSchema = Yup.object().shape({
    product: Yup.string().required("Це поле є обов'язковим!"),
    grams: Yup.number()
      .min(1, 'Значення має бути більше 0!')
      .max(1000, 'Значення має бути меньшим 1000!')
      .required("Це поле є обов'язковим!"),
  });
  const { t } = useTranslation();

  const handleSubmit = resetForm => {
    addProducts({ product, grams });
    setProduct('');
    setGrams('');
    resetForm();
  };
  return (
    <>
      {isLoggedIn && isMobile && (
        <StyledLink to="/diary">
          <MdOutlineKeyboardReturn size={20} />
        </StyledLink>
      )}
      <Formik
        initialValues={{
          product: '',
          grams: '',
        }}
        validationSchema={DiaryAddProductSchema}
        onSubmit={handleSubmit}
      >
        {({ event, values, handleChange }) => (
          <DiaryFormConteiner>
            <DiaryFormProductConteinerStyled>
              <DiaryFormProductStyled
                id="product"
                name="product"
                disabled={isDisabled}
                onChange={event => {
                  handleChangeForm(event, values, handleChange);
                }}
                value={product}
              />
              <DiaryFormProductLabelStyled htmlFor="product">
                {t('ProductForm.label_1')}
              </DiaryFormProductLabelStyled>
              {product && (
                <DiaryListProducts
                  product={product}
                  setProduct={setProduct}
                ></DiaryListProducts>
              )}
              <FormError name="product" />
            </DiaryFormProductConteinerStyled>
            <DiaryFormGramsConteinerStyled>
              <DiaryFormGramsStyled
                id="grams"
                name="grams"
                onChange={event => {
                  handleChangeForm(event, values, handleChange);
                }}
                value={grams}
                disabled={isDisabled}
              />
              <DiaryFormGramsLabelStyled htmlFor="grams">
                {t('ProductForm.label_2')}
              </DiaryFormGramsLabelStyled>
              <FormError name="grams" />
            </DiaryFormGramsConteinerStyled>
            <DiaryFormButtonConteiner>
              <DiaryFormButton type="submit" disabled={isDisabled}>
                Add
              </DiaryFormButton>
            </DiaryFormButtonConteiner>
          </DiaryFormConteiner>
        )}
      </Formik>
    </>
  );
}
