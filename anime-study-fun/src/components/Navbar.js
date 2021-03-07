import React, {useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';
import {useHistory } from 'react-router-dom';

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
    const history = useHistory();

    const changeRoute = (path) => {
        history.replace({pathname: path})
    };

    return (
        <Nav id="sidebar" className="col-md-12 sidebar" 
            activeKey="/home"
        >
        <Nav.Item>
            <Nav.Link href="/home">DASHBOARD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={() => changeRoute("/chatroom")}>CHATROOMS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link >MESSAGES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>MY ACCOUNT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>HELP</Nav.Link>
        </Nav.Item>
        </Nav>
    )  
}

export default NavBar;