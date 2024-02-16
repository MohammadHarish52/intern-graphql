export const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }
  type Mutation {
    addUser(user: AddUserInput!): User
    deleteUser(id: ID!): [User]
    updateUser(id: ID!, update: AddUserInput!): User
  }
  input AddUserInput {
    name: String!
    age: Int!
    email: String!
  }
`;
