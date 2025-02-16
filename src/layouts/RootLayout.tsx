import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const RootLayout = () => {
  return (
    <div>
      <div className="mx-auto">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
