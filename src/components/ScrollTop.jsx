const btnStyle = {
  position: 'fixed',
  bottom: '5rem',
  right: '3rem',
  width: '60px',
  height: '60px',
  borderRadius: '100px',
  backgroundColor: 'var(--bk)',
  color: 'var(--wh)',
  fontSize: '2.3rem',
  fontWeight: '600',
};

export default function ScrollTop() {
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button className='scrollBtn' style={btnStyle} onClick={scrollTop}>
        Top
      </button>
    </>
  );
}
