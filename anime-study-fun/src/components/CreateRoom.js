import React, {useEffect, useState} from 'react';
import { Modal, Form, FormControl, Button } from 'react-bootstrap';

import '../App.css';

const CreateRoom = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <button className="createButton" variant="primary" onClick={handleShow}>
          Create a Room
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Room Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Room Name" />

                    <Form.Label className="mt-3">Participants</Form.Label>
                    <Form.Control as="select">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password (Optional)</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Modal.Footer>
                    <Button variant="outline-light" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="createRoomPopupButton" type="submit" onClick={handleClose} class="createRoomSubmit" >
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default CreateRoom;