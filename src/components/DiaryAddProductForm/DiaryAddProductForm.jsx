import { Formik } from 'formik';
import {
  DiaryFormConteiner,
  DiaryFormProductStyled,
  DiaryFormGramsStyled,
  DiaryFormProductConteinerStyled,
  DiaryFormGramsConteinerStyled,
  DiaryFormButton,
  DiaryProductsPlusStyled,
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
            <DiaryFormProductStyled
              id="product"
              name="product"
              placeholder="Enter product name"
            />
          </DiaryFormProductConteinerStyled>
          <DiaryFormGramsConteinerStyled>
            <DiaryFormGramsStyled id="grams" name="grams" placeholder="Grams" />
          </DiaryFormGramsConteinerStyled>

          <DiaryFormButton type="submit">
            <DiaryProductsPlusStyled src={plus} alt="plus" />
          </DiaryFormButton>
        </DiaryFormConteiner>
      </Formik>
    </>
  );
}
