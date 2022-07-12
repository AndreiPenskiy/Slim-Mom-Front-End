import styled from 'styled-components';

import bgImageTablet from '../../images/tablet-right-side-bg.png';
import bgImageDescktop from '../../images/desktop-right-side-bg.png';

export const RightSideSection = styled.div`
  padding-top: 40px;
  padding-bottom: 54px;
  background-color: #f0f1f3;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;

    background-image: url(${bgImageTablet});
    background-repeat: no-repeat;
    background-position: top -12px left 399px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 292px;
    padding-bottom: 193px;

    position: absolute;
    right: 0;
    top: 0;

    background-image: url(${bgImageDescktop});

    background-position: top 35px left 12px;
  }
`;

export const Container = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-left: 37px;
    padding-right: 37px;

    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    padding-left: 106px;
    padding-right: 106px;

    width: 517px;
  }
`;

export const Summary = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 288px;
    margin-right: 74px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: #212121;

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;

  font-family: 'Verdana';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: #9b9faa;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const DietDescription = styled.p`
  font-family: 'Verdana';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;
