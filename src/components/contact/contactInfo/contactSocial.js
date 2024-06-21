import React from 'react'
import styled from 'styled-components'
import './contactSocial.css'

import FacebookIcon from '../../../assets/contact/facebook.svg'
import TwitterIcon from '../../../assets/contact/twitter.svg'
import DribbleIcon from '../../../assets/contact/dribble.svg'

const SocialWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Col = styled.div`
  flex: 1;
  max-width: 10%;
  padding: 10px;
  @media (max-width: 768px) {
    max-width: 33%;
  }
  text-align: center;
`

const ContactSocial = () => (
  <SocialWrapper>
    <Row>
      <Col className="contact-social">
        <img src={FacebookIcon} alt="facebook" />
      </Col>
      <Col className="contact-social">
        <img src={TwitterIcon} alt="Twitter" />
      </Col>
      <Col className="contact-social">
        <img src={DribbleIcon} alt="Dribble" />
      </Col>
    </Row>
  </SocialWrapper>
)

export default ContactSocial
