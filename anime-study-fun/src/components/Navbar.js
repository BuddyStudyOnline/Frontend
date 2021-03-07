import React, {useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';

const NavBar = (props) => {
    useEffect(() => {
        if (props.state) {
            document.getElementById("sidebar").style.display = "block";
            document.getElementById("sidebar").style.animation="fadeInRight .50s ease  forwards";
        }
        else {
            document.getElementById("sidebar").style.animation= "fadeAway .50s ease  forwards";
        }}
    );

    return (
        <Nav id="sidebar" className="col-md-12 sidebar" 
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/home">DASHBOARD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="chatrooms">CHATROOMS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="messages">MESSAGES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="myAccount">MY ACCOUNT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="help">HELP</Nav.Link>
        </Nav.Item>
        </Nav>
    )  
}

export default NavBar;