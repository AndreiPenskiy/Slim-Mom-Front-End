import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  padding-top: 40px;
  margin-left: 16px;
`

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
`

export const Forma = styled.div`
width: 285px;
flex-direction: column;
margin-top: 40px;

@media screen (min-width: 768px) {
  margin-top: 178px;
}

@media screen and (min-width: 1280px) {
  margin-top: 160px;
}
`
export const FormDiv = styled.div`
margin-bottom: 40px;
`


export const FormLabel = styled.label`
font-family: 'Verdana';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;

color: #9b9faa;
`
export const FormInput = styled(Field)`
width: 240px;
left: 16px;  
border-bottom: 1px solid #e0e0e0;
border-top: transparent;
border-left: transparent;
border-right: transparent;
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
`
export const FormButtonContainer = styled.div`
flex-direction: row;
margin-top: 60px;  
`

export const FormButtonActiveBtn = styled.button`
padding: 13px 51px 13px 50px;
margin-bottom: 20px;
margin-right: 32px;
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

:hover:focus{
  color: #ffffff;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: transparent;
 }
`

export const FormButtonA = styled.a`
padding: 13px 37px 13px 37px;
margin-right: 32px;
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
 :hover:focus{
  color: #ffffff;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: transparent;
 }
`
export const Alert = styled.p`
position: relative;
margin-bottom: -17px;
font-family: 'Verdana';
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 17px;
color: rgb(217 120 74);
`

