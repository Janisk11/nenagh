import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

// css
import './navbar.css'
// Assets
import CloseIcons from '../../assets/navbar/mobile-close.svg'
import Logo from '../../assets/navbar/kairali.png'

const mobileNav = (props) => {
  return (
    <div className={`mobile-navbar ${props.isOpen ? 'mobile-open' : ''}`}>
      <div className="mobile-navbar-close" onClick={props.closeMobileMenu}>
        <img src={CloseIcons} alt="close" />
      </div>
      <div className="mobile-navbar-logo flex-center">
        {props.currentPath === '/' ? (
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            <img src={Logo} alt="logo" />
          </ScrollLink>
        ) : (
          <RouterLink to="/">
            <img src={Logo} alt="logo" />
          </RouterLink>
        )}
      </div>
      <div className="mobile-navbar-menu">
        <ul>
          <li>
            <RouterLink to="/" onClick={props.closeMobileMenu}>
              HOME
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/events" onClick={props.closeMobileMenu}>
              EVENTS
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contactus" onClick={props.closeMobileMenu}>
              CONTACT
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default mobileNav
