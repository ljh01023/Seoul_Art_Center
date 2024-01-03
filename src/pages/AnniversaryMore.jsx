import { useState } from 'react';
import { useSelector } from 'react-redux';
import cssStyle from '../css/AnniversaryMore.module.css';

export default function AnniversaryMore() {
  let aniData = useSelector((a) => a.anniverData);
  const [activeButton, setActiveButton] = useState('이름순'); //class on/off
  let [list, setList] = useState([]); // 정렬

  return (
    <main className='mw'>
      <section className={cssStyle.subAni}>
        <h2>2023 예술의전당 기획 프로그램</h2>

        <div className={cssStyle.btns}>
          <button
            className={activeButton === '이름순' ? cssStyle.on : ''}
            onClick={() => {
              setActiveButton('이름순');
              setList([...aniData].sort((a, b) => b.title - a.title));
            }}
          >
            이름순
          </button>
          <button
            className={activeButton === '날짜순' ? cssStyle.on : ''}
            onClick={() => {
              setActiveButton('날짜순');
              setList(
                [...aniData].sort(
                  (a, b) => a.startDate.localeCompare(b.startDate) // 오름차순
                )
              );
            }}
          >
            날짜순
          </button>
          <button
            className={activeButton === '조회순' ? cssStyle.on : ''}
            onClick={() => {
              setActiveButton('조회순');
              setList([...aniData].sort((a, b) => b.count - a.count));
            }}
          >
            조회순
          </button>
        </div>

        <ul>
          {list.map((item) => (
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
