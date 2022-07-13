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

export default function DiaryAddProductForm() {
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
              Enter product name
            </DiaryFormProductLabelStyled>
            <DiaryFormProductStyled id="product" name="product" />
          </DiaryFormProductConteinerStyled>
          <DiaryFormGramsConteinerStyled>
            <label htmlFor="grams">Grams</label>
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
