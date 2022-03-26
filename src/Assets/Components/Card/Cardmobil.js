import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import imgcar from '../Card/inopa.png'

export const Cardmobil = () => {
  return (
    <div>
         <Card style={{ width: '351px', height:'482px' }}>
  <Card.Img style={{paddingTop:'40px'}} variant="top" src= {imgcar} />
  <Card.Body>
  <Card.Text style={{fontSize:'14px'}}>Nama/Tipe Mobil</Card.Text>
    <Card.Title>Rp. 430.000 / Hari</Card.Title>
    <Card.Text>
    <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9167 5.25L14.8333 2.33333M16.5 0.666664L14.8333 2.33333L16.5 0.666664ZM8.49168 8.675C8.92197 9.09955 9.26402 9.60503 9.49814 10.1623C9.73227 10.7196 9.85385 11.3177 9.85587 11.9222C9.8579 12.5267 9.74033 13.1256 9.50994 13.6844C9.27956 14.2433 8.9409 14.751 8.51347 15.1785C8.08604 15.6059 7.57828 15.9445 7.01943 16.1749C6.46058 16.4053 5.86168 16.5229 5.25721 16.5209C4.65274 16.5188 4.05463 16.3973 3.49734 16.1631C2.94005 15.929 2.43457 15.5869 2.01002 15.1567C1.17512 14.2922 0.71315 13.1345 0.723592 11.9327C0.734035 10.731 1.21606 9.58145 2.06585 8.73166C2.91563 7.88188 4.06519 7.39985 5.26693 7.38941C6.46866 7.37897 7.62642 7.84094 8.49085 8.67583L8.49168 8.675ZM8.49168 8.675L11.9167 5.25L8.49168 8.675ZM11.9167 5.25L14.4167 7.75L17.3333 4.83333L14.8333 2.33333L11.9167 5.25Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    . Start rent - Finish rent
    <br/>
    <br/>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6024 1.66666 9.99999 1.66666C5.39762 1.66666 1.66666 5.39762 1.66666 10C1.66666 14.6024 5.39762 18.3333 9.99999 18.3333Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5V10L13.3333 11.6667" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  . Updated at 4 Apr 2022, 09.00
 <br/>
    </Card.Text>
    <Row>
    <Col><Button style={{width:'123px'}} variant="outline-danger">Delete</Button></Col>
    <Col> <Button style={{width:'123px'}} variant="success">Edit</Button></Col>
    </Row>
  </Card.Body>
</Card>
    </div>
  )
}
