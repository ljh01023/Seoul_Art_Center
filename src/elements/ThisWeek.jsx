import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
        <h2>이주의 공연·전시</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
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
