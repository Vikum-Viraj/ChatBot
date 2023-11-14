import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg ='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
            <Navbar.Brand >MERN APP</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls = 'basic-navbar-nav'/>
            <Navbar.Collapse id ='basic-navbar-nav'>
                <Nav className = 'ms-auto'>
                <LinkContainer to='/login' >
                <Nav.Link>
                <FaSignInAlt/>Sign in
                </Nav.Link>
                </LinkContainer>   
                <LinkContainer to='/register'>
                <Nav.Link>
                <FaSignOutAlt/>Sign up
                </Nav.Link>
                </LinkContainer>
                </Nav> 
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
