import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
// css
import './navbar.css'
// Assets
import LogoImg from '../../assets/navbar/kairali.png'
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg'

const desktopNav = (props) => {
  return (
    <nav
      className={`Navbar ${!props.userIsScrolled ? 'extraLargeNavbar' : ''}`}
    >
      <div className="wrapper flex-s-between">
        <div className="desktop-navabar-logo">
          {props.currentPath === '/' ? (
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img src={LogoImg} alt="logo" className="pointer" />
            </ScrollLink>
          ) : (
            <RouterLink to="/">
              <img src={LogoImg} alt="logo" className="pointer" />
            </RouterLink>
          )}
        </div>
        <div className="mobile-menu" onClick={props.mobileMenuOpen}>
          <img src={MobileMenuIcon} alt="menu" />
        </div>
        <div className="desktop-menu">
          <ul className="flex-s-between">
            <li>
              <RouterLink to="/">HOME</RouterLink>
            </li>
            <li>
              <RouterLink to="/events">EVENTS</RouterLink>
            </li>
            <li>
              <RouterLink to="/contactus">CONTACT</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default desktopNav
