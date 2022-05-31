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
  
`