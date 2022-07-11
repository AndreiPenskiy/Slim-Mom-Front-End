import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../redux/auth/auth-options';
import '../style/FormLoginRegistration.css';
import { PageContainer } from 'components/PageContainer/PageContainer';

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
    <PageContainer>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className="formContainer">
        <div className="form">
          <h1 className="formTitle">Register</h1>
          <div>
            <label htmlFor="name" className="formLabel">
              Name *
            </label>
            <Field id="name" name="name" type="text" className="formInput" />
            <ErrorMessage
              name="name"
              render={() => (
                <p className='alert'>The name must be at least 3 characters and more than 20</p>
              )}
            />
          </div>
          <div>
            <label htmlFor="email" className="formLabel">
              Email *
            </label>
            <Field id="email" name="email" type="email" className="formInput" />
            <ErrorMessage
              name="email"
              render={() => <p className='alert'>Email should not exceed 40 characters</p>}
            />
          </div>
          <div>
            <label htmlFor="password" className="formLabel">
              Password *
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="formInput"
            />
            <ErrorMessage
              name="password"
              render={() => <p className='alert'>Password should be longer than 8 characters</p>}
            />
          </div>
          </div>
          {/* <div className="FormButtonContainer"> */}
            <a href="http://localhost:3000/Slim-Mom-Front-End/login" className="FormButtonActive"  role="button">
            Login                     
            </a>
            <button  type="submit" className="FormButton">
              Register
            </button>
          {/* </div> */}
        </Form>
      </Formik>
    </PageContainer>
  );
};

export default RegistrationPage;