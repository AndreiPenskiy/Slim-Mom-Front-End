import styled from 'styled-components';
import { Field, Form } from 'formik';

export const DiaryFormConteiner = styled(Form)`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;

  @media screen and (max-width: 767px) {
    margin-left: 20px;
    padding-top: 80px;
    flex-direction: column;
  }
`;

export const DiaryFormProductStyled = styled(Field)`
  height: 20px;
  width: 240px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  :focus {
    outline: none;
    border-bottom: 1px solid #fc842d;

    + label {
      color: #fc842d;
      font-size: 10px;
      margin-bottom: 10px;
      margin-top: -10px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    margin-bottom: 32px;
    /* ::placeholder {
      font-family: 'Verdana';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      color: #9b9faa; */
    /* } */
  }
`;

export const DiaryFormProductConteinerStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 240px;
  /* position: relative; */
  margin-right: 50px;
  /* ::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid #e0e0e0;
  } */
`;

export const DiaryFormGramsStyled = styled(Field)`
  height: 20px;
  width: 107px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
  /* ::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-align: end;
  } */
  :focus {
    outline: none;
    border-bottom: 1px solid #fc842d;

    + label {
      color: #fc842d;
      font-size: 10px;
      margin-bottom: 10px;
      margin-top: -10px;
    }
  }
`;

export const DiaryFormGramsConteinerStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 107px;
  /* position: relative; */
  margin-right: 60px;
  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
  /* ::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    border: 1px solid #e0e0e0;
  } */
`;
export const DiaryFormButtonConteiner = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DiaryFormButton = styled.button`
  width: 48px;
  height: 48px;
  background: #fc842d;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: transform 500ms linear;
  :hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  @media screen and (max-width: 767px) {
    width: 176px;
    height: 44px;
    left: 72px;
    top: 340px;
    background: #fc842d;
    border-radius: 30px;

    font-family: 'Verdana';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;

export const DiaryProductsPlusStyled = styled.img`
  margin-left: 6px;
  width: 24px;
  height: 24px;
  font-size: bold;
`;

export const DiaryFormProductLabelStyled = styled.label`
  // width: 107px;
  // margin-right: 73px;
`;

export const DiaryFormGramsLabelStyled = styled.label`
  margin-right: 54px;
`;

export const ErrorText = styled.p`
  color: red;
  margin: -17px;
  position: absolute;
  padding-left: 20px;
`;
