import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
  }
}
`;

//export const GET_ARTICLES_BY_PROCTOR_ID=gql`
  
//`

export const GET_TUTORS = gql`
  query GetAllUsers($token: String){
    GetAllUsers(token: $token) {
      _id 
      firstName
      lastName
      email
      isTutor
    }
  }
`