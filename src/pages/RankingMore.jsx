import { useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from '../components/Calendar';
import cssStyle from '../css/RankingMore.module.css';

export default function RankingMore() {
  let totalData = useSelector((a) => a.datalist);
  let [rankData, setRankData] = useState(totalData);
  return (
    <main className='mw'>
      <section className={cssStyle.subRank}>
        <h2>장르별 랭킹</h2>
        <nav>
          <ul>
            <li
              className={cssStyle.on}
              onClick={() => {
                setRankData(totalData);
              }}
            >
              전체
            </li>
            <li
              onClick={() => {
                setRankData(
                  [...totalData].filter((a) => a.category === '뮤지컬' || a.category === '오페라')
                );
              }}
            >
              뮤지컬 / 오페라
            </li>
            <li
              onClick={() => {
                setRankData([...totalData].filter((a) => a.category === '발레'));
              }}
            >
              발레
            </li>
            <li
              onClick={() => {
                setRankData(
                  [...totalData].filter((a) => a.category === '성악' || a.category === '연주회')
                );
              }}
            >
              성악 / 연주회
            </li>
            <li
              onClick={() => {
                setRankData(
                  [...totalData].filter((a) => a.category === '전시' || a.category === '서예')
                );
              }}
            >
              전시 / 서예
            </li>
            <li
              onClick={() => {
                setRankData([...totalData].filter((a) => a.category === '연극'));
              }}
            >
              연극
            </li>
          </ul>
        </nav>
        <Calendar />
        <div className={cssStyle.btns}>
          <button>일간</button>
          <button className={cssStyle.on}>주간</button>
          <button>월간</button>
          <button>전체</button>
        </div>
        <ul className={cssStyle.rankCon}>
          {rankData.map((item, i) => (
            <li key={item.id}>
              <span className={cssStyle.num}>{i + 1}</span>
              <div className={cssStyle.imgCon}>
                <img src={`/img/${item.image}`} alt={item.title} />
              </div>
              <strong>{item.title}</strong>
              <span className={cssStyle.place}>{item.place}</span>
              <span className={cssStyle.place}>
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
