import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import cssStyle from '../css/TicketOpen.module.css';

export default function TicketOpen() {
  let navigate = useNavigate();
  let totalData = useSelector((a) => a.datalist);
  let [openList, setOpenList] = useState([]);

  //오늘날짜
  useEffect(() => {
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split('T')[0];
    // console.log(currentDate);

    // 오늘날짜, 오픈날짜 매칭
    let matchingData = totalData.filter((a) => a.openDate >= currentDate);
    setOpenList(matchingData);
    // console.log(totalData);
    // console.log('매칭', matchingData);
  }, []);

  return (
    <main className='mw'>
      <section className={cssStyle.sec2}>
        <div className='title'>
          <h2>티켓 오픈</h2>
          <button className='more' onClick={() => navigate('/ticket_open')}>
            전체보기
          </button>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={cssStyle.mySwiper}
        >
          {openList &&
            openList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={cssStyle.slideCon}>
                  <div className={cssStyle.imgCon}>
                    <img src={`/img/${item.image}`} alt={item.title} />
                    <span>{item.category}</span>
                  </div>
                  <strong>{item.title}</strong>
                  <span>{`${item.openDate} open`}</span>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </main>
  );
}
