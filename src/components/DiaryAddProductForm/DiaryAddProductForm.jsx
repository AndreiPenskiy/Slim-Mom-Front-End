import { Formik } from 'formik';
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
} from './DiaryAddProductForm.styled';
import plus from '../../icons/plus.svg';

export default function DiaryAddProductForm() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const DiaryAddProductSchema = Yup.object().shape({
    product: Yup.string().required("Це поле є обов'язковим!"),
    grams: Yup.number()
      .min(1, 'Значення має бути більше 0!')
      .max(1000, 'Значення має бути меньшим 1000!')
      .required("Це поле є обов'язковим!"),
  });

  return (
    <>
      {!isMobile && (
        <Formik
          initialValues={{
            product: '',
            grams: '',
          }}
          validationSchema={DiaryAddProductSchema}
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
      )}
    </>
  );
}
