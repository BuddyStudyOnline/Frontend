import React, { useState, useEffect } from 'react';
import RoomCard from './components/RoomCard';
import Navbar from './components/Navbar'
import CreateRoom from './components/CreateRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import math from './img/math.jpg'; 
import bio from './img/bio.jpg'; 
import coding from './img/coding.jpg'; 
import integrals from './img/integrals.jpg'; 
import mathtime from './img/mathtime.jpg'; 
import pepehands from './img/pepehands.png'; 
import physics from './img/physics.jpg'; 
import delta from "./img/delta.png"; 

const Chatrooms = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.getElementById("closeButton").style.marginLeft = "15%";
        }
        else {
            document.getElementById("closeButton").style.marginLeft = "0";
        }}
      );
      
    return (
        <>
        <button id="closeButton" onClick={() => setOpen(!open)} className={"closeButton"}>
        <FontAwesomeIcon icon={faBars} />
        </button>
        <div id="sidebar-wrapper">      
            <Navbar state={open}/>
        </div>
        <div className="content">
        <h1 className="leftHeader"> Chatrooms </h1>

        <Row md={6} xl={12} className="d-flex justify-content-center">
            <RoomCard name={"Math Help Room"} numOfUsers={"5"} maxCapacity={"10"} src={math}/> 
            <RoomCard name={"Biology Help Room"} numOfUsers={"2"} maxCapacity={"10"} src={bio}/>
            <RoomCard name={"crying about midterms :'("} numOfUsers={"8"} maxCapacity={"20"} src={pepehands}/>
            <RoomCard name={"math time"} numOfUsers={"2"} maxCapacity={"6"} src={mathtime}/>    
        </Row>
        <Row md={6} xl={12} className="d-flex justify-content-center">
            <RoomCard name={"Study Physics with Me"} numOfUsers={"2"} maxCapacity={"2"} src={physics}/>
            <RoomCard name={"Chill Coding Room"} numOfUsers={"8"} maxCapacity={"10"} src={coding}/>
            <RoomCard name={"Help! I don't get integrals"} numOfUsers={"1"} maxCapacity={"3"} src={integrals}/>
            <RoomCard name={"Deltahacks Team Unicorns"} numOfUsers={"1"} maxCapacity={"4"} src={delta}/>   
        </Row> 
        <div id="asdf">
            <CreateRoom />
        </div>
        
        </div>
      </>
    )
}

export default Chatrooms;