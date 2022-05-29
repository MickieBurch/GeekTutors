const { gql } = require('@apollo/client')

export const ADD_USER = gql`
    mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        createUser(firstName: $firstName, lastName:$lastName, email:$email, password: $password) {
            token
            user {
                _id
                firstName
                lastName       
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token 
            user {
                _id
                firstName
            }
        }
    }
`



