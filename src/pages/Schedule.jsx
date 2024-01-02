import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import '../css/scheduleCalendar.css';

export default function Schedule() {
  const [nowDate, setNowDate] = useState(new Date());
  const handleDayClick = (nowDate) => {
    setNowDate(nowDate);
  };

  return (
    <main className='mw'>
      <section className='subSchedule'>
        <h2>공연/전시 전체일정</h2>
        <div className='calCon'>
          <Calendar
            onChange={setNowDate}
            value={nowDate}
            onClickDay={handleDayClick}
            calendarType='gregory'
            formatDay={(locale, date) => moment(date).format('DD')}
          />
        </div>
      </section>
    </main>
  );
}
