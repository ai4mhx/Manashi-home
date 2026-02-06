import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Tools from './pages/Tools';
import JoinUs from './pages/JoinUs';
import PageTransition from './components/PageTransition';

import ScrollToTop from './components/ScrollToTop';
import PublicationDetail from './pages/PublicationDetail';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
          <Route path="/publications" element={<PageTransition><Publications /></PageTransition>} />
          <Route path="/publication/:id" element={<PageTransition><PublicationDetail /></PageTransition>} />
          <Route path="/tools" element={<PageTransition><Tools /></PageTransition>} />
          <Route path="/join-us" element={<PageTransition><JoinUs /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
