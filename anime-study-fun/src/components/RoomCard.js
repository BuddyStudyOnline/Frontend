import React from 'react';
import {Card} from "react-bootstrap";
import test from '../img/download.svg';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const RoomCard = (props) => {
    return (
        <Card className={"roomCard"} style={{ minWidth: "300px"}}>
            <Card.Body>
                <Card.Img variant="top" src={props.src} />
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-center">
                        <div><FontAwesomeIcon icon={faUser} /> {props.numOfUsers}/{props.maxCapacity}</div>
                    </div>
                    
                </Card.Text>
                <button className="joinButton">
                    Join Room
                </button>
            </Card.Body>
        </Card>
    )
};

export default RoomCard;
