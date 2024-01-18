import BtnTotal from '../components/BtnTotal';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cssStyle from '../css/Special.module.css';

export default function Special() {
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
          <Link to='/sac_program'>
            <BtnTotal />
          </Link>
        </div>
        <ul className={cssStyle.imgListCon}>
          {aniData.slice(0, 7).map((item) => (
            <li
              className={cssStyle.imgCon}
              key={item.id}
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
            >
              <img src={`./img/${item.image}`} alt={item.title} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
