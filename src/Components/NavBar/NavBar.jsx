import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import Button from 'react-bootstrap/Button';
import Register from '../../Pages/joinUs/Register';




const NavBar = () => {


  return (

    <div>
        <Navbar fixed="top" bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>GYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="HOME" id="basic-nav-dropdown">
                <NavDropdown.Item href="#pricing">Checkout Our Prices </NavDropdown.Item>
                <NavDropdown.Item href="#programs">Training Programs </NavDropdown.Item>
                <NavDropdown.Item href="#trainer"> Meet Your Trainers</NavDropdown.Item>
                <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/about">ABOUT US </Nav.Link>
              <Nav.Link as={NavLink} to="/programs">PROGRAMS</Nav.Link>
              <Nav.Link as={NavLink} to="/blogs">BLOGS</Nav.Link>
              <Nav.Link as={NavLink} to="/pricing">PRICING</Nav.Link>
            </Nav>
          
            <Link to='/register' element={<Register/>} ><Button variant = "danger" className = "joinBtn">Join Us</Button>  </Link>
            </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>

  )
}

export default NavBar
