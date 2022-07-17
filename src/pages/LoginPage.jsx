import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { t } = useTranslation();
  const dispath = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string().email().max(40).required('Required'),
    password: Yup.string().min(8).max(20).required('Required'),
  });

  let navigate = useNavigate();

  const handleSubmit = ({ email, password }) => {
    dispath(logIn({ email, password }));
    navigate('/diary');
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          {/* <section className="container"> */}
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
              ) || (
                <ErrorMessage
                  name="password"
                  render={() => <Alert>{t('notify.alert1')}</Alert>}
                />
              )}
            </FormDiv>
          </Forma>
          {/* </section> */}
          {/* <div className="FormButtonContainer"> */}
          <FormButtonActiveBtn type="submit">
            {t('header.signin')}
          </FormButtonActiveBtn>
          <FormButtonA
            href="http://localhost:3000/Slim-Mom-Front-End/registration"
            role="button"
          >
            {t('header.signup')}
          </FormButtonA>
          {/* </div> */}
        </FormContainer>
      </Formik>
      <LoginBackground />
    </>
  );
};

export default LoginPage;
