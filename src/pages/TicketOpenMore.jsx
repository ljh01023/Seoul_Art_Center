import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cssStyle from '../css/TicketOpenMore.module.css';

const searchIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512'>
    <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
  </svg>
);

export default function TicketOpenMore() {
  let totalData = useSelector((a) => a.datalist); // 데이터
  const [openList, setOpenList] = useState([]); // 정렬
  const [activeButton, setActiveButton] = useState('등록순'); //class on/off
  const [searchTerm, setSearchTerm] = useState(''); //검색창 상태관리
  let navigate = useNavigate();

  // 날짜
  useEffect(() => {
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split('T')[0];
    let matchingDate = totalData.filter((a) => a.openDate >= currentDate);
    setOpenList(matchingDate);
  }, []);

  // input 기능
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색 버튼 클릭시 호출
  const searchPrint = () => {
    if (searchTerm !== '') {
      const newOpenList = totalData.filter((item) => item.title.includes(searchTerm));
      setOpenList(newOpenList);
    } else {
      setOpenList(totalData);
    }
  };

  return (
    <main className='mw'>
      <section className={cssStyle.subTicket}>
        <h2>티켓 오픈</h2>
        <div className={cssStyle.searchBox}>
          <div className={cssStyle.btns}>
            <button
              onClick={() => {
                setOpenList(totalData);
                setActiveButton('등록순');
              }}
              className={activeButton === '등록순' ? cssStyle.on : ''}
            >
              등록순
            </button>
            <button
              onClick={() => {
                setOpenList(
                  [...totalData].sort(
                    (a, b) => a.openDate.localeCompare(b.openDate) // 오름차순
                  )
                );
                setActiveButton('오픈일순');
              }}
              className={activeButton === '오픈일순' ? cssStyle.on : ''}
            >
              오픈일순
            </button>
            <button
              onClick={() => {
                setOpenList([...totalData].sort((a, b) => b.count - a.count));
                setActiveButton('조회순');
              }}
              className={activeButton === '조회순' ? cssStyle.on : ''}
            >
              조회순
            </button>
          </div>
          <div className={cssStyle.inputCon}>
            <input
              value={searchTerm}
              placeholder='검색어를 입력하세요'
              onChange={handleSearch}
            ></input>
            <button onClick={searchPrint}>{searchIcon}</button>
          </div>
        </div>
        <div className={cssStyle.title}>
          <p>구분</p>
          <p>제목</p>
          <p>티켓 오픈일</p>
          <p>조회수</p>
        </div>

        <ul>
          {openList &&
            openList.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                <span>티켓오픈</span>
                <span>{item.title}</span>
                <span>{item.openDate}</span>
                <span>{item.count}</span>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
