import React from 'react';
import { useState } from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';


function GuestBtn() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button onClick={handleShow} className ="guestBtn ml-1">
          GUEST PASS
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Guest Pass</Modal.Title>
          </Modal.Header>
          <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="4" className="ml-2 mt-2">
                First Name
              </Form.Label>
              <Col sm="6">
              <Form.Control type="text" placeholder="First Name" className="mt-2"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="4" className="ml-2 mt-2">
                Last Name
              </Form.Label>
              <Col sm="6">
              <Form.Control type="text" placeholder="Last Name" className="mt-2"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="4" className="ml-2 mt-2">
                Email
              </Form.Label>
              <Col sm="6">
              <Form.Control type="text" placeholder="Email" className="mt-2"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="4" className="ml-2">
                Phone Number
              </Form.Label>
              <Col sm="6">
                <Form.Control type="text" placeholder="Phone Number" />
              </Col>
            </Form.Group>
          </Form>
          <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Email Guest Pass</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default GuestBtn;