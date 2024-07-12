import CardCon from '../components/CardCon';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export default function TodayShow() {
  let totalData = useSelector((a) => a.datalist);
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
      <section className='sec5'>
        <h2>오늘의 공연&amp;전시</h2>
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
            오늘의 공연 및 전시 없습니다.
          </p>
        )}
      </section>
    </main>
  );
}
