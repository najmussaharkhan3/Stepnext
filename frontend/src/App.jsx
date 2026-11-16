import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import ProductsFallback from './pages/ProductsFallback'; // ✅ ADD THIS
import Products from './pages/Products';
// import Products from './pages/Products'; ❌ REMOVE / COMMENT
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import AppAdmin from './admin/AppAdmin';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (pathname.startsWith('/admin')) {
    return <AppAdmin />;
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* ✅ YAHAN CHANGE HUA */}
            <Route path="/products" element={<Products />} />

            {/* OPTIONAL: detail bhi disable karna ho */}
            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;