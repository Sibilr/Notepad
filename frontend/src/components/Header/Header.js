import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container >
            <Navbar.Brand>
            <Link to='/'>NOTEPAD</Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto"
                style={{ maxHeight: '100px' }}
                navbarScroll
              > 
                <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                </Form>
                </Nav>
                <Nav className="mr-auto">
                
                <Nav.Link href="/mynotes">
                <Link to='/mynotes'>MyNotes</Link> 
                </Nav.Link>
                  <NavDropdown title="Sibi L R" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header
