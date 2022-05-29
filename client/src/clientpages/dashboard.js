import React from "react";
import { Container, Card, CardGroup, Row } from "react-bootstrap";
import Ronald from "../assets/img/Ronald.jpg";


function Dashboard(props) {
  function handleSaveTutor(){
    //mutation to add tutor to user
    props.setCurrentTab("tutor")
  }
  return (
    <Container>
      <h1 className="text-center">Available Tutors</h1>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Ronald} />
          <Card.Body>
            <Card.Title>Ronald J. Tutor</Card.Title>
            <Card.Text>Subjects offered:</Card.Text>
          </Card.Body>
          <div className="list-group">
            <li className="list-group-item list-group-item">HTML</li>
            <li className="list-group-item list-group-item-disabled">CSS</li>
            <li className="list-group-item list-group-item-disabled">Javascript</li>
          </div>
          <button onClick={(e)=>{e.preventDefault();handleSaveTutor()}}>Save</button>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Ronald} />
          <Card.Body>
            <Card.Title>Robert Tutor</Card.Title>
            <Card.Text>Subjects offered:</Card.Text>
          </Card.Body>
          <div className="list-group">
            <li className="list-group-item list-group-item-disabled">React</li>
            <li className="list-group-item list-group-item-disabled">C#</li>
            <li className="list-group-item list-group-item-disabled">Typescript</li>
          </div>
          <button onClick={(e)=>{e.preventDefault();handleSaveTutor()}}>Save</button>
        </Card>

        <div className="w-100 d-none d-md-block"></div>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Ronald} />
          <Card.Body>
            <Card.Title>Rhonda Tutor</Card.Title>
            <Card.Text>Subjects offered:</Card.Text>
          </Card.Body>
          <div className="list-group">
            <li className="list-group-item list-group-item-disabled">HTML</li>
            <li className="list-group-item list-group-item-disabled">Javascript</li>
            <li className="list-group-item list-group-item-disabled">CSS</li>
          </div>
          <button onClick={(e)=>{e.preventDefault();handleSaveTutor()}}>Save</button>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Ronald} />
          <Card.Body>
            <Card.Title>Alec Tutor</Card.Title>
            <Card.Text>Subjects offered:</Card.Text>
          </Card.Body>
          <div className="list-group">
            <li className="list-group-item list-group-item-disabled">MongoDb</li>
            <li className="list-group-item list-group-item-disabled">SQL</li>
            <li className="list-group-item list-group-item-disabled">Node.js</li>
          </div>
          <button onClick={(e)=>{e.preventDefault();handleSaveTutor()}}>Save</button>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default Dashboard;
