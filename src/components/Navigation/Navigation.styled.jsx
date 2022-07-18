import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (min-width: 1280px) {
    height: 30px;
    margin-left: 20px;
    border-left: 2px solid #e0e0e0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: Gotham Pro;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;

  &:not(:last-child) {
    margin-right: 16px;

    @media (min-width: 1280px) {
      padding-left: 20px;
    }
  }

  &.active {
    color: #212121;
  }
`;
