import styled from 'styled-components';
import gradient from '../../icons/gradient.jpg';

export const DiaryProductsItemStyled = styled.li`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  :not(:first-child) {
    margin-top: 16px;
  }
  :last-child {
    opacity: 0.5;
    /* background-image: linear-gradient(
        to bottom,
        hsl((255, 255, 255, 0.5), 60%, 65%),
        hsl((255, 255, 255, 0.5), 64%, 60%)
      ),
      url(${gradient}); */
    /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 1)
    ); */
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      #ffffff 42.19%,
      url(${gradient})
    );
  }
`;
// export const DiaryProductsGradientStyled = styled.div`
//   /* opacity: 0.5; */
//   background: linear-gradient(
//     to bottom,
//     rgba(255, 200, 255, 0.1),
//     rgba(255, 255, 122, 0.9)
//   );
// `;

export const DiaryProductsItemProductStyled = styled.p`
  width: 240px;
  margin-right: 48px;
  position: relative;
  padding-bottom: 20px;
  ::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid #e0e0e0;
  }
`;

export const DiaryProductsItemCaloriestStyled = styled.p`
  width: 107px;
  margin-right: 32px;
  text-align: end;
  position: relative;
  padding-bottom: 20px;
  ::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid #e0e0e0;
  }
`;

export const DiaryProductsItemWeightStyled = styled.p`
  display: block;
  width: 106px;
  margin-right: 32px;
  text-align: end;
  position: relative;
  padding-bottom: 20px;
  ::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid #e0e0e0;
  }
`;

export const DiaryProductsItemBtnDeleteStyled = styled.button`
  padding-top: 0px;
  width: 12px;
  height: 25px;
  position: relative;
  cursor: pointer;
  border: 0px;
  background-color: white;
  :hover,
  :focus {
    background-color: #ffffff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #fc842d;
    border-radius: 8px;
    outline: none;
    width: 12px;
  }
`;

export const DiaryProductsImgDeleteStyled = styled.img`
  width: 12px;
  height: 12px;
  color: #9b9faa;
  position: absolute;
  top: 2px;
  left: 0;
  transform: translateY(50%);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
