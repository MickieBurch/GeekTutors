import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Auth from '../utils/auth'
import Cards from '../components/Card'


function Dashboard({setCurrentTab}) {
  return (
    <Container className='mt-4'>
      {Auth.loggedIn() ? (
        <h1 className="text-center">Available Tutors</h1>
      ) : (
        <h1 className='text-center'>Create an Account to Schedule a Session</h1>
      )}
      
      <Row className='mt-4'>
        <Cards setCurrentTab={setCurrentTab}/>
      </Row>
    </Container>

  );
}

export default Dashboard;
