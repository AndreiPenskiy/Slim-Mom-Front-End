import { useSelector, useDispatch } from 'react-redux';
import { UserInfoWrapper, UserNicName, LogoutButton } from './UserInfo.styled';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-options';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';

export const UserInfo = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  const onExitClick = () => {
    dispatch(logOut());
    navigateHome();
  };

  return (
    <UserInfoWrapper>
      <UserNicName>{name}</UserNicName>
      <LogoutButton type="button" onClick={() => onExitClick()}>
        {t('header.exit')}
      </LogoutButton>
    </UserInfoWrapper>
  );
};
