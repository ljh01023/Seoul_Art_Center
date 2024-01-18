import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className='ft mw'>
      <ul className='snsCon'>
        <li>
          <Link>
            <img src='/img/sns_instagram.png' alt='' />
          </Link>
        </li>
        <li>
          <Link>
            <img src='/img/sns_instagram.png' alt='' />
          </Link>
        </li>
        <li>
          <Link>
            <img src='/img/sns_instagram.png' alt='' />
          </Link>
        </li>
        <li>
          <Link>
            <img src='/img/sns_instagram.png' alt='' />
          </Link>
        </li>
        <li>
          <Link>
            <img src='/img/sns_instagram.png' alt='' />
          </Link>
        </li>
        <li>
          <Link>
            <img src='/img/sns_instagram.png' alt='' />
          </Link>
        </li>
        <li>
          <Link>
            <img src='/img/sns_instagram.png' alt='' />
          </Link>
        </li>
      </ul>
      <ul className='ftMenu'>
        <li>
          <Link to='/'>기관소개</Link>
        </li>
        <li>
          <Link to='/'>정보공개</Link>
        </li>
        <li>
          <Link to='/'>이용약관</Link>
        </li>
        <li>
          <Link to='/'>개인정보처리방침</Link>
        </li>
        <li>
          <Link to='/'>보도자료</Link>
        </li>
        <li>
          <Link to='/'>유실물</Link>
        </li>
        <li>
          <Link to='/'>1:1문의</Link>
        </li>
      </ul>
      <p className='tel'>
        고객센터 1668-1352
        <span>월 09:00~18:00</span>
        <span>화-일 09:00~20:00</span>
      </p>
      <div className='address'>
        <address>서울시 서초구 남부순환로 2406 예술의전당 (06757)</address>
        <p>사업자등록번호 214-82-00264</p>
        <p>대표자 장형준</p>
        <p>통신판매업신고 서초 제 0706호</p>
      </div>
      <p>copyright&copy;2023 Seoul Arts Center. All rights reserved.</p>
    </footer>
  );
}
