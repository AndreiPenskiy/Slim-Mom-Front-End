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
} from './DailyCaloriesForm.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';



export const DailyCaloriesForm = () => {

  const { t } = useTranslation();

  const DailyCaloriesSchema = Yup.object().shape({
  height: Yup.number()
    .positive()
    .min(100, `${t("validationDiaryForm.label1")}`)
    .max(250, `${t("validationDiaryForm.label2")}`)
    .integer(`${t("validationDiaryForm.label3")}`)
    .required(`${t("validationDiaryForm.label4")}`),
  age: Yup.number()
    .min(18, `${t("validationDiaryForm.label5")}`)
    .max(100, `${t("validationDiaryForm.label6")}`)
    .integer(`${t("validationDiaryForm.label7")}`)
    .required(`${t("validationDiaryForm.label4")}`),
  currentWeight: Yup.number()
    .min(20, `${t("validationDiaryForm.label8")}`)
    .max(500, `${t("validationDiaryForm.label9")}`)
    .required(`${t("validationDiaryForm.label4")}`),
  desiredWeight: Yup.number()
    .min(20, `${t("validationDiaryForm.label10")}`)
    .max(500, `${t("validationDiaryForm.label11")}`)
    .required(`${t("validationDiaryForm.label4")}`),
  bloodType: Yup.number()
    .oneOf([1, 2, 3, 4])
    .required(`${t("validationDiaryForm.label4")}`),
});

  return (
<DailyCaloriesFormContainer>
    <DailyCaloriesFormTitle>
      {t("dailyCalorieForm.title")}
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
          <div>
            <FieldStyled
              name="height"
              type="number"
              autoComplete="off"
              placeholder={t("dailyCalorieForm.label_1")}
            />
            {errors.height && touched.height ? (
              <ErrorMessageContainer>{errors.height}</ErrorMessageContainer>
            ) : null}
          </div>
          <div>
            <FieldStyled
              name="desiredWeight"
              type="number"
              autoComplete="off"
              placeholder={t("dailyCalorieForm.label_4")}
            />

            {errors.desiredWeight && touched.desiredWeight ? (
              <ErrorMessageContainer>
                {errors.desiredWeight}
              </ErrorMessageContainer>
            ) : null}
          </div>
          <div>
            <FieldStyled
              name="age"
              type="number"
              autoComplete="off"
              placeholder={t("dailyCalorieForm.label_2")}
            />
            {errors.age && touched.age ? (
              <ErrorMessageContainer>{errors.age}</ErrorMessageContainer>
            ) : null}
          </div>

          <FieldStyledMobil>
            <FieldStyled
              name="currentWeight"
              type="number"
              autoComplete="off"
              placeholder={t("dailyCalorieForm.label_3")}
            />
            {errors.currentWeight && touched.currentWeight ? (
              <ErrorMessageContainer>
                {errors.currentWeight}
              </ErrorMessageContainer>
            ) : null}
          </FieldStyledMobil>

          <FieldRadioGrup component="div" name="bloodType" label="bloodType">
            <Label> {t("dailyCalorieForm.label_5")}</Label>
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

          <FieldStyledTab>
            <FieldStyled
              style={{ marginTop: '0' }}
              name="currentWeight"
              type="number"
              autoComplete="off"
              placeholder={t("dailyCalorieForm.label_3")}
            />
            {errors.currentWeight && touched.currentWeight ? (
              <ErrorMessageContainer>
                {errors.currentWeight}
              </ErrorMessageContainer>
            ) : null}
          </FieldStyledTab>

          <ButtonCont>
            <DailyCaloriesFormButton type="submit">
              {t("dailyCalorieForm.btn_name")}
            </DailyCaloriesFormButton>
          </ButtonCont>
        </FormStyled>
      )}
    </Formik>
  </DailyCaloriesFormContainer>
  );

};
