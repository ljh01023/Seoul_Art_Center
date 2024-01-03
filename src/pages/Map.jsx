import { useRef } from 'react';
import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import cssStyle from '../css/Map.module.css';

// 아이콘
const iconSubway = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='16'
    width='14'
    viewBox='0 0 448 512'
  >
    <path d='M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 128c0-17.7 14.3-32 32-32h80c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM272 96h80c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H272c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm288-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z' />
  </svg>
);
const iconBus = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='16'
    width='18'
    viewBox='0 0 576 512'
  >
    <path d='M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z' />
  </svg>
);
// const iconMarker = (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     height='16'
//     width='12'
//     viewBox='0 0 384 512'
//   >
//     <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
//   </svg>
// );
export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.kakao && mapRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(37.4787, 127.0113),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapRef.current, options); // 지도 생성

      // 마커가 표시될 위치
      const markerPosition = new kakao.maps.LatLng(37.4787, 127.0113);

      // 마커 생성
      var marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도위에 표시
      marker.setMap(map);
    }
  }, [mapRef]);

  return (
    <main className='mw'>
      <section className={cssStyle.subMap}>
        <h2>오시는 길·주차안내</h2>
        <Tabs
          defaultActiveKey='profile'
          id='fill-tab-example'
          className='mb-3'
          fill
        >
          <Tab eventKey='home' title='대중교통 이용안내'>
            <div ref={mapRef} className={cssStyle.map}></div>
            <p>
              <span>도로명주소</span>(우06757) 서울시 서초구 남부순환로 2406
              예술의전당
              <br />
            </p>
            <div className={cssStyle.subway}>
              <div>{iconSubway}</div>
              <ul>
                <p className={cssStyle.title}>지하철 이용</p>
                <li>
                  <span>2호선</span>서초역 3번출구 도보 20 ~ 25분 소요
                </li>
                <li>
                  <span>3호선</span>남부터미널역 5번출구 도보 5 ~ 10분 소요
                </li>
              </ul>
            </div>
            <div className={cssStyle.bus}>
              <div>{iconBus}</div>
              <ul>
                <p className={cssStyle.title}>버스 이용</p>
                <li>
                  <span>간선</span>405, 406
                </li>
                <li>
                  <span>지선</span>5413
                </li>
                <li>
                  <span>직행</span>1500-2, 1553
                </li>
                <li>
                  <span>마을</span>서초11, 서초17, 서초22
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey='profile' title='승용차 이용안내 (주차요금)'></Tab>
          <Tab eventKey='longer-tab' title='공연장, 전시장 찾아가기'></Tab>
          <Tab eventKey='contact' title='실시간 주차정보'></Tab>
        </Tabs>
      </section>
    </main>
  );
}
