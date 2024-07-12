import { useParams } from 'react-router-dom';
import cssStyle from '../css/Detail.module.css';
import { useSelector } from 'react-redux';

export default function Detail() {
  let { id } = useParams();
  let data = useSelector((a) => a.datalist);
  let item = data.find((a) => a.id == id);

  return (
    <section className={`mw ${cssStyle.detail}`}>
      <div className={cssStyle.imgCon}>
        <img src={`process.env.PUBLIC_URL/img/${item.image}`} alt='' />
      </div>
      <div className={cssStyle.desc}>
        <p className={cssStyle.category}>{item.category}</p>
        <p className={cssStyle.title}>{item.title}</p>
        <p className={cssStyle.place}>
          <strong>장소</strong>
          {item.place}
        </p>
        <p className={cssStyle.date}>
          <strong>기간</strong>
          {item.startDate}
        </p>
        <p className={cssStyle.time}>
          <strong>공연시간</strong>관람시간
        </p>
        <p className={cssStyle.age}>
          <strong>관람연령</strong>입장연령
        </p>
        <p className={cssStyle.price}>
          <strong>가격</strong>가격
        </p>
      </div>
    </section>
  );
}
