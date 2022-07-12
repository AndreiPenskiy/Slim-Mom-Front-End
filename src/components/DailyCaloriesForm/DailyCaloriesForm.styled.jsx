import styled from 'styled-components';
import { Form, Field } from 'formik';

export const DailyCaloriesFormContainer = styled.div`
  width: 280px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 704px;
    margin-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
    margin-top: 147px;
  }
`;
export const FormStyled = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const FieldStyled = styled(Field)`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 4px 0;
  width: 240px;

  ::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  @media screen and (max-width: 767px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 0;
    margin-right: 30px;
    margin-top: 20px;
  }
`;
export const FieldStyledMobil = styled(Field)`
  display: block;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 4px 0;
  width: 240px;
  margin-top: 32px;

  ::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  @media screen and (min-width: 768px) {
    display: none;
    width: 240px;
  }
`;
export const FieldStyledTab = styled(Field)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 20px 0;
    width: 240px;

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
export const FieldRadioStyled = styled.div`
  display: block;
  width: 240px;
`;
export const FieldRadioGrup = styled(Field)`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

export const RadioStyled = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  margin-right: 4px;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  display: grid;
  place-content: center;
  ::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #fc842d;
  }
  :checked::before {
    transform: scale(1);
  }
`;
export const DailyCaloriesFormTitle = styled.h1`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #212121;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
  }
`;
export const DailyCaloriesFormButton = styled.button`
  padding: 13px 37px 13px 37px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: block;
  align-items: center;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: #fc842d;
  background: #ffffff;
  border: 2px solid #fc842d;
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;

  :hover,
  :focus {
    padding: 13px 51px 13px 50px;
    color: #ffffff;
    background-color: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border-radius: 30px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin: auto;
    margin-top: 60px;
  }
`;
export const ButtonCont = styled.div`
  width: 100%;
`;
export const ErrorMessageContainer = styled.div`
  color: red;
  position: absolute;
  top: 175px;
  @media screen and (min-width: 768px) {
    top: 322px;
  }
`;
export const Radiolabel = styled.label`
  display: flex;
  align-items: baseline;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-top: 8px;
`;
