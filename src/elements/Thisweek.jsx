import { useEffect, useState } from 'react';
import CardCon from '../components/CardCon';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import cssStyle from '../css/ThisWeek.module.css';

export default function ThisWeek() {
  let totalData = useSelector((a) => a.datalist);
  const [week, setWeek] = useState([]);
  useEffect(() => {
    const currentDate = new Date();
    const weekStart =
      currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
    let week = [];
    for (let i = 0; i < 7; i++) {
      let day = new Date(currentDate.setDate(weekStart + i));
      week.push(day.toISOString().split('T')[0]);
    }

    setWeek(week);
  }, []);
  const matchingData = totalData.filter((item) => week.includes(item.startDate));

  return (
    <main className='mw'>
      <section className={cssStyle.sec5}>
        <h2>이주의 공연&amp;전시</h2>
        {matchingData && matchingData.length > 0 ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className='mySwiper'
          >
            {matchingData.map((item) => (
              <SwiperSlide className='swiper' key={item.id}>
                <CardCon item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p
            style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              textAlign: 'center',
              color: 'var(--gray4)',
            }}
          >
            이주의 공연 및 전시가 없습니다.
          </p>
        )}
      </section>
    </main>
  );
}
