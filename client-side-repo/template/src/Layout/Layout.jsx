import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Layout = () => {
  return (
    <div>
      <div className=' sticky top-0 z-50'>
        <Navbar></Navbar>
      </div>
      <div className=' container mx-auto my-10'>
      <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;