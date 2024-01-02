import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const ham = (
  <svg xmlns='http://www.w3.org/2000/svg' height='16' width='14' viewBox='0 0 448 512'>
    <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
  </svg>
);

const searchIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512'>
    <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
  </svg>
);

export default function Header() {
  let [open, setOpen] = useState(false);
  let navigate = useNavigate();

  let searchOpen = () => {
    setOpen(true);
  };
  let searchClose = () => {
    setOpen(false);
  };
  return (
    <header className='hd'>
      <h1
        onClick={() => {
          navigate('/');
        }}
        className='logo'
      >
        <img src='/img/logo.png' alt='logo' />
      </h1>
      <nav>
        <ul className='gnb'>
          <li>
            <Link to='/'>공연전시</Link>
            <ul className='sub'>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/schedule');
                  }}
                >
                  전체일정
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/today_show');
                  }}
                >
                  오늘의 공연/전시
                </Link>
                <Link to='/'>진행/예정 프로그램</Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/30th_program');
                  }}
                >
                  SAC 기획 프로그램
                </Link>
                <Link to='/'>패키지</Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/ticket_open');
                  }}
                >
                  티켓오픈 공지
                </Link>
                <Link to='/'>SAC 딜</Link>
                <Link to='/'>당일 할인 티켓</Link>
                <Link to='/'>예매/취소 안내</Link>
                <Link to='/'>서예 아카이브</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/'>공간대관</Link>
            <ul className='sub'>
              <li>
                <Link to='/'>공간소개</Link>
                <Link to='/'>공간별 대관안내</Link>
                <Link to='/'>입장권 운영안내</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/'>아카데미</Link>
            <ul className='sub'>
              <li>
                <Link to='/'>아카데미 안내</Link>
                <Link to='/'>수강신청</Link>
                <Link to='/'>오디션 신청</Link>
                <Link to='/'>나의강좌</Link>
                <Link to='/'>온라인 사군자</Link>
                <Link to='/'>아카데미 공지사항</Link>
                <Link to='/'>아카데미 FAQ</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/'>방문/이용</Link>
            <ul className='sub'>
              <li>
                <Link to='/'>전당소식</Link>
                <Link to='/map'>오시는길/주차안내 </Link>
                <Link to='/'>편의서비스</Link>
                <Link to='/'>입점매장</Link>
                <Link to='/'>고객센터</Link>
                <Link to='/'>이벤트</Link>
                <Link to='/'>세계 음악분수(선곡표)</Link>
                <Link to='/'>포스트/웹진/매거진</Link>
                <Link to='/'>관람평</Link>
                <Link to='/'>관람예절</Link>
                <Link to='/'>SAC 투어</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/'>기관소개</Link>
            <ul className='sub'>
              <li>
                <Link to='/'>기관소개 메인</Link>
                <Link to='/'>예술의전당 소개</Link>
                <Link to='/'>특별사업</Link>
                <Link to='/'>정보공개</Link>
                <Link to='/'>후원하기</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div>
        <p>로그인</p>
        <p>회원가입</p>
        <div className='search' onClick={searchOpen}>
          {searchIcon}
        </div>
        {open && <Search searchIcon={searchIcon} searchClose={searchClose} />}
        <button className='ham'>{ham}</button>
      </div>
    </header>
  );
}
