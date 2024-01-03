import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import cssStyle from '../css/TodayShow.module.css';

const calIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' height='16' width='14' viewBox='0 0 448 512'>
    <path d='M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z' />
  </svg>
);

const moreIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' height='16' width='10' viewBox='0 0 320 512'>
    <path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z' />
  </svg>
);

export default function TodayShow() {
  let totalData = useSelector((a) => a.datalist);
  const [today, setToday] = useState([]);

  useEffect(() => {
    let currentDate = new Date();
    let today = [];
    today.push((currentDate = currentDate.toISOString().split('T')[0]));
    setToday(today);
  }, []);
  const matchingData = totalData.filter((item) => today.includes(item.startDate));

  return (
    <main className='mw'>
      <section className={cssStyle.subTodayShow}>
        <h2>오늘의 공연 / 전시</h2>
        <ul>
          {matchingData.map((item) => (
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
