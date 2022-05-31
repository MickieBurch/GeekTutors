import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Ronald from "../assets/img/Ronald.jpg";
import Auth from '../utils/auth'


function Dashboard(props) {
  function handleSaveTutor() {
    //mutation to add tutor to user
    props.setCurrentTab("tutor")
  }
  return (
    <Container className='mt-4'>
      {Auth.loggedIn() ? (
        <h1 className="text-center">Available Tutors</h1>
      ) : (
        <h1 className='text-center'>Create an Account to Schedule a Session</h1>
      )}
      
      <Row className='mt-4'>
        <Col lg={3} sm={`12`} >
          <Card style={{ width: "18rem" }} border='dark' className='mx-auto  mt-5'>
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
            <button onClick={(e) => { e.preventDefault(); handleSaveTutor() }}>Save</button>
          </Card>
        </Col>
        <Col lg={3}>
          <Card style={{ width: "18rem" }} border='dark' className='mx-auto mt-5'>
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
            <button onClick={(e) => { e.preventDefault(); handleSaveTutor() }}>Save</button>
          </Card>
        </Col>
        <Col lg={3}>
          <Card style={{ width: "18rem" }} border='dark' className='mx-auto  mt-5'>
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
            <button onClick={(e) => { e.preventDefault(); handleSaveTutor() }}>Save</button>
          </Card>
        </Col>
        <Col lg={3}>
          <Card style={{ width: "18rem" }} border='dark' className='mx-auto  mt-5'>
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
            <button onClick={(e) => { e.preventDefault(); handleSaveTutor() }}>Save</button>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}

export default Dashboard;
