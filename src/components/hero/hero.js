import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
// CSS
import './hero.css'
// Assets
import HeroImage from '../../assets/hero/hero1.jpg'
// Components
import Button from '../uiComponents/button/button'

const Hero = () => (
  <Element name="hero" id="hero">
    <div className="hero-content">
      <div className="wrapper">
        <Row>
          <Column>
            <div className="hero-info">
              <h1 className="weight800 font60">Welcome to Nenagh Kairali</h1>
              <p className="font20">Embracing Kerala, Enriching Nenagh</p>
              <Button label="SEND MESSAGE" target={'contact'} />
            </div>
          </Column>
          <Column>
            <div className="hero-image">
              <img src={HeroImage} alt="hero" />
            </div>
          </Column>
        </Row>
      </div>
    </div>
  </Element>
)

export default Hero

// Styled Components

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ;
`

const Column = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`
