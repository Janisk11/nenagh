import React from 'react'
import './modal.css'

const errorModal = (props) => (
  <div className="error-modal">
    <p>Oooops!!!</p>
    <p>Something went wrong :{'('}</p>
    <div
      role="button"
      tabIndex={0}
      className="modal-btn flex-center"
      onClick={props.closeModal}
      onKeyDown={props.closeModal}
    >
      <p>Ok</p>
    </div>
  </div>
)

export default errorModal
