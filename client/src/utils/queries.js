import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe($userId: ID, $username: String) {
    me(userId: $userId, username: $username) {
      _id
      username
      bookCount
      savedBooks
    }
  }
`;
