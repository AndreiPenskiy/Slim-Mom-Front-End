/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import LocaleContext from '../../context';
import {
  DiaryPageDatetimeStyled,
  DiaryPageConteiner,
  DiaryProductsCalendarStyled,
} from './DiaryDateСalendar.styled';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/uk';
import 'moment/locale/en-gb'
import calendar from '../../icons/calendar.svg';

export default function DiaryDateСalendar() {

  const { locale, setLocale } = useContext(LocaleContext);

  const inputProps = {
    style: {
      color: '#212121',
      fontFamily: 'Verdana',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '30px',
      lineHeight: '41px',
      border: 'none',
      width: '220px',
    },
    // className: "",
    // placeholder: 'N/A',
    // disabled: true,
    // onMouseLeave: () => alert("You went to the input but it was disabled")
  };

  return (
    <DiaryPageConteiner>
      <DiaryPageDatetimeStyled
        inputProps={inputProps}
        closeOnSelect={true}
        locale={locale}
        initialValue={moment().format('L')}
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
      />
      <DiaryProductsCalendarStyled src={calendar} alt="calendar" />
    </DiaryPageConteiner>
  );
}