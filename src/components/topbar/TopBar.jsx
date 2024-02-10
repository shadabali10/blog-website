import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';


const TopBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="justify-content-space-between">
 

            <Navbar.Brand as={Link} to="/">
            TRILUXO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" activeClassName="active">
                        HOME
                    </Nav.Link>
                    <Nav.Link as={Link} to="/write" activeClassName="active">
                        BLOG
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login" activeClassName="active">
                        LOGIN
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register" activeClassName="active">
                        REGISTER
                    </Nav.Link>
                    <Nav.Link as={Link} to="/settings" activeClassName="active">
                        <FontAwesomeIcon icon={faUser} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopBar;
