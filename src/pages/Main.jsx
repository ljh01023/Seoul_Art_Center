import Banner from '../elements/Banner';
import TicketOpen from '../elements/TicketOpen';
import Ranking from '../elements/Ranking';
import Recommend from '../elements/Recommend';
import ThisWeek from '../elements/Thisweek';
import TodayShow from '../elements/TodayShow';
import Special from '../elements/Special';

export default function Main() {
  return (
    <main>
      <Banner />
      <TodayShow />
      <TicketOpen />
      <Ranking />
      <Recommend />
      <ThisWeek />
      <Special />
    </main>
  );
}
