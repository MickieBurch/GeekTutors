import React from "react";
// import Logo from "../assets/logo/nerd.png";
import Ronald from "../assets/img/Ronald.jpg"
import { Card, Container, Row, Col } from "react-bootstrap";
import GeekCalendar from "./calendar";
import Picker from './datepicker';



function Tutor() {
  return (
    <Container>
      <Row>
        <Col> 
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Ronald} />
      <Card.Body>
        <Card.Title>Ronald J. Tutor</Card.Title>
        <Card.Text>Articles by Ronald</Card.Text>
      </Card.Body>
      <div className="list-group">
        <a
          href="https://github.com/MickieBurch/GeekTutors"npm
          className="list-group-item list-group-item-action"
        >
          Cras justo odio
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          className="list-group-item list-group-item-action"
        >
          Dapibus ac facilisis in
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          className="list-group-item list-group-item-action"
        >
          Morbi leo risus
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          className="list-group-item list-group-item-action"
        >
          Porta ac consectetur ac
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          className="list-group-item list-group-item-action"
        >
          Vestibulum at eros
        </a>
      </div>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Ronald} />
      <Card.Body>
        <Card.Title>Ronald J. Tutor</Card.Title>
        <Card.Text>Bio</Card.Text>
        <Card.Text>Ronald is an excellent tutor and french fry guru.</Card.Text>
      </Card.Body>
    </Card>
    </Col>   
    {/* <GeekCalendar /> */}
    <Col> 
    <Picker />
    </Col>
    </Row>
    </Container>
  );
}



export default Tutor;
