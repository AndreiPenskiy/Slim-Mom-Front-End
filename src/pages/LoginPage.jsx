import { LoginBackground } from 'components/Background/LoginBackground';
import LoginForm from 'components/LoginForm/LoginForm';
import Toast from 'components/Toast/Toast';

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <Toast />
      <LoginBackground />
    </>
  );
};

export default LoginPage;
