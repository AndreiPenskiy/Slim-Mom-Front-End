/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useCallback } from 'react';
import LocaleContext from '../../context/context';
import {
  DiaryPageDatetimeStyled,
  DiaryPageConteiner,
  DiaryProductsCalendarStyled,
} from './DiaryDateСalendar.styled';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/uk';
import 'moment/locale/en-gb';
import calendar from '../../icons/calendar.svg';
import { useDispatch } from 'react-redux';

import { getAllByDate } from 'redux/diary/diary-operation';
// import { useMediaQuery } from 'react-responsive';

export default function DiaryDateСalendar() {
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  const dispatch = useDispatch();

  const { locale, setLocale } = useContext(LocaleContext);

  const postReq = useCallback(
    data => {
      const formattedDate = formatDate(data);
      dispatch(getAllByDate(formattedDate));
    },
    [dispatch]
  );

  useEffect(() => {
    postReq(new Date());
  }, [postReq]);

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

  const formatDate = date => date.toLocaleDateString('fr-ca');

  const onChange = data => {
    postReq(data._d);
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
        onChange={onChange}
      />
      <DiaryProductsCalendarStyled src={calendar} alt="calendar" />
    </DiaryPageConteiner>
  );
}
