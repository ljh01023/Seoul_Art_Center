import Banner from '../elements/Banner';
import TodayShow from '../elements/TodayShow';
import TicketOpen from '../elements/TicketOpen';
import Ranking from '../elements/Ranking';
import Recommend from '../elements/Recommend';
import ThisWeek from '../elements/ThisWeek';
import Anniversary from '../elements/Anniversary';

export default function Main() {
  return (
    <main>
      <Banner />
      <TodayShow />
      <TicketOpen />
      <Ranking />
      <Recommend />
      <ThisWeek />
      <Anniversary />
    </main>
  );
}
