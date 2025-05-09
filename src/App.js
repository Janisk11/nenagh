import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import { Element } from 'react-scroll'

import './style/App.css';

// Pages
import Home from './pages/home';
import Events from './pages/events';
import ContactUs from './pages/contactus'

// Components
import DesktopNav from './components/navbar/desktopNav';
import MobileNav from './components/navbar/mobileNav';
import Backdrop from './components/navbar/backdrop';
import Footer from './components/footer/footer';

const App = () => {
  const [userIsScrolled, setUserIsScrolled] = useState(false)
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)
  const location = useLocation()

  const userIsScrolledHandler = useCallback(() => {
    setUserIsScrolled(window.pageYOffset > 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', userIsScrolledHandler)
    return () => {
      window.removeEventListener('scroll', userIsScrolledHandler)
    }
  }, [userIsScrolledHandler])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0) // Scrolls to top of the page
  }, [location.pathname]) // Triggered whenever the route (path) changes

  const closeMobileMenu = () => setMobileNavbarOpen(false)
  const openMobileMenu = () => setMobileNavbarOpen(true)

  return (
    <div className="App">
      <MobileNav
        isOpen={mobileNavbarOpen}
        closeMobileMenu={closeMobileMenu}
        currentPath={location.pathname}
      />
      <Backdrop closeMobileMenu={closeMobileMenu} isOpen={mobileNavbarOpen} />
      <DesktopNav
        userIsScrolled={userIsScrolled}
        mobileMenuOpen={openMobileMenu}
        currentPath={location.pathname}
      />
      <Element name="top" className="top-element"></Element>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
