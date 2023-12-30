import Banner from '../elements/Banner';
import TicketOpen from '../elements/TicketOpen';
import Ranking from '../elements/Ranking';
import Today from '../elements/Today';
import ThisWeek from '../elements/ThisWeek';
import Anniversary from '../elements/Anniversary';

export default function Main() {
  return (
    <main>
      <Banner />
      <TicketOpen />
      <Ranking />
      <Today />
      <ThisWeek />
      <Anniversary />
    </main>
  );
}
