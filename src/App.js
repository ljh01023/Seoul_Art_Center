import Layout from './elements/Layout';
import Main from './pages/Main';
import TicketOpenMore from './pages/TicketOpenMore';
import RankingMore from './pages/RankingMore';
import SpecialMore from './pages/SpecialMore';
import Schedule from './pages/Schedule';
import Map from './pages/Map';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='ticket_open' element={<TicketOpenMore />} />
        <Route path='ranking' element={<RankingMore />} />
        <Route path='sac_program' element={<SpecialMore />} />
        <Route path='map' element={<Map />} />
        <Route path='schedule' element={<Schedule />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
