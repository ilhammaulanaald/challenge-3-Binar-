import React from 'react'
import { Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';


export const SignIn = () => {
  return (
    <div>
    <Row>
        <Col xs={8}><LeftSide/></Col>
        <Col><RightSide/></Col>
    </Row>
    </div>
  )
}
