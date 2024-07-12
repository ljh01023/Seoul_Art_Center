import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import cssStyle from '../css/Banner.module.css';

export default function Banner() {
  let bannerData = useSelector((a) => a.bannerData);

  return (
    <main>
      <section className={cssStyle.sec1}>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={cssStyle.mySwiper}
        >
          {bannerData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className={cssStyle.slideCon}>
                  <img src={process.env.PUBLIC_URL`/img/${item.image} alt=${item.title}`} />
                </div>
                <div className={cssStyle.des}>
                  <p>{item.title}</p>
                  <p>{item.place}</p>
                  <p>{item.startDate}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}
