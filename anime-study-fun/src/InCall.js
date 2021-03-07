import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import pepehands from "./img/pepehands.png"; 
import { Row, Col } from "react-bootstrap";
import Chat from "./components/Chat";

const InCall = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.getElementById("closeButton").style.marginLeft = "15%";
        }
        else {
            document.getElementById("closeButton").style.marginLeft = "0";
        }}
      );
// Hi friends
    return (
        <>
            <button id="closeButton" onClick={() => setOpen(!open)} className={"closeButton"}>
            <FontAwesomeIcon icon={faBars} />
            </button>
            <div id="sidebar-wrapper">      
                <Navbar state={open}/>
            </div>
            
            <div id="parent">
                <Row className="d-flex justify-content-around">
                    <iframe
                        id="other"
                        src="https://player.twitch.tv/?channel=ahappihill&parent=localhost&muted=true&autoplay=true"
                        height="720"
                        width="1280"
                        allowfullscreen="true">
                    </iframe>
                    {/* <iframe id="other" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1" allow="autoplay" frameborder="0" ></iframe> */}
                </Row>
                <div id="child">
                    <iframe
                        id="self"
                        src="https://player.twitch.tv/?channel=eatmyshurikenlol&parent=localhost&autoplay=true"
                        height="720"
                        width="1280"
                        allowfullscreen="true">
                    </iframe>
                    {/* <iframe id="self" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1" allow="autoplay" frameborder="0" ></iframe> */}
                </div>
            </div>  

            <Chat />
        </>
    )

}

export default InCall;