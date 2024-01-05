import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
        <div className='title'>
          <h2>오늘의 공연·전시</h2>
          <button
            className='more'
            onClick={() => {
              navigate('/today_show');
            }}
          >
            전체보기
          </button>
        </div>
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
              <div className={cssStyle.slideCon}>
                <div className={cssStyle.imgCon}>
                  <img src={`./img/${item.image}`} alt={item.title} />
                </div>
                <strong>{item.title}</strong>
                <span>
                  {item.startDate === item.endDate
                    ? item.startDate
                    : `${item.startDate} ~ ${item.endDate}`}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
