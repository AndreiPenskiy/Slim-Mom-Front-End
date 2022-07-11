import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import { StyledNav, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      {isLoggedIn && isDesktop && (
        <StyledNav>
          <StyledNavLink to="/diary">Diary</StyledNavLink>
          <StyledNavLink to="/calculator">Calculator</StyledNavLink>
        </StyledNav>
      )}
      {!isLoggedIn && (
        <StyledNav>
          <StyledNavLink to="/login">Sign in</StyledNavLink>
          <StyledNavLink to="/registration">Registration</StyledNavLink>
        </StyledNav>
      )}
    </>
  );
};
