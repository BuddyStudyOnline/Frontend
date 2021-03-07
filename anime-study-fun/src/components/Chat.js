import React from 'react';
import {Card} from "react-bootstrap";
import test from '../img/download.svg';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ChatMessage from "./ChatMessage";

const Chat = (props) => {
    return (
        <div id="chat">
            <ChatMessage self={true} key={0} message={"hello"}/>
        </div>
    )
};

export default Chat;
