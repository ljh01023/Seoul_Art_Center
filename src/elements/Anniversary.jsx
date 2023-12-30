import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cssStyle from '../css/Anniversary.module.css';

export default function Anniversary() {
  let aniData = useSelector((a) => a.anniverData);
  let navigate = useNavigate();
  return (
    <main className='mw'>
      <section className={cssStyle.sec6}>
        <div className='title'>
          <h2>
            2023 예술의전당
            <br />
            기획 프로그램
          </h2>
          <button className='more' onClick={() => navigate('30th_program')}>
            전체보기
          </button>
        </div>
        <ul className={cssStyle.imgListCon}>
          {aniData.slice(0, 7).map((item) => (
            <li className={cssStyle.imgCon} key={item.id}>
              <img src={`./img/${item.image}`} alt={item.title} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
