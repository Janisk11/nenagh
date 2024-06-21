import React, { useState, useEffect, useCallback } from 'react';
import './style/App.css';

// Components
import DesktopNav from './components/navbar/desktopNav';
import MobileNav from './components/navbar/mobileNav';
import Backdrop from './components/navbar/backdrop';
import Hero from './components/hero/hero';
import Portfolio from './components/portfolio/portfolio';
// import Partners from './components/partners/partners';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  const [userIsScrolled, setUserIsScrolled] = useState(false);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const userIsScrolledHandler = useCallback(() => {
    setUserIsScrolled(window.pageYOffset > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', userIsScrolledHandler);
    return () => {
      window.removeEventListener('scroll', userIsScrolledHandler);
    };
  }, [userIsScrolledHandler]);

  const closeMobileMenu = () => setMobileNavbarOpen(false);
  const openMobileMenu = () => setMobileNavbarOpen(true);

  return (
    <div className="App">
      <MobileNav isOpen={mobileNavbarOpen} closeMobileMenu={closeMobileMenu} />
      <Backdrop closeMobileMenu={closeMobileMenu} isOpen={mobileNavbarOpen} />
      <DesktopNav userIsScrolled={userIsScrolled} mobileMenuOpen={openMobileMenu} />
      <Hero />
      <About />
      <Portfolio />
      {/* <Partners /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
