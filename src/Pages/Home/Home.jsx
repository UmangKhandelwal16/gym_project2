import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';
import Corousel from '../../Components/Corousel/Corousel';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import GymAboutUs from '../../Components/AboutUs/AboutUs';


function Home() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">GYM</Navbar.Brand>
          <Nav className="NavLinks">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Corousel/>
      <GymAboutUs/>
    </div>
  );
}

export default Home;
