import styled from 'styled-components';
import { Field, Form } from 'formik';

export const DiaryFormConteiner = styled(Form)`
  display: flex;
  /* border: none; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const DiaryFormProductStyled = styled(Field)`
  width: 240px;
  border: none;
  ::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
`;

export const DiaryFormProductConteinerStyled = styled.div`
  width: 240px;
  position: relative;
  padding-bottom: 20px;
  margin-right: 50px;
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

export const DiaryFormGramsStyled = styled(Field)`
  width: 105px;
  border: none;
  ::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-align: end;
  }
`;

export const DiaryFormGramsConteinerStyled = styled.div`
  width: 107px;
  position: relative;
  padding-bottom: 20px;
  margin-right: 60px;
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

export const DiaryFormButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: #4caf50;
  border-radius: 50%;
  cursor: pointer;
  border: none;
`;
