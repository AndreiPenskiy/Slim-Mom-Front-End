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

export const UserInfo = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <UserInfoWrapper>
      {isLoggedIn && isMobile && (
        <StyledLink to="/calculator">
          <MdOutlineKeyboardReturn size={20} />
        </StyledLink>
      )}
      <UserNicName>{name}</UserNicName>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Exit
      </LogoutButton>
    </UserInfoWrapper>
  );
};
