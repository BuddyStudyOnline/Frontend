import React from 'react';
import {Card} from "react-bootstrap";
import test from '../img/download.svg';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ChatMessage = (props) => {
    return (
        <div class="chatMessage" self={props.self} key={props.key}>
            {props.message}
        </div>
    )
};

export default ChatMessage;
