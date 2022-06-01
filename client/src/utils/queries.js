import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser($token:String!){
    GetCurrentUser(token:$token){
      _id
      firstName
      lastName
      email
      isTutor
      selectedTutor{
        _id
        firstName
        lastName
        description
        image
        articles{
          _id
          name
          image
          body
        }
      }
    }
  }
`;

export const GET_ALL_TUTORS=gql`
query GetAllTutors{
  GetAllTutors{
    _id
    firstName
    lastName
    image
    subjectsOffered
  }
}
`
