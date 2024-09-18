import React from 'react'

import './contactInfoBox.css'

const contactInfoBox = (props) => (
  <div className="contact-info-box ">
    <div className={props.iconName}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.icon} alt={props.iconName} />
      </a>
    </div>
    <div>
      <p>{props.textLine}</p>
    </div>
  </div>
)

export default contactInfoBox