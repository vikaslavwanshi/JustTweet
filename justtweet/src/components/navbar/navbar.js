import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// reference -https://react-bootstrap.netlify.app/docs/components/navbar
// Navbar fucntion to display below tabs on UI
function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Navbar.Brand>Just Tweet</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#moments">Moments</Nav.Link>
            <Nav.Link href="#notifications">Notifications</Nav.Link>
            <Nav.Link href="#messages">Messages</Nav.Link>
          </Nav>
          <Form inline>
            <Row className="align-items-center">
              <Col xs="auto">
                <InputGroup>
                  <Form.Control
                    type="search"
                    placeholder="Search JustTweet"
                    className="mr-sm-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary" type="tweet">Tweet</Button>
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;