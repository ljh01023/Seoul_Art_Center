import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CardCon from '../components/CardCon';
import BtnTotal from '../components/BtnTotal';

export default function TicketOpen() {
  let totalData = useSelector((a) => a.datalist);
  let [openList, setOpenList] = useState([]);

  //오늘날짜
  useEffect(() => {
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split('T')[0];

    // 오늘날짜, 오픈날짜 매칭
    let matchingData = totalData.filter((a) => a.openDate >= currentDate);
    setOpenList(matchingData);
  }, []);

  return (
    <main className='mw'>
      <section className='sec2'>
        <div className='title'>
          <h2>티켓 오픈</h2>
          <Link to='/ticket_open'>
            <BtnTotal />
          </Link>
        </div>

        <Swiper slidesPerView={4} spaceBetween={30} modules={[Navigation]} className='mySwiper'>
          {openList &&
            openList.map((item) => (
              <SwiperSlide key={item.id}>
                <CardCon item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </main>
  );
}
