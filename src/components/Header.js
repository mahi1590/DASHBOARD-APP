import React from 'react';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <Nav className="ml-auto">
        <Nav.Link href="#notifications"><FaBell /></Nav.Link>
        <Nav.Link href="#profile"><FaUserCircle /></Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
