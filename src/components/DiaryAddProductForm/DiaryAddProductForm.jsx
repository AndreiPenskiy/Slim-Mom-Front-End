import { Formik } from 'formik';
import {
  DiaryFormConteiner,
  DiaryFormProductStyled,
  DiaryFormGramsStyled,
  DiaryFormProductConteinerStyled,
  DiaryFormGramsConteinerStyled,
  DiaryFormButton,
  DiaryProductsPlusStyled,
  DiaryFormProductLabelStyled,
} from './DiaryAddProductForm.styled';
import plus from '../../icons/plus.svg';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';

export default function DiaryAddProductForm() {

  const { t } = useTranslation();

  return (
    <>
      <Formik
        initialValues={{
          product: '',
          grams: '',
        }}
        onSubmit={(values, { resetForm }) => {
          console.log('values', values);
          resetForm();
        }}
      >
        <DiaryFormConteiner>
          <DiaryFormProductConteinerStyled>
            <DiaryFormProductLabelStyled htmlFor="product">
              {t("ProductForm.label_1")}
            </DiaryFormProductLabelStyled>
            <DiaryFormProductStyled id="product" name="product" />
          </DiaryFormProductConteinerStyled>
          <DiaryFormGramsConteinerStyled>
            <label htmlFor="grams">{t("ProductForm.label_2")}</label>
            <DiaryFormGramsStyled id="grams" name="grams" />
          </DiaryFormGramsConteinerStyled>

          <DiaryFormButton type="submit">
            <DiaryProductsPlusStyled src={plus} alt="plus" />
          </DiaryFormButton>
        </DiaryFormConteiner>
      </Formik>
    </>
  );
}
