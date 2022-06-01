import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Auth from '../utils/auth'
<<<<<<< HEAD
<<<<<<< HEAD
import Cards from '../components/Card'
=======
import {GET_ALL_TUTORS} from "../utils/queries"
=======
import {GET_ALL_TUTORS, GET_CURRENT_USER} from "../utils/queries"
import { ENROLL_STUDENT, UNENROLL_STUDENT } from "../utils/mutations";
>>>>>>> 478f727078f2922571cea0a37a5e5ca3de6f708d
import dashboardTutorCard from "../components/dashboardTutorCard"
function Dashboard(props) {
  const [enrollStudent,{error1}]=useMutation(ENROLL_STUDENT)
  const [unenrollStudent,{error}]=useMutation(UNENROLL_STUDENT)
  const enrollStudentFunction = async(tutorId)=>{
      try {
        const token = Auth.getToken()
        const updatedUser = await enrollStudent({
          variables:{token,tutorId}
        })
        console.log("updatedUser:",updatedUser);
        props.setCurrentTab("tutor")
      } catch (error) {
        console.log(error);
      }
  }
<<<<<<< HEAD
  const {loading, error, data}=useQuery(GET_ALL_TUTORS)
  if (loading) return "LOADING..."
  if (error) return `ERROR: ${error}`
  console.log(data.GetAllTutors);
>>>>>>> 4cf6de311d10dead2d9df58bd9ebd641456f27be

=======
  const unenrollStudentFunction = async(tutorId)=>{
    try {
      const token = Auth.getToken()
      const updatedUser = await unenrollStudent({
        variables:{token,tutorId}
      })
      console.log("unenrolled user:",updatedUser);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  const userQuery = useQuery(GET_CURRENT_USER,{variables:{token:Auth.getToken()}})
  const tutorQuery=useQuery(GET_ALL_TUTORS)
  if (userQuery.loading||tutorQuery.loading) return "LOADING"
  if (userQuery.error) console.log(userQuery.error);
  if (tutorQuery.error) console.log(tutorQuery.error);
>>>>>>> 478f727078f2922571cea0a37a5e5ca3de6f708d
  return (
    <Container className='mt-4'>
      {Auth.loggedIn() ? (
        <h1 className="text-center">Available Tutors</h1>
      ) : (
        <h1 className='text-center'>Create an Account to Schedule a Session</h1>
      )}
      <Row className='mt-4'>
        {tutorQuery.data.GetAllTutors.map(element=>(dashboardTutorCard({element,props,userQuery,enrollStudentFunction,unenrollStudentFunction})))}
      </Row>
    </Container>

  );
}

export default Dashboard;
