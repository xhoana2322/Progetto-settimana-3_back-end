import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function MyNavbar() {



  return (
    <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='text-uppercase'>
        <Navbar.Brand href="#home" className='fw-semibold'>mod pizza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">location</Nav.Link>
            <Nav.Link href="#link">menu</Nav.Link>
            <Nav.Link href="#link">rewards</Nav.Link>
            <NavDropdown title="about us" id="basic-nav-dropdown" className='text-capitalize'>
              <NavDropdown.Item href="#action/3.1">our story</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">our purpose</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">playlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> MOD careers</NavDropdown.Item>
            </NavDropdown>
            <Button variant="danger" className='text-uppercase'>order</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

