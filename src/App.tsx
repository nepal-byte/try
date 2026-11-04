import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useStickyScroll } from './hooks/useStickyScroll';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionPage from './pages/AdmissionPage';
import GalleryPage from './pages/GalleryPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import StudentsDistrictsPage from './pages/StudentsDistrictsPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  // Temporarily disabled to test if this fixes the blank page issue
  // useStickyScroll();
  
  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumb />
      <ScrollToTopOnRouteChange />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/students-districts" element={<StudentsDistrictsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black w-full overflow-x-hidden">
        <AppContent />
      </div>
    </Router>
  );
}
