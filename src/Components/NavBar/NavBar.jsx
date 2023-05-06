import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import Button from 'react-bootstrap/Button';
import  {useNavigate} from 'react-router-dom'

const NavBar = () => {
const navigate=useNavigate()
  return (

    <div>
        <Navbar fixed="top" bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}><h4><b>GYM</b></h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={NavLink} to="/">HOME </Nav.Link>
              <Nav.Link as={NavLink} to="/about">ABOUT US </Nav.Link>
              <Nav.Link as={NavLink} to="/programs">PROGRAMS</Nav.Link>
              <Nav.Link as={NavLink} to="/trainings">TRAININGS</Nav.Link>
              <Nav.Link as={NavLink} to="/pricing">PRICING</Nav.Link>
            </Nav>

            <Button variant = "danger" className = "joinBtn" onClick={()=>{
              navigate('./register') }}>Join Us</Button>   

            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default NavBar
