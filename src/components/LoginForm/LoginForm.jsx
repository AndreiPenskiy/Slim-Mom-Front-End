import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-options';
import {
  FormSection,
  FormContainer,
  FormTitle,
  Forma,
  FormDiv,
  FormLabel,
  FormInput,
  FormButtonContainer,
  FormButtonActiveBtn,
  FormButtonA,
  Alert,
} from './FormLoginRegistration.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';
import { toggleLoading } from 'redux/loader/spinner-slice';

const LoginForm = () => {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const loading = useSelector(toggleLoading);

  let navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email(`${t('validationRegisterForm.label2')}`)
      .max(40)
      .required('Required'),
    password: Yup.string()
      .trim()
      .min(8, `${t('validationRegisterForm.label3')}`)
      .max(20)
      .matches(/^\S*$/, `${t('validationRegisterForm.label4')}`)
      .required('Required'),
  });

  const handleSubmit = ({ email, password }) => {
    dispath(loading);
    dispath(logIn({ email, password }));
    dispath(loading);
  };

  const handleClick = () => {
    navigate('/registration');
  };

  return (
    <FormSection>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <Forma>
            <FormTitle>{t('header.signin')}</FormTitle>
            <FormDiv>
              <FormLabel htmlFor="email">{t('AuthForm.label_3')}</FormLabel>
              <FormInput
                id="email"
                name="email"
                type="email"
                autoComplete="off"
              />
            </FormDiv>
            <FormDiv>
              <FormLabel htmlFor="password">{t('AuthForm.label_2')}</FormLabel>
              <FormInput
                id="password"
                name="password"
                type="password"
                autoComplete="off"
              />
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
          <FormButtonContainer>
            <FormButtonActiveBtn type="submit">
              {t('header.buttonLogin')}
            </FormButtonActiveBtn>
            <FormButtonA onClick={handleClick} role="button">
              {t('header.signup')}
            </FormButtonA>
          </FormButtonContainer>
        </FormContainer>
      </Formik>
    </FormSection>
  );
};

export default LoginForm;
