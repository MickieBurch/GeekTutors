import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap";
import Auth from "../utils/auth"
export default function TutorCard(props){
    console.log("imcoming props: ",props);
    function renderSaveButton(){
        if(Auth.loggedIn()){
            return <button onClick={(e) => { e.preventDefault(); }}>Save</button>
        }
    }
    return(
        <Col lg={3} sm={`12`} >
          <Card style={{ width: "18rem" }} border='dark' className='mx-auto  mt-5'>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.firstName} {props.lastName}</Card.Title>
              <Card.Text>Subjects offered:</Card.Text>
            </Card.Body>
            <div className="list-group">
                {props.subjectsOffered.map(element=>(<li className="list-group-item list-group-item-disabled">{element}</li>))}
            </div>
            {renderSaveButton()}
          </Card>
        </Col>
    )
}