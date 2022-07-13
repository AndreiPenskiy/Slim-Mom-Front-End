import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../redux/auth/auth-options';
import '../style/FormLoginRegistration.css';
import { Background } from 'components/Background/Background';

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
        <Form className="formContainer">
          {/* <section className="container"> */}
          <div className="form">
            <h1 className="formTitle">Sign in</h1>
            <div div className='formDiv'>
              <label htmlFor="email" className="formLabel">
                Email *
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="formInput"
              />
            </div>
            <div div className='formDiv'>
              <label htmlFor="password" className="formLabel">
                Password *
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="formInput"
              />
              {(
              <ErrorMessage
                name="email"
                render={() => (
                  <p className="alert">Incorrect email or password entered</p>
                )}
              />) ||  (<ErrorMessage
                name="password"
                render={() => (
                  <p className="alert">Incorrect email or password entered</p>
                )}
              />
              )}
            </div>
          </div>
          {/* </section> */}
          {/* <div className="FormButtonContainer"> */}
          <button type="submit" className="FormButtonActive">
            Login
          </button>
          <a
            href="http://localhost:3000/Slim-Mom-Front-End/registration"
            className="FormButton"
            role="button"
          >
            Register
          </a>
          {/* </div> */}
        </Form>
    </Formik>
      <Background />
      
      </>
  );
};

export default LoginPage;