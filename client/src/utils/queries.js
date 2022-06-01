import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
  GetCurrentUser {
    _id
    username
    email
  }
}
`;

export const GET_ARTICLES_BY_PROCTOR_ID=gql`
  
`