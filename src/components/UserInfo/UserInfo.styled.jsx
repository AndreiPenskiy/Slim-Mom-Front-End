import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserInfoSection = styled.div`
  background-color: #e5e5e5;

  @media (min-width: 768px) {
    background-color: transparent;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: 50px;
  }

  @media (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
`;

export const UserNicName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding-right: 17px;
  font-family: Gotham Pro;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  color: #212121;
  border-right: 2px solid #e0e0e0;

  @media (max-width: 767px) {
    margin-left: auto;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  padding: 0;
  font-family: Gotham Pro;
  font-weight: 700;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  color: #9b9faa;
  background-color: transparent;
  border: none;
  outline: none;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    color: #212121;
  }
`;
