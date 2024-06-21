import React from 'react'
import styled from 'styled-components'

// SCSS
import './title.css'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`

const Col = styled.div`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  max-width: ${(props) => (props.size ? (props.size / 12) * 100 : 100)}%;
  padding: 0 15px;

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
  }
`

const title = (props) => (
  <Row>
    <Col>
      <div className="big-title">
        <h2 className="weight800 font60 padding40">{props.title}</h2>
      </div>
    </Col>
  </Row>
)

export default title
