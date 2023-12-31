import { useEffect } from 'react';
import { useState } from 'react';

const btnStyle = {
  position: 'fixed',
  bottom: '10rem',
  right: '3rem',
  width: '100px',
  height: '100px',
  borderRadius: '100px',
  backgroundColor: 'var(--bk)',
  color: 'var(--wh)',
  fontSize: '3rem',
  fontWeight: '600',
};

export default function ScrollTop() {
  let [scrollBtn, setScrollBtn] = useState(false);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  //오류: scrollY 700 이전에는 안보여야하는데 보임.
  useEffect(() => {
    const handleScrollBtn = () => {
      if (window.scrollY >= 700) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    };
    // console.log(window.scrollY);
    window.addEventListener('scroll', handleScrollBtn);
    return () => {
      window.removeEventListener('scroll', handleScrollBtn);
    };
  }, []);
  return (
    <>
      <button
        className='scrollBtn'
        style={btnStyle}
        onClick={() => {
          setScrollBtn(scrollTop);
        }}
        // disabled={scrollBtn}
      >
        Top
      </button>
    </>
  );
}
