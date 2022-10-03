import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
  return (
    <>
      <AppBar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPage;
