import React from 'react';
import './Header.css';
import logo from '../../image/logos/Group 1329.png'
import {Navbar,Container,Nav,Button,} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const history = useNavigate();
    return (
        <div >
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img style={{marginLeft:"40px"}} src={logo} width="120px" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='navItem'>
            <Nav.Link style={{color:"black"}} eventKey={1} href="#deets">Home</Nav.Link>
            <Nav.Link style={{color:"black"}} eventKey={2} href="#deets">Donation</Nav.Link>
            <Nav.Link style={{color:"black"}} eventKey={3} href="#deets">Events</Nav.Link>
            <Nav.Link style={{color:"black"}} eventKey={4} href="#memes">
              Block
            </Nav.Link>
            <Button variant="primary">Primary</Button>{' '}
            <Button onClick = {() =>history('/adminLogin')} className="nav-btn" variant="dark">Admin</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;