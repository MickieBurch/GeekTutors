import React from "react";
// import Logo from "../assets/logo/nerd.png";
import Ronald from "../assets/img/Ronald.jpg"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Tutor() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Ronald} />
      <Card.Body>
        <Card.Title>Ronald J. Tutor</Card.Title>
        <Card.Text>Articles by Ronald</Card.Text>
      </Card.Body>
      <div class="list-group">
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          class="list-group-item list-group-item-action"
        >
          Cras justo odio
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          class="list-group-item list-group-item-action"
        >
          Dapibus ac facilisis in
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          class="list-group-item list-group-item-action"
        >
          Morbi leo risus
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          class="list-group-item list-group-item-action"
        >
          Porta ac consectetur ac
        </a>
        <a
          href="https://github.com/MickieBurch/GeekTutors"
          class="list-group-item list-group-item-action"
        >
          Vestibulum at eros
        </a>
      </div>
    </Card>
  );
}

export default Tutor;
