import React from 'react';
import { Nav , Navbar , Container} from 'react-bootstrap';
import './Navs.css';
import logo from '../../assets/logo.png';
    
const Navs = ()=>{
    return(
        
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} title="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">about us </Nav.Link>
                        <Nav.Link href="#link">explore foot </Nav.Link>
                        <Nav.Link href="#link">Review </Nav.Link>
                        <Nav.Link href="#link">Faq </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link id="lastnav">123456789</Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
            )
        }

export default Navs;