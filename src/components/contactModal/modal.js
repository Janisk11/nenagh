import React from 'react'
import { Fade } from 'react-awesome-reveal'
import './modal.css'

import ModalBackdrop from './Modalbackdrop'
import SuccessModal from './successModal'
import ErrorModal from './errorModal'

const modal = (props) => {
  let innerModalRender = null
  if (props.status === 'success') {
    innerModalRender = (
      <Fade bottom duration={500}>
        <SuccessModal closeModal={props.closeModal} />
      </Fade>
    )
  } else if (props.status === 'error') {
    innerModalRender = (
      <Fade bottom duration={500}>
        <ErrorModal closeModal={props.closeModal} />
      </Fade>
    )
  }

  return (
    <div className="modal">
      <ModalBackdrop closeModal={props.closeModal} />
      {innerModalRender}
    </div>
  )
}

export default modal