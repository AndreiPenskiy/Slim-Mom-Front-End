import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import { StyledNav, StyledNavLink } from './Navigation.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';

export const Navigation = () => {

  const { t } = useTranslation();

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
          <StyledNavLink to="/login">{t("header.signin")}</StyledNavLink>
          <StyledNavLink to="/registration">{t("header.signup")}</StyledNavLink>
        </StyledNav>
      )}
    </>
  );
};
