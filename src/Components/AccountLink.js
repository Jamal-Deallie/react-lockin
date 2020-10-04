import React from 'react';
import { useState } from 'react';
import {Modal, Button, Nav, Form, Row, Col} from 'react-bootstrap';


function AccountLink() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Nav.Link onClick={handleShow} className ="d-block d-md-none navlinks">ACCOUNT</Nav.Link>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>LOGIN</Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2" className="ml-2 mt-2">
                Email
              </Form.Label>
              <Col sm="8">
              <Form.Control type="text" placeholder="Email" className="mt-2"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2" className="ml-2">
                Password
              </Form.Label>
              <Col sm="8">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
          <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>SIGN IN</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AccountLink;