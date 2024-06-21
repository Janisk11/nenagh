import React from 'react'
import styled from 'styled-components'
import './contactInfo.css';

import ContactInfoBox from '../contactInfo/contactInfoBox'
import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg'
import ContactInfoIcon2 from '../../../assets/contact/contact-info-icon2.svg'
import ContactInfoIcon3 from '../../../assets/contact/contact-info-icon3.svg'


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ContactInfo = () => (
  <Row>
    <div className="contact-info">
      <ContactInfoBox
        icon={ContactInfoIcon1}
        textLine1="Nenagh, Tipperary"
        textLine2="Republic of Ireland"
      />
    </div>
    <div className="contact-info">
      <ContactInfoBox
        icon={ContactInfoIcon2}
        textLine1="+353 123 - 456 -78"
        textLine2="+353 987 - 654 -32"
      />
    </div>
    <div className="contact-info">
      <ContactInfoBox
        icon={ContactInfoIcon3}
        textLine1="contactemail@gmail.com"
        textLine2=""
      />
    </div>
  </Row>
)

export default ContactInfo
