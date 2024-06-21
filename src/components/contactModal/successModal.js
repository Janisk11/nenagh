import React from 'react'
import './modal.css'

const successModal = (props) => (
  <div className="sucess-modal">
    <p>Success!</p>
    <p>
      Thank you for your email.<br></br>We will respond as soon as possible.
    </p>
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

export default successModal
