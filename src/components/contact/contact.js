import React from 'react'
import { Element } from 'react-scroll'

import './contact.css'

import * as emailjs from 'emailjs-com'
import Title from '../uiComponents/title/title'
import ContactInfo from './contactInfo/contactInfo'
import ContactSocial from './contactInfo/contactSocial'
import Modal from '../contactModal/modal'

import ContactBackground from '../../assets/contact/bg.png'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      sending: false,
      successModal: false,
      errorModal: false,
    }
  }

  componentDidMount() {
    emailjs.init(process.env.REACT_APP_CONTACT_API_KEY_TEST)
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (e) => {
    var self = this
    this.setState({ sending: true })
    e.preventDefault()

    var template_params = {
      name: this.state.name,
      from_email: this.state.email,
      message: this.state.message,
    }

    let API_KEY = process.env.REACT_APP_CONTACT_API_KEY_TEST
    let TEMPLATE_ID = process.env.REACT_APP_CONTACT_TEMPLATE_ID_TEST
    let CONTACT_SERVICE = process.env.REACT_APP_CONTACT_SERVICE_TEST

    emailjs.send(CONTACT_SERVICE, TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          self.showSuccessModal()
        } else {
          self.showErrorModal()
        }
      },
      function (error) {
        console.error('EmailJS Error:', error)
        self.showErrorModal()
      }
    )
  }

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false })
    this.resetForm()
  }

  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false })
    this.resetForm()
  }

  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: '', email: '', message: '' })
  }

  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false })
  }

  render() {
    let submitButtonRender = (
      <div className="small-button">
        <button aria-label="send message" type="submit" value="Send Message">
          Send Message
        </button>
      </div>
    )
    if (this.state.sending) {
      submitButtonRender = (
        <div className="small-button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      )
    }
    let modalRender = null
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />
    }
    return (
      <Element name="contact" id="contact">
        {modalRender}
        <div className="wrapper">
          <Title title="CONTACT US." />
          <p className="font12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.
          </p>
          <div className="form-wrapper">
            <form id="contact-form" onSubmit={this.handleSubmit}>
              <h4 className="font30 weight800 padding30">Send Us Message.</h4>
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={this.state.name}
                onChange={this.inputHandler}
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={this.state.email}
                onChange={this.inputHandler}
              />
              <textarea
                rows="6"
                cols="50"
                placeholder="Message..."
                required
                name="message"
                value={this.state.message}
                onChange={this.inputHandler}
              ></textarea>
              {submitButtonRender}
            </form>
            <div className="img-wrapper">
              <div className="flex-center">
                <img src={ContactBackground} alt="contact background" />
              </div>
            </div>
          </div>
          <ContactInfo />
          <ContactSocial />
        </div>
      </Element>
    )
  }
}

export default Contact
