import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    align-items: flex-end;
    padding-top: 80px;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  z-index: 100;
  padding-top: 60px;
  text-align: center;
  background-color: #264061;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`;

export const BurgerButton = styled.div`
  background-color: transparent;
  border: none;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: Verdana;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &.active {
    color: #ffffff;
  }
`;
