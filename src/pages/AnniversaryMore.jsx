import { useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from '../components/Calendar';
import cssStyle from '../css/AnniversaryMore.module.css';

export default function AnniversaryMore() {
  let aniData = useSelector((a) => a.anniverData);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(new Date());
  const handleDayClick = (value) => {
    setValue(value);
  };

  return (
    <main className='mw'>
      <section className={cssStyle.subAni}>
        <h2>2023 예술의전당 기획 프로그램</h2>
        <Calendar />
        <div className={cssStyle.btns}>
          <button className={`cssStyle.${isActive && 'on'}`} onClick={() => setIsActive(true)}>
            일간
          </button>
          <button className={cssStyle.on}>주간</button>
          <button>월간</button>
          <button>전체</button>
        </div>
        <ul>
          {aniData.map((item) => (
            <li key={item.id}>
              <div className={cssStyle.imgCon}>
                <img src={`/img/${item.image}`} alt={item.title} />
              </div>
              <strong>{item.title}</strong>
              <span>{item.place}</span>
              <span>
                {item.startDate === item.endDate
                  ? item.startDate
                  : `${item.startDate} ~ ${item.endDate}`}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
