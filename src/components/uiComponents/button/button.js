import React from 'react'
import { Link  as ScrollLink} from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

// CSS
import './button.css'

const button = (props) => (
  <div className="button">
    {props.linkType !== 'route' ? (
      <ScrollLink
        className="button-link"
        to={props.target}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        {props.label}
      </ScrollLink>
    ) : (
      <RouterLink className="button-link" to={props.target}>
        {props.label}
      </RouterLink>
    )}
  </div>
)

export default button
