import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { PageContainer } from 'components/PageContainer/PageContainer';
import {
  StyledAppBar,
  StyledHeader,
  BurgerMenu,
  BurgerButton,
  StyledNavLink,
} from './AppBar.styled';
import { UserInfoSection } from 'components/UserInfo/UserInfo.styled';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { LoadingPage } from 'components/LoadingPage/LoadingPage';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';

export const AppBar = () => {
  const { t } = useTranslation();
  const [burgerShown, setBurgerShown] = useState(false);
  const isLoggedIn = useSelector(getLoggedIn);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const toggleBurgerMenu = () => {
    setBurgerShown(!burgerShown);
  };

  return (
    <>
      <StyledAppBar>
        <PageContainer>
          <StyledHeader>
            {isLoggedIn ? (
              <Link to="/diary">
                <Logo />
              </Link>
            ) : (
              <Link to="/">
                <Logo />
              </Link>
            )}
            <Navigation />
            {isLoggedIn && !isMobile && <UserInfo />}
            {isLoggedIn && !isDesktop && !burgerShown && (
              <BurgerButton type="button" onClick={toggleBurgerMenu}>
                <GiHamburgerMenu size={24} />
              </BurgerButton>
            )}
            {isLoggedIn && !isDesktop && burgerShown && (
              <BurgerButton type="button" onClick={toggleBurgerMenu}>
                <IoClose size={24} />
              </BurgerButton>
            )}
          </StyledHeader>
        </PageContainer>
        {isLoggedIn && !isDesktop && burgerShown && (
          <BurgerMenu>
            <StyledNavLink to="/diary" onClick={toggleBurgerMenu}>
              {t("MobileMenu.page1")}
            </StyledNavLink>
            <StyledNavLink to="/calculator" onClick={toggleBurgerMenu}>
              {t("MobileMenu.page2")}
            </StyledNavLink>
          </BurgerMenu>
        )}
        {isLoggedIn && isMobile && (
          <UserInfoSection>
            <PageContainer>
              <UserInfo />
            </PageContainer>
          </UserInfoSection>
        )}
      </StyledAppBar>

      <Outlet />
      <Modal/>
      <LoadingPage/>
    </>
  );
};
