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
            <iframe width="100%" height="100%" src="http://localhost:4000"></iframe>
        </div>
    )
};

export default Chat;
