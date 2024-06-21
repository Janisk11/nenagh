import React from 'react'
// Scss
import './projectBox.css'

const projectBox = (props) => (
  <div className="portfolio-box">
    <img src={props.preview} alt="project" />
    {/* <div className="portfolio-hover-info flex-center">
      <div className="text-center">
        <p className="font30 weight800">{props.title}</p>
        <p className="font12 weight500">{props.tag}</p>
      </div>
    </div> */}
  </div>
)

export default projectBox
