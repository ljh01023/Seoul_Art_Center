import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cssStyle from '../css/Recommend.module.css';

export default function Recommend() {
  let [img, setImg] = useState('image23.jpg');
  let reData = useSelector((a) => a.recomData);
  let navigate = useNavigate();

  return (
    <main>
      <section className={cssStyle.sec4}>
        <h2>추천 공연&amp;전시</h2>
        <div className={cssStyle.reInner}>
          <ul className={cssStyle.listCon}>
            {reData.map((item) => (
              <li
                onMouseOver={(e) => {
                  setImg(item.image);
                }}
                key={item.id}
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                <strong>{item.title}</strong>
                <span>
                  {item.startDate === item.endDate
                    ? item.startDate
                    : `${item.startDate} ~ ${item.endDate}`}
                </span>
              </li>
            ))}
          </ul>
          <div className={cssStyle.imgCon}>
            <img src={process.env.PUBLIC_URL`/img/${img} alt=${img.title}`} />
          </div>
        </div>
      </section>
    </main>
  );
}
