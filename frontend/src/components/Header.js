import React from 'react'
import {
  Navbar,
  Button,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Container
} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
    <Container >
      <Navbar.Brand >
        <Link to='/' style={{fontWeight:'bold'}}>Note Maker</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
           
           <Nav className='mr-auto'>
           <Form inline>
          <Form.Control
            type="text"
            placeholder="Search"
            className="mr-sm-2"
           
          />
        
        </Form>
           </Nav>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <Nav.Link >
          <Link to='/mynotes'>NoteMaker</Link>
          </Nav.Link>
          <NavDropdown title="Kumar Aditya" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
             Log Out
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
