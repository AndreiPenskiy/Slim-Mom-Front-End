import { Field, Form, Formik } from 'formik';
import {
  DiaryFormConteiner,
  DiaryFormProductStyled,
  DiaryFormGramsStyled,
  DiaryFormProductConteinerStyled,
  DiaryFormGramsConteinerStyled,
  DiaryFormButton,
} from './DiaryAddProductForm.styled';

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
            <DiaryFormProductStyled
              id="product"
              name="product"
              placeholder="Enter product name"
            />
          </DiaryFormProductConteinerStyled>
          <DiaryFormGramsConteinerStyled>
            <DiaryFormGramsStyled id="grams" name="grams" placeholder="Grams" />
          </DiaryFormGramsConteinerStyled>

          <DiaryFormButton type="submit">+</DiaryFormButton>
        </DiaryFormConteiner>
      </Formik>
    </>
  );
}
