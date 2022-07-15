/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import { StyledNav, StyledNavLink } from './Navigation.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';
import LocaleContext from '../../context';

export const Navigation = () => {
  
  const { locale, setLocale } = useContext(LocaleContext);

  const { t, i18n } = useTranslation();
  const changeLanguageUa = (lang) => {
    i18n.changeLanguage(lang);
    setLocale("uk");
  };

  const changeLanguageEn = (lang) => {
    i18n.changeLanguage(lang);
    setLocale("en-gb");
  };

  const isLoggedIn = useSelector(getLoggedIn);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      {isLoggedIn && isDesktop && (
        <StyledNav>
          <StyledNavLink to="/diary">{t("MobileMenu.page1")}</StyledNavLink>
          <StyledNavLink to="/calculator">{t("MobileMenu.page2")}</StyledNavLink>
        </StyledNav>
      )}
      {!isLoggedIn && (
        <>
          <button type='button' onClick={() => changeLanguageUa("ua")}>UA</button>
          <button type='button' onClick={() => changeLanguageEn("en")}>EN</button>
          
        <StyledNav>
          <StyledNavLink to="/login">{t("header.signin")}</StyledNavLink>
          <StyledNavLink to="/registration">{t("header.signup")}</StyledNavLink>
        </StyledNav>
        </>
      )}
    </>
  );
};