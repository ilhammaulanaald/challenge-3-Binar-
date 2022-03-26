import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router';


export const RightSide = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div style={{width:'100%', paddingLeft:'55px', paddingTop:'220px', paddingRight:'57px'}}>
      <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="34" fill="#CFD4ED"/>
</svg>

    <h1 style={{fontSize:'24px', marginTop:'32px'}}>Welcome, Admin BCR</h1>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width:'370px', height:'38.75px'}}>Email</Form.Label>
    <Form.Control style={{width:'370px', height:'38.75px'}} type="email" placeholder="Contoh: johndee@gmail.com" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{width:'370px', height:'38.75px'}}>Password</Form.Label>
    <Form.Control style={{width:'370px', height:'38.75px'}} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button onClick={() => navigate("/listcar")} variant="primary" type="submit" style={{width:'370px', height:'36px'}}>
    Sign In
  </Button>
</Form>
    </div>
    </div>
  )
}
