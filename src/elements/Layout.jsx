import Header from './Header';
import Footer from './Footer';
import ScrollTop from '../components/ScrollTop';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Layout() {
  // 스크롤 goTop 버튼
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScrollTop = () => {
      const { scrollY } = window;
      if (!showScrollTop && scrollY > 600) {
        setShowScrollTop(true);
      } else if (showScrollTop && scrollY <= 600) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScrollTop);
    return () => {
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, [showScrollTop]);

  return (
    <div className='wrap'>
      <Header />
      <Outlet></Outlet>
      <Footer />
      <ScrollTop />
    </div>
  );
}
