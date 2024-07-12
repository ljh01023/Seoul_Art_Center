import BtnTotal from '../components/BtnTotal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cssStyle from '../css/Ranking.module.css';

export default function Ranking() {
  let totalData = useSelector((a) => a.datalist);
  let [rankData, setRankData] = useState(totalData);
  let [activeButton, setActiveButton] = useState('# 전체'); // 클래스 on/off
  let navigate = useNavigate();

  return (
    <main className='mw'>
      <section className={cssStyle.sec3}>
        <div className='title'>
          <h2>장르별 랭킹</h2>
          <nav>
            <ul className={cssStyle.navList}>
              <li
                onClick={() => {
                  setRankData(totalData);
                  setActiveButton('# 전체');
                }}
                className={activeButton === '# 전체' ? cssStyle.on : ''}
              >
                # 전체
              </li>
              <li
                onClick={() => {
                  setRankData(
                    [...totalData]
                      .filter((a) => a.category === '뮤지컬' || a.category === '오페라')
                      .sort((a, b) => b.count - a.count)
                  );
                  setActiveButton('# 뮤지컬/오페라');
                }}
                className={activeButton === '# 뮤지컬/오페라' ? cssStyle.on : ''}
              >
                # 뮤지컬/오페라
              </li>
              <li
                onClick={() => {
                  setRankData(
                    [...totalData]
                      .filter((a) => a.category === '발레')
                      .sort((a, b) => b.count - a.count)
                  );
                  setActiveButton('# 발레');
                }}
                className={activeButton === '# 발레' ? cssStyle.on : ''}
              >
                # 발레
              </li>
              <li
                onClick={() => {
                  setRankData(
                    [...totalData]
                      .filter((a) => a.category === '성악' || a.category === '연주회')
                      .sort((a, b) => b.count - a.count)
                  );
                  setActiveButton('# 성악/연주회');
                }}
                className={activeButton === '# 성악/연주회' ? cssStyle.on : ''}
              >
                # 성악/연주회
              </li>
              <li
                onClick={() => {
                  setRankData(
                    [...totalData]
                      .filter((a) => a.category === '전시' || a.category === '서예')
                      .sort((a, b) => b.count - a.count)
                  );
                  setActiveButton('# 전시/서예');
                }}
                className={activeButton === '# 전시/서예' ? cssStyle.on : ''}
              >
                # 전시/서예
              </li>
              <li
                onClick={() => {
                  setRankData(
                    [...totalData]
                      .filter((a) => a.category === '연극')
                      .sort((a, b) => b.count - a.count)
                  );
                  setActiveButton('# 연극');
                }}
                className={activeButton === '# 연극' ? cssStyle.on : ''}
              >
                # 연극
              </li>
            </ul>
          </nav>
          <Link to='/ranking'>
            <BtnTotal />
          </Link>
        </div>
        <ul className={cssStyle.listCon}>
          {rankData.slice(0, 8).map((item, i) => (
            <li className={cssStyle.rankList} key={item.id}>
              <div
                className={cssStyle.imgCon}
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                <img src={process.env.PUBLIC_URL`/img/${item.image} alt=${item.title}`} />
                <span>{i + 1}</span>
              </div>
              <strong>{item.title}</strong>
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
