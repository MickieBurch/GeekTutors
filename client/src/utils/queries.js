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
