import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cssStyle from '../css/RankingMore.module.css';

export default function RankingMore() {
  let totalData = useSelector((a) => a.datalist);
  let [rankData, setRankData] = useState(totalData); //filter
  let [activeButton, setActiveButton] = useState('전체');
  let navigate = useNavigate();

  return (
    <main className='mw'>
      <section className={cssStyle.subRank}>
        <h2>장르별 랭킹</h2>
        <nav>
          <ul>
            <li
              className={activeButton === '전체' ? cssStyle.on : ''}
              onClick={() => {
                setRankData(totalData);
                setActiveButton('전체');
              }}
            >
              전체
            </li>
            <li
              className={activeButton === '뮤지컬 / 오페라' ? cssStyle.on : ''}
              onClick={() => {
                setRankData(
                  [...totalData].filter((a) => a.category === '뮤지컬' || a.category === '오페라')
                );
                setActiveButton('뮤지컬 / 오페라');
              }}
            >
              뮤지컬 / 오페라
            </li>
            <li
              className={activeButton === '발레' ? cssStyle.on : ''}
              onClick={() => {
                setRankData([...totalData].filter((a) => a.category === '발레'));
                setActiveButton('발레');
              }}
            >
              발레
            </li>
            <li
              className={activeButton === '성악 / 연주회' ? cssStyle.on : ''}
              onClick={() => {
                setRankData(
                  [...totalData].filter((a) => a.category === '성악' || a.category === '연주회')
                );
                setActiveButton('성악 / 연주회');
              }}
            >
              성악 / 연주회
            </li>
            <li
              className={activeButton === '전시 / 서예' ? cssStyle.on : ''}
              onClick={() => {
                setRankData(
                  [...totalData].filter((a) => a.category === '전시' || a.category === '서예')
                );
                setActiveButton('전시 / 서예');
              }}
            >
              전시 / 서예
            </li>
            <li
              className={activeButton === '연극' ? cssStyle.on : ''}
              onClick={() => {
                setRankData([...totalData].filter((a) => a.category === '연극'));
                setActiveButton('연극');
              }}
            >
              연극
            </li>
          </ul>
        </nav>
        <ul className={cssStyle.rankCon}>
          {rankData.map((item, i) => (
            <li
              key={item.id}
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
            >
              <span className={cssStyle.num}>{i + 1}</span>
              <div className={cssStyle.imgCon}>
                <img src={process.env.PUBLIC_URL + `/img/${item.image} alt=${item.title}`} />
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
