import { LoginBackground } from 'components/Background/LoginBackground';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Toast from 'components/Toast/Toast';

const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <Toast />
      <LoginBackground />
    </>
  );
};

export default RegistrationPage;
