import styled from 'styled-components';
import BackgroundStrawberries from './backgroundImages/strawberries.png';
import BackgroundLeaf from './backgroundImages/leaf.png';
import BackgroundBanana from './backgroundImages/banana.png';
import BackgroundVector from './backgroundImages/vector.png';
import BackgroundStrawberriesTab from './backgroundImages/strawberriestab.png';
import BackgroundLeafTab from './backgroundImages/leaftab.png';
import BackgroundBananaTab from './backgroundImages/bananatab.png';
import BackgroundVectorTab from './backgroundImages/vectortab.png';

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

export const Strawberries = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundStrawberriesTab});
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    bottom: 213px;
    right: 65px;
    width: 265px;
    height: 273px;
    z-index: 2;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundStrawberries});
    bottom: 0px;
    right: 2px;
    width: 362px;
    height: 374px;
    z-index: 2;
  }
`;

export const Leaf = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundLeafTab});
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 602px 531px;
    bottom: -40px;
    width: 531px;
    height: 602px;
    z-index: 3;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundLeaf});
    background-size: 746px;
    bottom: 0px;
    right: 195px;
    width: 746px;
    height: 846px;
    z-index: 3;
  }
`;
export const Banana = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    background-image: url(${BackgroundBananaTab});
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -20px;
    right: -212px;
    width: 740px;
    height: 527px;
    z-index: 3;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundBanana});
    background-size: unset;
    bottom: 345px;
    right: -287px;
    width: 773px;
    height: 552px;
    z-index: 2;
  }
`;

export const Vector = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundVectorTab});
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    bottom: -152px;
    right: -0px;
    width: 553px;
    height: 750px;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundVector});
    bottom: 0px;
    right: 0;
    width: 603px;
    height: 816px;
    z-index: 1;
  }
`;
