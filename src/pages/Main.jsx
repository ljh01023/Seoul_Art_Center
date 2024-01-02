import Banner from '../elements/Banner';
import TicketOpen from '../elements/TicketOpen';
import Ranking from '../elements/Ranking';
import TodayRecom from '../elements/TodayRecom';
import ThisWeek from '../elements/ThisWeek';
import Anniversary from '../elements/Anniversary';

export default function Main() {
  return (
    <main>
      <Banner />
      <TicketOpen />
      <Ranking />
      <TodayRecom />
      <ThisWeek />
      <Anniversary />
    </main>
  );
}
