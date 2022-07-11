import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import logoMobile from './img/logo-mobile.svg';
import logoTablet from './img/logo-tablet.svg';
import logoDesktop from './img/logo-desktop.svg';

export const Logo = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      {isMobile && !isLoggedIn && <img src={logoMobile} alt="Slim Mom" />}
      {isMobile && isLoggedIn && <img src={logoTablet} alt="Slim Mom" />}
      {isTablet && <img src={logoTablet} alt="Slim Mom" />}
      {isDesktop && <img src={logoDesktop} alt="Slim Mom" />}
    </>
  );
};
