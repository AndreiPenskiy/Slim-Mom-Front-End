import { ErrorMessage, Formik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
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

export default function DiaryAddProductForm() {
  const isLoggedIn = useSelector(getLoggedIn);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  let navigate = useNavigate();

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
            <FormError name="product" />
          </DiaryFormProductConteinerStyled>
          <DiaryFormGramsConteinerStyled>
            <DiaryFormGramsLabelStyled htmlFor="grams">
              Grams
            </DiaryFormGramsLabelStyled>
            <DiaryFormGramsStyled id="grams" name="grams" />
            <FormError name="grams" />
          </DiaryFormGramsConteinerStyled>
          <DiaryFormButtonConteiner>
            <DiaryFormButton type="submit">Add</DiaryFormButton>
          </DiaryFormButtonConteiner>
        </DiaryFormConteiner>
      </Formik>
    </>
  );
}
