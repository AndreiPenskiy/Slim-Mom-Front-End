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
  FormButtonActive,
  FormButton,
  Alert,
} from '../style/FormLoginRegistration.styled';

const RegistrationPage = () => {
  const dispath = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'The name is not entered correctly')
      .max(20)
      .required('Required'),
    email: Yup.string()
      .email('The email is not entered correctly')
      .max(40)
      .required('Required'),
    password: Yup.string()
      .min(8, `Password should be longer than 8 characters`)
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
          <FormTitle >Register</FormTitle>
          <FormDiv >
            <FormLabel htmlFor="name" >
              Name *
            </FormLabel>
            <FormInput id="name" name="name" type="text"  />
            <ErrorMessage
              name="name"
              render={() => (
                <Alert>The name must be at least 3 characters and more than 20</Alert>
              )}
            />
          </FormDiv>
          <FormDiv >
            <FormLabel htmlFor="email" >
              Email *
            </FormLabel>
            <FormInput id="email" name="email" type="email"  />
            <ErrorMessage
              name="email"
              render={() => <Alert >Email should not exceed 40 characters</Alert>}
            />
          </FormDiv>
          <FormDiv>
            <FormLabel htmlFor="password" >
              Password *
            </FormLabel>
            <FormInput
              id="password"
              name="password"
              type="password"
            />
            <ErrorMessage
              name="password"
              render={() => <Alert>Password should be longer than 8 characters</Alert>}
            />
          </FormDiv>
          </Forma>
          {/* <div className="FormButtonContainer"> */}
          <FormButtonActive
            href="http://localhost:3000/Slim-Mom-Front-End/login"
          
            role="button"
          >
            Login
          </FormButtonActive>
          <FormButton type="submit" >
            Register
          </FormButton>
          {/* </div> */}
        </FormContainer>
      </Formik>
      <LoginBackground />
    </>
  );
};

export default RegistrationPage;
