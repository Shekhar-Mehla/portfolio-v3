import { Button } from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{"<>Shekhar code</>"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav  justify-content-end">
          <Nav className=" d-flex justify-content-center px-4 py-md-3 flex-grow-1 gap-4 ">
            <Link to="#home">Home</Link>
            <Link to="#about">About</Link>
            <Link to="#work">Work</Link>
            <Link to="#skills">Skills</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#contact">Contacts</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
