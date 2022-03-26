import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import imgcar from '../Card/bipbip.png'

export const CardHapus = () => {
  
  return (
    <div>
        <Card style={{ width: '387px', height:'433px' }}>
  <Card.Img style={{paddingTop:'40px', width:'300px', height:'250px'}} variant="top" src= {imgcar} />
  <Card.Body>
    <Card.Title>Menghapus Data Mobil</Card.Title>
    <Card.Text>
    Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
    </Card.Text>
    <Row>
    <Col><Button style={{width:'123px'}} variant="primary">Ya</Button></Col>
    <Col> <Button style={{width:'123px'}} variant="outline-primary">Tidak</Button></Col>
    </Row>
  </Card.Body>
</Card>
    </div>
  )
}
