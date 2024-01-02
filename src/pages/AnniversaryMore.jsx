import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomCalendar from '../components/CustomCalendar';
import cssStyle from '../css/AnniversaryMore.module.css';

const calIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='16'
    width='14'
    viewBox='0 0 448 512'
  >
    <path d='M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z' />
  </svg>
);

const moreIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='16'
    width='10'
    viewBox='0 0 320 512'
  >
    <path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z' />
  </svg>
);

export default function AnniversaryMore() {
  let aniData = useSelector((a) => a.anniverData);
  const [activeButton, setActiveButton] = useState('전체'); //class on/off

  // 오늘날짜
  let currentDate = new Date();
  currentDate = currentDate.toISOString().split('T')[0];

  // 버튼 클릭시 달력 컴포넌트 토글
  let [isOpen, setIsOpen] = useState(false);

  return (
    <main className='mw'>
      <section className={cssStyle.subAni}>
        <h2>2023 예술의전당 기획 프로그램</h2>
        <div className={cssStyle.dateCon}>
          <button
            className={cssStyle.calendar}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{calIcon}</span>
            {currentDate}
            <span>{moreIcon}</span>
          </button>
          {isOpen && <CustomCalendar />}
          <div className={cssStyle.btns}>
            <button
              className={activeButton === '일간' ? cssStyle.on : ''}
              onClick={() => {
                setActiveButton('일간');
              }}
            >
              일간
            </button>
            <button
              className={activeButton === '주간' ? cssStyle.on : ''}
              onClick={() => {
                setActiveButton('주간');
              }}
            >
              주간
            </button>
            <button
              className={activeButton === '월간' ? cssStyle.on : ''}
              onClick={() => {
                setActiveButton('월간');
              }}
            >
              월간
            </button>
            <button
              className={activeButton === '전체' ? cssStyle.on : ''}
              onClick={() => {
                setActiveButton('전체');
              }}
            >
              전체
            </button>
          </div>
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
