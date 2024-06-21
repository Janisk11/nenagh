import React from 'react'

import './contactInfoBox.css'

const contactInfoBox = (props) => (
  <div className="contact-info-box">
    <div>
      <img src={props.icon} alt="address" />
    </div>
    <div>
      <p>{props.textLine1}</p>
      <p>{props.textLine2}</p>
    </div>
  </div>
)

export default contactInfoBox