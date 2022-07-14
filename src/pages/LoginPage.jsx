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

const LoginPage = () => {
  const dispath = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string().email().max(40).required('Required'),
    password: Yup.string().min(8).max(20).required('Required'),
  });

  const handleSubmit = ({ email, password, resetForm }) => {
    dispath(logIn({ email, password }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer >
          {/* <section className="container"> */}
          <Forma>
            <FormTitle>Sign in</FormTitle>
            <FormDiv>
              <FormLabel htmlFor="email">
                Email *
              </FormLabel>
              <FormInput
                id="email"
                name="email"
                type="email"
              />
            </FormDiv>
            <FormDiv>
              <FormLabel htmlFor="password">
                Password *
              </FormLabel>
              <FormInput
                id="password"
                name="password"
                type="password"
              />
              {(
                <ErrorMessage
                  name="email"
                  render={() => (
                    <Alert >Incorrect email or password entered</Alert>
                  )}
                />
              ) || (
                <ErrorMessage
                  name="password"
                  render={() => (
                    <Alert >Incorrect email or password entered</Alert>
                  )}
                />
              )}
            </FormDiv>
          </Forma>
          {/* </section> */}
          {/* <div className="FormButtonContainer"> */}
          <FormButtonActiveBtn type="submit">
            Login
          </FormButtonActiveBtn>
          <FormButtonA
            href="http://localhost:3000/Slim-Mom-Front-End/registration"
            role="button"
          >
            Register
          </FormButtonA>
          {/* </div> */}
        </FormContainer>
      </Formik>
      <LoginBackground />
    </>
  );
};

export default LoginPage;
