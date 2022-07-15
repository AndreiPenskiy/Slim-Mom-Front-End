import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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


const RegistrationPage = () => {

  const { t } = useTranslation();
  const dispath = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, `${t("validationRegisterForm.label1")}`)
      .max(20)
      .required('Required'),
    email: Yup.string()
      .email(`${t("validationRegisterForm.label2")}`)
      .max(40)
      .required('Required'),
    password: Yup.string()
      .min(8, `${t("validationRegisterForm.label3")}`)
      .max(20)
      .required('Required'),
  });

  const handleSubmit = ({
    name,
    email,
    password,
    resetForm,
    setSubmitting,
  }) => {
    dispath(register({ name, email, password }));
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 100);
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
        <Forma >
          <FormTitle >{t("header.signup")}</FormTitle>
          <FormDiv >
            <FormLabel htmlFor="name" >
              {t("AuthForm.label_1")}
            </FormLabel>
            <FormInput id="name" name="name" type="text"  />
            <ErrorMessage
              name="name"
              render={() => (
                <Alert>{t("notify.alert4")}</Alert>
              )}
            />
          </FormDiv>
          <FormDiv >
            <FormLabel htmlFor="email" >
              {t("AuthForm.label_3")}
            </FormLabel>
            <FormInput id="email" name="email" type="email"  />
            <ErrorMessage
              name="email"
              render={() => <Alert >{t("notify.alert3")}</Alert>}
            />
          </FormDiv>
          <FormDiv>
            <FormLabel htmlFor="password" >
              {t("AuthForm.label_2")}
            </FormLabel>
            <FormInput
              id="password"
              name="password"
              type="password"
            />
            <ErrorMessage
              name="password"
              render={() => <Alert>{t("notify.alert2")}</Alert>}
            />
          </FormDiv>
          </Forma>
          {/* <div className="FormButtonContainer"> */}

          <FormButtonActiveBtn type="submit" >
            {t("header.signup")}
          </FormButtonActiveBtn>
          <FormButtonA
            href="http://localhost:3000/Slim-Mom-Front-End/login"          
            role="button"
          >
            {t("header.signin")}
          </FormButtonA>
          {/* </div> */}
        </FormContainer>
      </Formik>
      <LoginBackground />
    </>
  );
};

export default RegistrationPage;
