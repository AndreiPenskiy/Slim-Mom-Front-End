import styled from 'styled-components';

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
`;

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
