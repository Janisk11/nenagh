import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import './footer.css';

import Logo from '../../assets/footer/logo.png';
import Arrow from '../../assets/footer/arrow.svg';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const footer = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col>
          <div className="footer-box">
            <img src={Logo} alt="logo" className="footer-logo" />
            <p>&copy; Nenagh Kairali {new Date().getFullYear()}</p>
          </div>
        </Col>
        <Col>
          <Link to="top" spy={true} smooth={true} offset={-140} duration={500}>
            <div className="footer-box back-to-top">
              <p>BACK TO TOP</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  </div>
)

export default footer;
