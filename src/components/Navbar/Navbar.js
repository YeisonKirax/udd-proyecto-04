import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css';
export default function NavbarCustom() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/about-us">
          <img src='https://react-bootstrap.github.io/logo.svg' width="30" height="30" className="d-inline-block align-top"
            alt="React Bootstrap logo"></img>
          Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link href='/about-us'>Nosotros</Nav.Link>
            <Nav.Link href='/menu'>Menú</Nav.Link>
            <Nav.Link href='/reservations'>Reservaciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar >
  )
}