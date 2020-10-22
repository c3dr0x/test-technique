// Libs
import { gql } from "apollo-server";

export const outputs = gql`
    type User {
        id: ID!
        email: String!
        firstName: String!
        lastName: String!
        role: UserRoleEnum!
    }

   
    type UserResponse {
        error: String
        user: User
    }

    enum UserRoleEnum {
        SQUAD_LEADER
        SQUAD_MEMBER
        INTERN
    }
`
