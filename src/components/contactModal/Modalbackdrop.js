import React from 'react'
import './modal.css'
const Modalbackdrop = (props) => {
  return (
    <div
      role="button"
      aria-label="Close"
      tabIndex={0}
      className="backdrop"
      onClick={props.closeModal}
      onKeyDown={props.closeModal}
    ></div>
  )
}

export default Modalbackdrop