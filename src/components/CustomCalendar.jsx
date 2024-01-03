import Calendar from 'react-calendar';
import { useState } from 'react';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import '../css/scheduleCalendar.css';

export default function CustomCalendar({ totalData, startDate }) {
  // 현재 선택된 날짜를 상태로 관리합니다.
  const [nowDate, setNowDate] = useState(new Date());

  // 사용자가 달력의 날짜를 클릭하면 그 날짜를 현재 날짜로 설정합니다.
  const handleDayClick = (nowDate) => {
    setNowDate(nowDate);
  };

  // startDate 배열의 각 날짜를 'YYYY-MM-DD' 형식으로 변환합니다.
  const datesToHighlight = startDate.map((date) => moment(date).format('YYYY-MM-DD'));

  // 달력의 각 타일에 대한 클래스 이름을 결정하는 함수입니다.
  const tileClassName = ({ date, view }) => {
    // 월 보기에서만 하이라이트를 적용하고, 해당 날짜가 datesToHighlight 배열에 있는지 확인합니다.
    if (view === 'month' && datesToHighlight.find((dDate) => moment(dDate).isSame(date, 'day'))) {
      // 해당 날짜가 배열에 있으면 'highlight' 클래스를 반환합니다.
      return 'highlight';
    }
  };

  // 마크를 표시할 날짜를 상태로 관리합니다.
  const [mark, setMark] = useState([]);

  return (
    <div className='customCalendar'>
      <Calendar
        onChange={setNowDate} // 날짜가 변경되면 nowDate를 업데이트합니다.
        value={nowDate} // 현재 선택된 날짜를 표시합니다.
        onClickDay={handleDayClick} // 날짜를 클릭하면 handleDayClick 함수를 호출합니다.
        calendarType='gregory' // 그레고리력을 사용합니다.
        formatDay={(locale, date) => moment(date).format('DD')} // 날짜를 'DD' 형식으로 표시합니다.
        tileClassName={tileClassName} // 각 타일에 대한 클래스 이름을 결정하는 함수를 전달합니다.
        tileContent={({ date, view }) => {
          let html = [];
          // 해당 날짜가 datesToHighlight 배열에 있으면 'mark' div를 추가합니다.
          if (datesToHighlight.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
            // 해당 날짜에 매칭되는 totalData를 찾습니다.
            const matchingData = totalData.find(
              (data) =>
                moment(data.startDate).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
            );
            // 해당 날짜에 매칭되는 totalData의 title을 가져옵니다.
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
