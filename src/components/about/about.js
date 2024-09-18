import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

import './about.css'

import TeamBox from './teamBox'
import TeamInfo from './teaminfo'
import Title from '../uiComponents/title/title'
import Person01 from '../../assets/about/about.png'


const AboutText = styled.h2`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 10px;
`
const AboutTag = styled.h3`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 40px;
`

const About = () => (
  <Element name="about" id="about">
    <div className="wrapper">
      <Title title="ABOUT US" />
      <AboutText>Discover the Heartbeat of Kerala in Nenagh</AboutText>
      <AboutTag>
        Join Us in Celebrating Culture, Community, and Tradition!
      </AboutTag>
      <div className="inner-wrapper">
        <div className="img-wrapper">
            <TeamBox
              avatar={Person01}
              name="Luke Skywalker"
              job="Web designer"
            />
        </div>
        <div className="cont-wrapper">
            <TeamInfo />
        </div>
      </div>
    </div>
  </Element>
)

export default About;
