import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Auth from '../utils/auth'
import {GET_ALL_TUTORS} from "../utils/queries"
import { ENROLL_STUDENT } from "../utils/mutations";
import dashboardTutorCard from "../components/dashboardTutorCard"
function Dashboard(props) {
  const [enrollStudent,{error1}]=useMutation(ENROLL_STUDENT)
  const enrollStudentFunction = async(tutorId)=>{
      try {
        const token = Auth.getToken()
        const updatedUser = await enrollStudent({
          variables:{token,tutorId}
        })
        console.log("updatedUser:",updatedUser);
      } catch (error) {
        console.log(error);
      }
  }
  const {loading, error, data}=useQuery(GET_ALL_TUTORS)
  if (loading) return "LOADING..."
  if (error) return `ERROR: ${error}`
  console.log(data.GetAllTutors);

  return (
    <Container className='mt-4'>
      {Auth.loggedIn() ? (
        <h1 className="text-center">Available Tutors</h1>
      ) : (
        <h1 className='text-center'>Create an Account to Schedule a Session</h1>
      )}
      <Row className='mt-4'>
        {data.GetAllTutors.map(element=>(dashboardTutorCard({element,props,enrollStudentFunction})))}
      </Row>
    </Container>

  );
}

export default Dashboard;
