import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  DailyCaloriesFormContainer,
  DailyCaloriesFormTitle,
  DailyCaloriesFormButton,
  FieldStyled,
  Label,
  FieldStyledTab,
  FieldStyledMobil,
  FieldRadioGrup,
  RadioGrupLabel,
  RadioStyled,
  Radiolabel,
  FormStyled,
  ButtonCont,
  ErrorMessageContainer,
  FormDiv,
} from './DailyCaloriesForm.styled';

const DailyCaloriesSchema = Yup.object().shape({
  height: Yup.number()
    .positive()
    .min(100, 'Зріст має бути більше ніж 100см!')
    .max(250, 'Зріст має бути менше ніж 250см!')
    .integer('Зріст має бути цілим числом')
    .required("Це поле є обов'язковим!"),
  age: Yup.number()
    .min(18, 'Вік має бути більше ніж 18!')
    .max(100, 'Вік має бути менше ніж 100!')
    .integer('Зріст має бути цілим числом')
    .required("Це поле є обов'язковим!"),
  currentWeight: Yup.number()
    .min(20, 'Вага має бути більше ніж 20!')
    .max(500, 'Вага має бути менше ніж 500!')
    .required("Це поле є обов'язковим!"),
  desiredWeight: Yup.number()
    .min(20, 'Бажана вага має бути більше ніж 20!')
    .max(500, 'Бажана вага має бути менше ніж 500!')
    .required("Це поле є обов'язковим!"),
  bloodType: Yup.number()
    .oneOf([1, 2, 3, 4])
    .required("Це поле є обов'язковим!"),
});

export const DailyCaloriesForm = () => (
  <DailyCaloriesFormContainer>
    <DailyCaloriesFormTitle>
      Розрахуйте свою денну норму калорій прямо зараз
    </DailyCaloriesFormTitle>
    <Formik
      initialValues={{
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '1',
      }}
      validationSchema={DailyCaloriesSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <FormStyled>
          <FormDiv>
            <FieldStyled
              name="height"
              type="number"
              autoComplete="off"
              placeholder="Зріст*"
            />
            {errors.height && touched.height ? (
              <ErrorMessageContainer>{errors.height}</ErrorMessageContainer>
            ) : null}
          </FormDiv>
          <FormDiv>
            <FieldStyled
              name="desiredWeight"
              type="number"
              autoComplete="off"
              placeholder="Бажана вага*"
            />

            {errors.desiredWeight && touched.desiredWeight ? (
              <ErrorMessageContainer>
                {errors.desiredWeight}
              </ErrorMessageContainer>
            ) : null}
          </FormDiv>
          <FormDiv>
            <FieldStyled
              name="age"
              type="number"
              autoComplete="off"
              placeholder="Вік*"
            />
            {errors.age && touched.age ? (
              <ErrorMessageContainer>{errors.age}</ErrorMessageContainer>
            ) : null}
          </FormDiv>
          <FormDiv>
            <FieldStyledMobil
              name="currentWeight"
              type="number"
              autoComplete="off"
              placeholder="Ваша вага*"
            />
            {errors.currentWeight && touched.currentWeight ? (
              <ErrorMessageContainer>
                {errors.currentWeight}
              </ErrorMessageContainer>
            ) : null}
          </FieldStyledMobil>
</FormDiv>
          <FieldRadioGrup component="div" name="bloodType" label="bloodType">
            <Label> Група крові*</Label>
            <RadioGrupLabel>
              <Radiolabel htmlFor="bloodType">
                <RadioStyled
                  type="radio"
                  name="bloodType"
                  id="1"
                  defaultChecked
                  value="1"
                />
                1
              </Radiolabel>
              <Radiolabel htmlFor="bloodType">
                <RadioStyled type="radio" name="bloodType" id="2" value="2" />2
              </Radiolabel>
              <Radiolabel htmlFor="bloodType">
                <RadioStyled type="radio" name="bloodType" id="3" value="3" />3
              </Radiolabel>
              <Radiolabel htmlFor="bloodType">
                <RadioStyled type="radio" name="bloodType" id="4" value="4" />4
              </Radiolabel>
            </RadioGrupLabel>
          </FieldRadioGrup>
          <FormDiv>
            <FieldStyledTab
              name="currentWeight"
              type="number"
              autoComplete="off"
              placeholder="Ваша вага*"
            />
            
            {errors.currentWeight && touched.currentWeight ? (
              <ErrorMessageContainer>
                {errors.currentWeight}
              </ErrorMessageContainer>
            ) : null}
          </FormDiv>
          <ButtonCont>
            <DailyCaloriesFormButton type="submit">
              Схуднути
            </DailyCaloriesFormButton>
          </ButtonCont>
        </FormStyled>
      )}
    </Formik>
  </DailyCaloriesFormContainer>
);
