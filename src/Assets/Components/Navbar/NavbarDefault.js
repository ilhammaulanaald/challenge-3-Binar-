import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../Navbar/NavbarDefault.css'

export const NavbarDefault = () => {
  return (
    <div>
   <Navbar collapseOnSelect expand="lg" bg="#FFFFFF" variant="light">
  <Container>
  <Navbar.Brand href="/homepage">
  <div className='logonav'>
  </div>
  </Navbar.Brand>
  <div className='menu'>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 18H21" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 12H21" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 6H21" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <Form className="d-flex" style={{width:'276px', height:'36px',}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="sm-2"
          aria-label="Search"
        />
        <Button variant="outline-primary" style={{marginRight:'30px'}}>Search</Button>
      </Form>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#CFD4ED"/>
<path d="M13.924 12.6465H16.3693V19.7247C16.3693 20.5163 16.4631 21.0945 16.6506 21.459C16.9422 22.1049 17.5776 22.4278 18.5568 22.4278C19.5308 22.4278 20.1636 22.1049 20.4553 21.459C20.6428 21.0945 20.7365 20.5163 20.7365 19.7247V12.6465H23.1818V19.7247C23.1818 20.9486 22.9917 21.9018 22.6115 22.584C21.9032 23.834 20.5516 24.459 18.5568 24.459C16.562 24.459 15.2079 23.834 14.4943 22.584C14.1141 21.9018 13.924 20.9486 13.924 19.7247V12.6465Z" fill="#151515"/>
</svg>
    <NavDropdown title="Unis Badri" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/login">Sign In</NavDropdown.Item>
        <NavDropdown.Item href="/listcar">Dashboard</NavDropdown.Item>
        <NavDropdown.Item href="/dashboard">List Car</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
