import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import img from '../assets/img/logo.png'
export default function MyNavbar() {

  

  return (
    <>
    <Navbar expand="lg" className="bg-body-light border-bottom">
        <Container className='text-uppercase'>
          <Navbar.Brand href="#home" className='fw-semibold'><img src={img} alt="" width={150} height={50} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className='d-flex justify-content-between'>
              <Nav.Link href='/' >home</Nav.Link>
              <Nav.Link href='/users' className='mx-3'>users</Nav.Link>
              <Nav.Link href="#link">talks</Nav.Link>
              <NavDropdown title="ABOUT US" id="basic-nav-dropdown" className='text-capitalize mx-3'>
                <NavDropdown.Item href="#action/3.1">our story</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">our purpose</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">playlist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"> TED careers</NavDropdown.Item>
              </NavDropdown>
            <Button variant="danger" className='text-uppercase px-4'>talk about it</Button>
          </Nav>
        </Container>
    </Navbar>
    </>
  )
}

