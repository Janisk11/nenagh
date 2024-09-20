import React from 'react'

import './teamBox.css'

const teamBox = (props) => (
  <div className="team-box flex-center">
    <img src={props.avatar} alt="person" />
  </div>
)

export default teamBox
