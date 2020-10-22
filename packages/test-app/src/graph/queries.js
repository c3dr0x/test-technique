import { gql } from "@apollo/client";

const NAME_FRAGMENT = gql`
    fragment NameParts on User {
        firstName
        lastName
    }
`;

export const GET_USERS = gql`
    query users {
        users {
            id
            email
            ...NameParts
            role
        }
    }
    ${NAME_FRAGMENT}
`;

export const GET_USER = gql`
    query users($userId: ID!) {
        users(filter: { userId: $userId }) {
            id
            email
            ...NameParts
            role
        }
    }
    ${NAME_FRAGMENT}
`;
