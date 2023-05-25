import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import routers from './routers';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const router = useRoutes(routers)
  return (
    <HelmetProvider>
      <>
        <TopBar />
        <NavBar />
        {router}
        <Footer />

        {/* scroll */}
        <ScrollToTop />
      </>
    </HelmetProvider>
  );
}

export default App;
