import React from 'react'

// CSS
import './title.css'


const title = (props) => (
  <div className="big-title">
    <h1 className="weight800 padding40">{props.title}</h1>
  </div>
)

export default title
