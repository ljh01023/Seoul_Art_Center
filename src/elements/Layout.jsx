import Header from './Header';
import Footer from './Footer';
import ScrollTop from '../components/ScrollTop';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
      <ScrollTop />
    </>
  );
}
