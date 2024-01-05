import cssStyle from '../css/CardCon.Module.css';
export default function CardCon({ item }) {
  return (
    <div className={cssStyle.cardInner}>
      <div className={cssStyle.cardCon}>
        <div className={cssStyle.imgCon}>
          <img src={`img/${item.image}`} alt={item.title} />
        </div>
        <p className={cssStyle.title}>{item.title}</p>
        <p className={cssStyle.date}>{item.startDate}</p>
      </div>
    </div>
  );
}
