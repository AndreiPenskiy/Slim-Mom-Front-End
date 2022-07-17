import {
  useCreateProductsMutation,
  useGetAllProductsQuery,
} from '../../redux/productsApi';
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

export default function DiaryAddProductForm() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { data: products } = useGetAllProductsQuery('Бу');
  const [addProducts] = useCreateProductsMutation();

  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const handleChangeForm = (event, values, handleChange) => {
    handleChange(event);
    console.log('values', values);
    let { name, value } = event.currentTarget;
    switch (name) {
      case 'product':
        return setProduct(value);
      case 'grams':
        return setGrams(value);
      default:
        throw new Error();
    }
  };

  console.log('product', product);
  console.log('grams', grams);
  console.log('products', products);

  // const handlerSubmitUser = e => {
  //   e.preventDefault();
  //   const product = {
  //     name,
  //     number,
  //   };
  // handlerSubmitUserForm(contact);
  // };
  // const handlerSubmitUserForm = contact => {
  //   products.some(
  //     contactItem =>
  //       contactItem.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //   )
  //     ? alert(`${name} is already in contacts`)
  //     : addProducts(product);
  // };

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
          onSubmit={(values, { resetForm }) => {
            // e.preventDefault();
            console.log('values', values);
            addProducts(values);
            resetForm();
          }}
        >
          {({ event, values, handleChange }) => (
            <DiaryFormConteiner>
              <DiaryFormProductConteinerStyled>
                <DiaryFormProductLabelStyled htmlFor="product">
                  {t('ProductForm.label_1')}
                </DiaryFormProductLabelStyled>
                <DiaryFormProductStyled
                  id="product"
                  name="product"
                  onChange={event => {
                    handleChangeForm(event, values, handleChange);
                  }}
                  value={values.product}
                />
                <DiaryListProducts></DiaryListProducts>
                <FormError name="product" />
              </DiaryFormProductConteinerStyled>
              <DiaryFormGramsConteinerStyled>
                <label htmlFor="grams">{t('ProductForm.label_2')}</label>
                <DiaryFormGramsStyled
                  id="grams"
                  name="grams"
                  onChange={event => {
                    handleChangeForm(event, values, handleChange);
                  }}
                  value={values.grams}
                />
                <FormError name="grams" />
              </DiaryFormGramsConteinerStyled>
              <DiaryFormButton type="submit">
                <DiaryProductsPlusStyled src={plus} alt="plus" />
              </DiaryFormButton>
            </DiaryFormConteiner>
          )}
        </Formik>
      )}
    </>
  );
}
