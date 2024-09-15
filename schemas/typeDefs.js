const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  bookCount: int
  savedBooks: [Book] 
}

type Book {
  bookId: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Auth {
 token: ID!
 user: User
}

type Query {
me(_id: ID, username: String): User
}

input BookInput {
 bookId: String!
 authors: [String]!
 description: String!
 title: String!
 image: String!
 link: String!
}

type Mutation {
 login(username: String, email: String, password: String!): Auth
 addUser(username: String!, email: String!, password: String!): Auth
 saveBook(_id: ID!, book: BookInput!): User
 removeBook(_id: ID!): User
}
`;
