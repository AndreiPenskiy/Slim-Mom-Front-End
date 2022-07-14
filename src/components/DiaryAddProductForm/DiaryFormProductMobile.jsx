import { ErrorMessage, Formik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
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
} from './DiaryAddProductForm.styled';

export default function DiaryAddProductForm() {
  let navigate = useNavigate();

  const DiaryAddProductSchema = Yup.object().shape({
    product: Yup.string().required("Це поле є обов'язковим!"),
    grams: Yup.number()
      .min(1, 'Значення має бути більше 0!')
      .max(1000, 'Значення має бути меньшим 1000!')
      .required("Це поле є обов'язковим!"),
  });
  return (
    <>
      <Formik
        initialValues={{
          product: '',
          grams: '',
        }}
        validationSchema={DiaryAddProductSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('values', values);
          navigate('/diary', { replace: true });
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
            <DiaryFormGramsLabelStyled htmlFor="grams">
              Grams
            </DiaryFormGramsLabelStyled>
            <DiaryFormGramsStyled id="grams" name="grams" />
          </DiaryFormGramsConteinerStyled>
          {(
            <ErrorMessage
              name="product"
              render={() => <p className="alert">Incorrect product entered</p>}
            />
          ) || (
            <ErrorMessage
              name="grams"
              render={() => <p className="alert">Incorrect grams entered</p>}
            />
          )}
          <DiaryFormButtonConteiner>
            <DiaryFormButton type="submit">Add</DiaryFormButton>
          </DiaryFormButtonConteiner>
        </DiaryFormConteiner>
      </Formik>
    </>
  );
}
