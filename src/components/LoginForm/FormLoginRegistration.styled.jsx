import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormSection = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    padding-top: 160px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 160px;
  }
`;

export const FormContainer = styled(Form)`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 16px;
    margin: 0;
  }
  @media (min-width: 768px) {
    width: 1280px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 60px;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #fc842d;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Forma = styled.div`
  width: 285px;
  margin-bottom: 60px;

  /* @media screen and(min-width: 768px) {
    margin-top: 178px;
  } */

  /* @media screen and (min-width: 1280px) {
    margin-top: 160px;
  } */
`;
export const FormDiv = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const FormLabel = styled.label`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;
export const FormInput = styled(Field)`
  width: 100%;
  left: 16px;
  border: none;
  border-bottom: 1px solid #e0e0e0;

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
  :focus {
    outline: none;
    border-bottom: 1px solid #fc842d;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
    font-family: 'Verdana';
    font-size: 14px;
  }
`;
export const FormButtonContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: unset;
  }
`;

export const FormButtonActiveBtn = styled.button`
  min-width: 182px;
  padding: 13px 51px 13px 50px;
  margin-bottom: 20px;
  /* margin-right: 32px; */
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: inline-block;
  flex-direction: row;
  align-items: center;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;

  color: #ffffff;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: transparent;
  transition: transform 500ms linear;

  :hover:focus {
    color: #fc842d;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border-radius: 30px;
    border: transparent;
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const FormButtonA = styled.a`
  min-width: 182px;
  padding: 11px 35px 11px 35px;
  /* margin-right: 32px; */
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: inline-block;
  flex-direction: row;
  align-items: center;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;

  color: #fc842d;

  background: #ffffff;
  border: 2px solid #fc842d;
  border-radius: 30px;
  transition: transform 500ms linear;
  :hover:focus {
    color: #ffffff;
    background-color: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border-radius: 30px;
    border: transparent;
    transform: scale(1.1);
  }
`;
export const Alert = styled.p`
  position: relative;
  margin-bottom: -17px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 17px;
  color: rgb(217 120 74);
`;
