import React from 'react'
import { Link } from 'react-scroll'
// CSS
import './button.css'

const button = (props) => (
  <div className="button">
    <Link
      className="button-link"
      to={props.target}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {props.label}
    </Link>
  </div>
)

export default button
