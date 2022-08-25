import React from 'react';
//lib
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// assets
import logopage from '../../assets/landing/logo.png';
//styles import './style'
import { navbarCarr, textCarr } from './style';

function Header(){
    return(
      <Navbar bg="light" expand="lg" className={navbarCarr}>
      <Container>
        <Navbar.Brand href="#home"><img src={logopage} alt="" style={{width:'50px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={textCarr}>Inicio</Nav.Link>
            <Nav.Link href="#link" className={textCarr}>Automoviles</Nav.Link>
            <Nav.Link href="#link" className={textCarr}>Contacto</Nav.Link>
            <Nav.Link href="#link" className={textCarr}><Button variant="success">Iniciar Sesion</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Header;