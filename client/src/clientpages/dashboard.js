import { useQuery } from "@apollo/client";
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Auth from '../utils/auth'
<<<<<<< HEAD
import Cards from '../components/Card'
=======
import {GET_ALL_TUTORS} from "../utils/queries"
import dashboardTutorCard from "../components/dashboardTutorCard"
function Dashboard(props) {
  function handleSaveTutor() {
    //mutation to add tutor to user
    //ARE YOU SURE? THIS LOOKS LIKE A STATE??? -Alec
    props.setCurrentTab("tutor")
  }
  const {loading, error, data}=useQuery(GET_ALL_TUTORS)
  if (loading) return "LOADING..."
  if (error) return `ERROR: ${error}`
  console.log(data.GetAllTutors);
>>>>>>> 4cf6de311d10dead2d9df58bd9ebd641456f27be

  return (
    <Container className='mt-4'>
      {Auth.loggedIn() ? (
        <h1 className="text-center">Available Tutors</h1>
      ) : (
        <h1 className='text-center'>Create an Account to Schedule a Session</h1>
      )}
      <Row className='mt-4'>
        {data.GetAllTutors.map(element=>(dashboardTutorCard(element)))}
      </Row>
    </Container>

  );
}

export default Dashboard;
