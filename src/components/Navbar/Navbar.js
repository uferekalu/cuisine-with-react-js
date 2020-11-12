import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './Navbar.css';

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="navBar">
                <Navbar.Brand href="#home" className="navBrand">
                <img
                    alt=""
                    src="/assets/images/evergreen_logo_white.png"
                    width=""
                    height="30"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="navBarCollapse">
                    <Nav className="ml-auto navLink">
                        <Nav.Link href="#features"><i class='fa fa-search icons'>Product</i></Nav.Link>
                        <Nav.Link href="#pricing"><i class="fa fa-heart icons">Services</i></Nav.Link>
                        <Nav.Link href="#deets"><i class="fa fa-shopping-cart icons">About us</i></Nav.Link>
                        <Nav.Link href="#deets"><i class="fa fa-user icons">Contact Us</i></Nav.Link>
                        <Button className="navButton">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;