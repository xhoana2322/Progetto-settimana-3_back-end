import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import img from '../assets/img/logo.png'
export default function MyNavbar() {

  

  return (
    <>
    <Navbar expand="lg" className="bg-body-light border-bottom">
        <Container className='text-uppercase'>
          <Navbar.Brand href="#home" className='fw-semibold'><img src={img} alt="" width={200} height={50} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className='d-flex justify-content-between'>
              <Nav.Link to="/" >home</Nav.Link>
              <Nav.Link to="/users" className='mx-3'>users</Nav.Link>
              <Nav.Link href="#link">menu</Nav.Link>
              <NavDropdown title="ABOUT US" id="basic-nav-dropdown" className='text-capitalize mx-3'>
                <NavDropdown.Item href="#action/3.1">our story</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">our purpose</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">playlist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"> MOD careers</NavDropdown.Item>
              </NavDropdown>
            <Button variant="danger" className='text-uppercase px-4'>order</Button>
          </Nav>
        </Container>
    </Navbar>
    </>
  )
}

