import { useCreateProductsMutation } from '../../redux/productsApi';
import { ErrorMessage, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import * as Yup from 'yup';
import {
  DiaryFormConteiner,
  DiaryFormProductStyled,
  DiaryFormGramsStyled,
  DiaryFormProductConteinerStyled,
  DiaryFormGramsConteinerStyled,
  DiaryFormButton,
  DiaryProductsPlusStyled,
  DiaryFormProductLabelStyled,
  ErrorText,
} from './DiaryAddProductForm.styled';
import plus from '../../icons/plus.svg';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';
import { useState } from 'react';
import { DiaryListProducts } from './DiaryListProducts';
import { getDate } from 'redux/diary/diary-selectors';
import { useSelector } from 'react-redux';

export default function DiaryAddProductForm() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
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
    addProducts({ product, grams, date: selectedDate });
    setProduct('');
    setGrams('');
    resetForm();
  };
  return (
    <>
      {!isMobile && (
        <Formik
          initialValues={{
            product: '',
            grams: '',
          }}
          validationSchema={DiaryAddProductSchema}
          validateOnBlur
          onSubmit={handleSubmit}
        >
          {({ event, values, handleChange }) => (
            <DiaryFormConteiner>
              <DiaryFormProductConteinerStyled>
                <DiaryFormProductStyled
                  id="product"
                  name="product"
                  autoComplete="off"
                  onChange={event => {
                    handleChangeForm(event, values, handleChange);
                  }}
                  value={product}
                  disabled={isDisabled}
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
                  autoComplete="off"
                  onChange={event => {
                    handleChangeForm(event, values, handleChange);
                  }}
                  value={grams}
                  disabled={isDisabled}
                />
                <label htmlFor="grams">{t('ProductForm.label_2')}</label>

                <FormError name="grams" />
              </DiaryFormGramsConteinerStyled>
              <DiaryFormButton type="submit" disabled={isDisabled}>
                <DiaryProductsPlusStyled src={plus} alt="plus" />
              </DiaryFormButton>
            </DiaryFormConteiner>
          )}
        </Formik>
      )}
    </>
  );
}
