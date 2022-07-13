import {
  DiaryPageDatetimeStyled,
  DiaryPageConteiner,
  DiaryProductsCalendarStyled,
} from './DiaryDateСalendar.styled';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/uk';
import 'moment/locale/ru';
import calendar from '../../icons/calendar.svg';

export default function DiaryDateСalendar() {
  const inputProps = {
    style: {
      color: '#212121',
      fontFamily: 'Verdana',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '34px',
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
        locale="uk"
        initialValue={moment().format('L')}
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
      />
      <DiaryProductsCalendarStyled src={calendar} alt="calendar" />
    </DiaryPageConteiner>
  );
}
