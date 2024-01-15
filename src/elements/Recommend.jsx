import { useState } from 'react';
import { useSelector } from 'react-redux';
import cssStyle from '../css/Recommend.module.css';

export default function Recommend() {
  let [img, setImg] = useState('image23.jpg');
  let [hover, setHover] = useState('li:first-of-type');
  let reData = useSelector((a) => a.recomData);

  return (
    <main>
      <section className={cssStyle.sec4}>
        <h2>추천 공연・전시</h2>
        <div className={cssStyle.reInner}>
          <ul className={cssStyle.listCon}>
            {reData.map((item) => (
              <li
                // className={hover === 'on' ? cssStyle.on : ''}
                onMouseOver={() => {
                  setImg(item.image);
                  setHover(cssStyle.on);
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
