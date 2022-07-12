import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  DailyCaloriesFormContainer,
  DailyCaloriesFormTitle,
  DailyCaloriesFormButton,
  FieldStyled,
  FieldRadioStyled,
  FieldStyledTab,
  FieldStyledMobil,
  FieldRadioGrup,
  RadioStyled,
  Radiolabel,
  FormStyled,
  ButtonCont,
  ErrorMessageContainer,
} from './DailyCaloriesForm.styled';

const DailyCaloriesSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, 'Зріст має бути більше ніж 100см!')
    .max(250, 'Зріст має бути менше ніж 250см!')
    .required("Це поле є обов'язковим!"),
  age: Yup.number()
    .min(18, 'Вік має бути більше ніж 18!')
    .max(100, 'Вік має бути менше ніж 100!')
    .required("Це поле є обов'язковим!"),
  currentWeight: Yup.number()
    .min(20, 'Вага має бути більше ніж 20!')
    .max(500, 'Вага має бути менше ніж 500!')
    .required("Це поле є обов'язковим!"),
  desiredWeight: Yup.number()
    .min(20, 'Бажана вага має бути більше ніж 20!')
    .max(500, 'Бажана вага має бути менше ніж 500!')
    .required("Це поле є обов'язковим!"),
  bloodType: Yup.number().required("Це поле є обов'язковим!"),
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
        bloodType: '',
      }}
      validationSchema={DailyCaloriesSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <FormStyled>
          <FieldStyled
            name="height"
            type="number"
            autoComplete="off"
            placeholder="Зріст*"
          />
          {errors.height && touched.height ? (
            <ErrorMessageContainer>{errors.height}</ErrorMessageContainer>
          ) : null}

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

          <FieldStyled
            name="age"
            type="number"
            autoComplete="off"
            placeholder="Вік*"
          />
          {errors.age && touched.age ? (
            <ErrorMessageContainer>{errors.age}</ErrorMessageContainer>
          ) : null}

          <FieldStyledMobil
            name="currentWeight"
            type="number"
            autoComplete="off"
            placeholder="Ваша вага*"
          />

          <FieldRadioStyled>
            <FieldStyled
              name="bloodType"
              placeholder="Група крові*"
              autoComplete="off"
            ></FieldStyled>
            {errors.bloodType && touched.bloodType ? (
              <ErrorMessageContainer>{errors.bloodType}</ErrorMessageContainer>
            ) : null}

            <FieldRadioGrup component="div" name="bloodType" label="bloodType">
              <Radiolabel htmlFor="bloodType">
                <RadioStyled
                  type="radio"
                  name="bloodType"
                  id="bloodType1"
                  defaultChecked
                  value="1"
                />
                1
              </Radiolabel>

              <Radiolabel htmlFor="bloodType">
                <RadioStyled
                  type="radio"
                  name="bloodType"
                  id="bloodType2"
                  value="2"
                />
                2
              </Radiolabel>

              <Radiolabel htmlFor="bloodType">
                <RadioStyled
                  type="radio"
                  name="bloodType"
                  id="bloodType3"
                  value="3"
                />
                3
              </Radiolabel>

              <Radiolabel htmlFor="bloodType">
                <RadioStyled
                  type="radio"
                  name="bloodType"
                  id="bloodType4"
                  value="4"
                />
                4
              </Radiolabel>
            </FieldRadioGrup>
          </FieldRadioStyled>

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
