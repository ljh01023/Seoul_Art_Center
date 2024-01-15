// import cssStyle from '../css/CardCon.Module.css';
export default function CardCon({ item, i }) {
  return (
    <div className='cardCon'>
      <div className='imgCon'>
        <img src={`img/${item.image}`} alt={item.title} />
      </div>
      <p className='title'>{item.title}</p>
      <p className='date'>{item.startDate}</p>
    </div>
  );
}
