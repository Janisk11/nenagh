import React from 'react'
import { Link } from 'react-scroll'

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
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={props.closeMobileMenu}
        >
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="mobile-navbar-menu">
        <ul>
          <li className="flex-center">
            <Link
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              ABOUT
            </Link>
          </li>
          <li className="flex-center">
            <Link
              activeClass="active-link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              EVENTS
            </Link>
          </li>

          {/* <li className="flex-center">
            <Link
              activeClass="active-link"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              BLOG
            </Link>
          </li> */}
          <li className="flex-center">
            <Link
              activeClass="active-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default mobileNav
