import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import cssStyle from '../css/Map.module.css';

export default function Map() {
  return (
    <section className={cssStyle.subMap}>
      <h2>오시는 길·주차안내</h2>

      <Tabs
        defaultActiveKey='profile'
        id='fill-tab-example'
        className='mb-3'
        fill
      >
        <Tab eventKey='home' title='대중교통 이용안내'>
          <h4>지하철</h4>
          <ul>
            <li>
              <p></p>
            </li>
          </ul>
        </Tab>
        <Tab eventKey='profile' title='승용차 이용안내 (주차요금)'>
          Tab content for Profile
        </Tab>
        <Tab eventKey='longer-tab' title='공연장, 전시장 찾아가기'>
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey='contact' title='실시간 주차정보'>
          Tab content for Contact
        </Tab>
      </Tabs>
    </section>
  );
}
