import MainNavigation from 'components/MainNavigation/MainNavigation';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
