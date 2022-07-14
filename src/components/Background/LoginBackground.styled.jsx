import styled from 'styled-components';
import BackgroundStr from './backgroundImages/str.png';
import BackgroundL from './backgroundImages/l.png';
import BackgroundB from './backgroundImages/b.png';
import BackgroundV from './backgroundImages/v.png';
import BackgroundStrTab from './backgroundImages/strtab.png';
import BackgroundLlTab from './backgroundImages/lltab.png';
import BackgroundBTab from './backgroundImages/btab.png';
import BackgroundVTab from './backgroundImages/vtab.png';

export const BackgroundImage = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1000;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: block;
    min-height: 1024px;
  }

  @media screen and (min-width: 1280px) {
    min-height: 850px;
  }
`;

export const S = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundStrTab});
    display: block;
    position: absolute;
    background-size: cover;
    top: 442px;
    right: -86px;
    width: 370px;
    height: 382px;
    z-index: 4;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundStr});
    top: 458px;
    right: 2px;
    width: 362px;
    height: 374px;
    z-index: 2;
  }
`;

export const L = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundLlTab});
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    top: 0px;
    right: 50px;
    width: 740px;
    height: 842px;
    z-index: 3;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundL});
    background-size: 746px;
    top: 0;
    right: 195px;
    width: 746px;
    height: 846px;
    z-index: 3;
  }
`;
export const B = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    background-image: url(${BackgroundBTab});
    background-size: contain;
    background-repeat: no-repeat;
    top: 533px;
    right: -212px;
    width: 740px;
    height: 527px;
    z-index: 3;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundB});
    background-size: unset;
    top: -30px;
    right: -287px;
    width: 773px;
    height: 552px;
    z-index: 2;
  }
`;

export const V = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundVTab});
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    top: 428px;
    right: -0px;
    width: 553px;
    height: 750px;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundV});
    top: 34px;
    right: 0;
    width: 603px;
    height: 816px;
    z-index: 1;
  }
`;
