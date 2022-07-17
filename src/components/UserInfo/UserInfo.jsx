import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import {
  UserInfoWrapper,
  StyledLink,
  UserNicName,
  LogoutButton,
} from './UserInfo.styled';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-options';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';


export const UserInfo = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  const onExitClick = () => {
    dispatch(logOut());
    navigateHome();
  }


  return (
    <UserInfoWrapper>
      {isLoggedIn && isMobile && (
        <StyledLink to="/calculator">
          <MdOutlineKeyboardReturn size={20} />
        </StyledLink>
      )}
      <UserNicName>{name}</UserNicName>
      <LogoutButton type="button" onClick={() => onExitClick()}>
        {t('header.exit')}
      </LogoutButton>
    </UserInfoWrapper>
  );
};
