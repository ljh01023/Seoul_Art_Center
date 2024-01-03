import CustomCalendar from '../components/CustomCalendar';
import { useSelector } from 'react-redux';

export default function Schedule() {
  let totalData = useSelector((a) => a.datalist);
  //totalData 중에서 startDate 정보만 배열로 저장
  let startDate = totalData.map((a) => a.startDate);

  return (
    <main className='mw'>
      <section className='subSchedule'>
        <h2>공연/전시 전체일정</h2>
        <div className='calCon'>
          <CustomCalendar startDate={startDate} totalData={totalData} />
        </div>
      </section>
    </main>
  );
}
