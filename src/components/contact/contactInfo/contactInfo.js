import React from 'react'
import './contactInfo.css';

import ContactInfoBox from '../contactInfo/contactInfoBox'
import FacebookIcon from '../../../assets/contact/facebook.svg'
import YoutubeIcon from '../../../assets/contact/youtube.svg'
import GmailIcon from '../../../assets/contact/email.svg'

const ContactInfo = () => (
  <div className="contact-info">
    <ContactInfoBox
      icon={FacebookIcon}
      iconName="facebook"
      link="https://www.facebook.com/NenaghKairaliofficial/"
      textLine="Facebook"
    />
    <ContactInfoBox
      icon={YoutubeIcon}
      link="www.youtube.com/@nenaghkairali2568"
      iconName="youtube"
      textLine="YouTube"
    />
    <ContactInfoBox
      icon={GmailIcon}
      link="mailto:nenaghkairali2007@gmail.com"
      iconName="email"
      textLine="nenaghkairali2007@gmail.com"
    />
  </div>
)

export default ContactInfo
