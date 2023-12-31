import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Container } from 'components/Container';
import { Loader } from 'components/Loader';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
