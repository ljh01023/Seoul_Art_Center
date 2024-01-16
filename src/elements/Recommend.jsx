import { useState } from 'react';
import { useSelector } from 'react-redux';
import cssStyle from '../css/Recommend.module.css';

export default function Recommend() {
  let [img, setImg] = useState('image23.jpg');
  let reData = useSelector((a) => a.recomData);

  return (
    <main>
      <section className={cssStyle.sec4}>
        <h2>추천 공연・전시</h2>
        <div className={cssStyle.reInner}>
          <ul className={cssStyle.listCon}>
            {reData.map((item) => (
              <li
                onMouseOver={(e) => {
                  setImg(item.image);
                }}
                key={item.id}
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
            <img src={`/img/${img}`} alt={img.title} />
          </div>
        </div>
      </section>
    </main>
  );
}
