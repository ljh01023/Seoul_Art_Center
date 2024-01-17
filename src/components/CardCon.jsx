import { useNavigate } from 'react-router-dom';

export default function CardCon({ item }) {
  const navigate = useNavigate();

  return (
    <div className='cardCon'>
      <div
        className='imgCon'
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
      >
        <img src={`img/${item.image}`} alt={item.title} />
      </div>
      <p className='title'>{item.title}</p>
      <p className='date'>{item.startDate}</p>
    </div>
  );
}
