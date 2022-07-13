import styled from 'styled-components';
import BackgroundStr from './backgroundImages/str.png';
import BackgroundL from './backgroundImages/l.png';
import BackgroundB from './backgroundImages/b.png';
import BackgroundV from './backgroundImages/v.png';
import BackgroundStrTab from './backgroundImages/strtab.png';
import BackgroundLTab from './backgroundImages/ltab.png';
import BackgroundBTab from './backgroundImages/btab.png';
import BackgroundVTab from './backgroundImages/vtab.png';

export const BackgroundImage = styled.div`
  display: none;
  width: 100px;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: -2;
  @media screen and (min-width: 768px) {
    display: block;
    width: 768px;
    height: 1024px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 850px;
  }
`

export const S = styled.div`
  display: none;

@media screen and (min-width: 768px) {
  
    position: absolute;
    display: block;
    background-image: url(${BackgroundStrTab});
    background-size: cover;
    width: 208px;
    height: 203px;
    left: 510px;
    top: 590px;
    z-index:2;
  }

@media screen and (min-width: 1280px) {
    background-image: url(${BackgroundStr});
         top: 478px;
    left: 907px;
    width: 362px;
    height: 374px;
    z-index:2;
  }

`

export const L = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    background-image: url(${BackgroundLTab});
    background-repeat: no-repeat;
    background-size: cover;
    width: 531px;
    height: 602px;
    left: 0px;
    bottom: 0px;
    z-index: 3;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundL});
    left: 338px;
    top: 0;
    background-size: unset;
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
    width: 740px;
    height: 527px;
      left: 298px;
    top: 506px;
    z-index:3;

  
}
@media screen and (min-width: 1280px) {
  
    background-image: url(${BackgroundB});
    background-size: unset;
 top: -31px;
        left: 783px;
    width: 773px;
    height: 552px;
    z-index:2;
  }

`

export const V = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    background-image: url(${BackgroundVTab});
    background-repeat: no-repeat;
    background-size: contain;
    width: 553px;
    height: 750px;
    left: 217px;
    top: 426px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${BackgroundV});

    top: 34px;
    left: 678px;
    width: 603px;
    height: 816px;
    z-index: 1;
  }
`