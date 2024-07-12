import Calendar from 'react-calendar';
import { useState } from 'react';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import '../css/scheduleCalendar.css';

export default function CustomCalendar({ totalData, startDate }) {
  // 현재 선택된 날짜 상태관리
  const [nowDate, setNowDate] = useState(new Date());

  // 날짜 클릭시 현재 날짜로 설정
  const handleDayClick = (nowDate) => {
    setNowDate(nowDate);
  };

  const datesToHighlight = startDate.map((date) => moment(date).format('YYYY-MM-DD'));

  const tileClassName = ({ date, view }) => {
    // 해당 날짜가 datesToHighlight 배열에 있는지 확인
    if (view === 'month' && datesToHighlight.find((dDate) => moment(dDate).isSame(date, 'day'))) {
      return 'highlight';
    }
  };

  const [mark, setMark] = useState([]);

  return (
    <div className='customCalendar'>
      <Calendar
        onChange={setNowDate} // 날짜가 변경시 nowDate 업데이트
        value={nowDate} // 현재 선택된 날짜
        onClickDay={handleDayClick} // 날짜를 클릭하면 handleDayClick 함수를 호출
        calendarType='gregory'
        formatDay={(locale, date) => moment(date).format('DD')}
        tileClassName={tileClassName}
        tileContent={({ date, view }) => {
          let html = [];
          if (datesToHighlight.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
            const matchingData = totalData.find(
              (data) =>
                moment(data.startDate).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
            );
            const title = matchingData ? matchingData.title : 'No title';
            html.push(
              <div key={moment(date).format('YYYY-MM-DD')}>
                <div className='mark'></div>
                <div>{title}</div>
              </div>
            );
          }
          return <>{html}</>;
        }}
      />
    </div>
  );
}
