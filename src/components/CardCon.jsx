export default function CardCon({ item, i }) {
  return (
    <div className='cardInner'>
      <div className='cardCon'>
        <div className='imgCon'>
          <img src={`process.env.PUBLIC_URL/img/${item.image}`} alt={item.title} />
        </div>
        <p className='title'>{item.title}</p>
        <p className='date'>{item.startDate}</p>
      </div>
    </div>
  );
}
