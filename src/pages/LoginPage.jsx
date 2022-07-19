import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from '../redux/auth/auth-options';
import { LoginBackground } from 'components/Background/LoginBackground';
import {
  FormContainer,
  FormTitle,
  Forma,
  FormDiv,
  FormLabel,
  FormInput,
  FormButtonActiveBtn,
  FormButtonA,
  Alert,
} from '../style/FormLoginRegistration.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';
import { toggleLoading } from 'redux/loader/spinner-slice';

const LoginPage = () => {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const loading = useSelector(toggleLoading);
  const schema = Yup.object().shape({
    email: Yup.string().email().max(40).required('Required'),
    password: Yup.string().min(1).max(20).required('Required'),
  });

  const handleSubmit = ({ email, password }) => {
    dispath(loading);
    dispath(logIn({ email, password }));
    dispath(loading);
  };

  return (
    <>
      <Formik
        initialValues={{ email:'', password:'' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <Forma>
            <FormTitle>{t('header.signin')}</FormTitle>
            <FormDiv>
              <FormLabel htmlFor="email">{t('AuthForm.label_3')}</FormLabel>
              <FormInput id="email" name="email" type="email" />
            </FormDiv>
            <FormDiv>
              <FormLabel htmlFor="password">{t('AuthForm.label_2')}</FormLabel>
              <FormInput id="password" name="password" type="password" />
              {(
                <ErrorMessage
                  name="email"
                  render={() => <Alert>{t('notify.alert1')}</Alert>}
                />
              ) && (
                <ErrorMessage
                  name="password"
                  render={() => <Alert>{t('notify.alert1')}</Alert>}
                />
              )}
            </FormDiv>
          </Forma>
          <FormButtonActiveBtn type="submit">
            {t('header.buttonLogin')}
          </FormButtonActiveBtn>
          <FormButtonA
            href="https://andreipenskiy.github.io/Slim-Mom-Front-End/registration"
            role="button"
          >
            {t('header.signup')}
          </FormButtonA>
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

export default LoginPage;
