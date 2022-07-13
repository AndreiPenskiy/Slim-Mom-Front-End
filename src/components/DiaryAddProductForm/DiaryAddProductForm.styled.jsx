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
  text-align: end;
`;

export const DiaryFormProductStyled = styled(Field)`
  height: 20px;
  width: 240px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  /* ::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  } */
`;

export const DiaryFormProductConteinerStyled = styled.div`
  width: 240px;
  /* position: relative; */
  /* padding-bottom: 20px; */
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
`;

export const DiaryFormGramsConteinerStyled = styled.div`
  width: 107px;
  /* position: relative; */
  /* padding-bottom: 20px; */
  margin-right: 60px;
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

export const DiaryFormButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: #fc842d;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  :hover {
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
`;

export const DiaryProductsPlusStyled = styled.img`
  margin-left: 8px;
  width: 20px;
  height: 20px;
  font-size: bold;
`;

export const DiaryFormProductLabelStyled = styled.label`
  width: 107px;
  margin-right: 73px;
`;
