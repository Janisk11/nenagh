import React from 'react'

import './navbar.css'

const backdrop = (props) => {
  return (
    <div
      onClick={props.closeMobileMenu}
      className={`backdrop ${props.isOpen ? 'backdrop-open' : ''}`}
    ></div>
  )
}

export default backdrop
