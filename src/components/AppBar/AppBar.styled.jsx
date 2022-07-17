import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppBar = styled.div`
  border-bottom: 2px solid #e0e0e0;

  @media (min-width: 1280px) {
    border-bottom: none;
  }
`;

export const StyledHeader = styled.header`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 16px;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    align-items: flex-end;
    padding-top: 80px;
    padding-bottom: 0;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1200px;
  z-index: 100;
  padding-top: 60px;
  text-align: center;
  background-color: #264061;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`;

export const BurgerButton = styled.div`
  margin-left: auto;
  background-color: transparent;
  border: none;

  @media (min-width: 768px) {
    margin-left: 0;
  }
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
