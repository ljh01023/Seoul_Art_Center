import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CardCon from '../components/CardCon';
import cssStyle from '../css/TodayShow.module.css';

export default function TodayShow() {
  let totalData = useSelector((a) => a.datalist);
  let navigate = useNavigate();
  const [today, setToday] = useState([]);

  useEffect(() => {
    let currentDate = new Date();
    let today = [];
    today.push((currentDate = currentDate.toISOString().split('T')[0]));
    setToday(today);
  }, []);
  const matchingData = totalData.filter((item) => today.includes(item.startDate));

  return (
    <main className='mw'>
      <section className={cssStyle.sec9}>
        <h2>오늘의 공연·전시</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className={cssStyle.mySwiper}
        >
          {matchingData.map((item) => (
            <SwiperSlide className={cssStyle.swiper} key={item.id}>
              <CardCon item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
