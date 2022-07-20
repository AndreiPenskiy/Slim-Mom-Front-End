import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../redux/auth/auth-options';
import { LoginBackground } from 'components/Background/LoginBackground';
import {
  FormContainer,
  FormTitle,
  Forma,
  FormDiv,
  FormLabel,
  FormInput,
  FormButtonA,
  FormButtonActiveBtn,
  Alert,
} from '../style/FormLoginRegistration.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';
import { useNavigate } from 'react-router-dom';
import { getTempParameters } from 'redux/auth/auth-selectors';
import { getCaloriesCalculator } from 'redux/products/products-selectors';
import { setTempParameters } from 'redux/auth/auth-options';

const RegistrationPage = () => {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const tempParameters = useSelector(getTempParameters);
  const calcCalories = useSelector(getCaloriesCalculator);

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, `${t('validationRegisterForm.label1')}`)
      .max(20)
      .required('Required')
      .matches(/^(?![\d+_@.-]+$)[a-zA-Z0-9+_@.-]*$/),
    email: Yup.string()
      .email(`${t('validationRegisterForm.label2')}`)
      .max(40)
      .required('Required'),
    password: Yup.string()
      .min(8, `${t('validationRegisterForm.label3')}`)
      .max(20)
      .required('Required'),
  });

  let navigate = useNavigate();

  const handleSubmit = async ({ name, email, password }) => {
    const { payload } = await dispath(
      register({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        parameters: tempParameters ? tempParameters : {},
        calculator: calcCalories.calories ? { ...calcCalories } : {},
      })
    );
    await dispath(setTempParameters(null));

    if (payload.user.calories) navigate('/diary');
    else navigate('/calculator');
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <Forma>
            <FormTitle>{t('header.signup')}</FormTitle>
            <FormDiv>
              <FormLabel htmlFor="name">{t('AuthForm.label_1')}</FormLabel>
              <FormInput id="name" name="name" type="text" />
              <ErrorMessage
                name="name"
                render={() => <Alert>{t('notify.alert4')}</Alert>}
              />
            </FormDiv>
            <FormDiv>
              <FormLabel htmlFor="email">{t('AuthForm.label_3')}</FormLabel>
              <FormInput id="email" name="email" type="email" />
              <ErrorMessage
                name="email"
                render={() => <Alert>{t('notify.alert3')}</Alert>}
              />
            </FormDiv>
            <FormDiv>
              <FormLabel htmlFor="password">{t('AuthForm.label_2')}</FormLabel>
              <FormInput id="password" name="password" type="password" />
              <ErrorMessage
                name="password"
                render={() => <Alert>{t('notify.alert2')}</Alert>}
              />
            </FormDiv>
          </Forma>
          {/* <div className="FormButtonContainer"> */}

          <FormButtonActiveBtn type="submit">
            {t('header.buttonReg')}
          </FormButtonActiveBtn>
          <FormButtonA
            href="https://andreipenskiy.github.io/Slim-Mom-Front-End/login"
            role="button"
          >
            {t('header.signin')}
          </FormButtonA>
          {/* </div> */}
        </FormContainer>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <LoginBackground />
    </>
  );
};

export default RegistrationPage;
