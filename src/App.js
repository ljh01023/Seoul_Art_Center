import { Routes, Route } from 'react-router-dom';
import Layout from './elements/Layout';
import Main from './pages/Main';
import TicketMore from './pages/TicketMore';
import RankingMore from './pages/RankingMore';
// import ThisWeekMore from './pages/ThisWeekMore';
import AnniversaryMore from './pages/AnniversaryMore';
import Map from './pages/Map';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='ticket_open' element={<TicketMore />} />
        <Route path='ranking' element={<RankingMore />} />
        {/* <Route path='this_week_show' element={<ThisWeekMore />} /> */}
        <Route path='30th_program' element={<AnniversaryMore />} />
        <Route path='map' element={<Map />} />
      </Route>
      <Route path='*' element={<>404 잘못된 접근입니다</>} />
    </Routes>
  );
}

export default App;
