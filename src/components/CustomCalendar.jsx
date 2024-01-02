import Calendar from 'react-calendar';
import { useState } from 'react';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import '../css/calendar.css';

export default function CustomCalendar() {
  const [nowDate, setNowDate] = useState(new Date());
  const handleDayClick = (nowDate) => {
    setNowDate(nowDate);
  };

  return (
    <div className='totalCalendar'>
      <Calendar
        onChange={setNowDate}
        value={nowDate}
        onClickDay={handleDayClick}
        calendarType='gregory'
        formatDay={(locale, date) => moment(date).format('DD')} // '일' 단어 삭제
      />
    </div>
  );
}