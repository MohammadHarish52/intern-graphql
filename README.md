GraphQL User CRUD API
This project implements a GraphQL API for performing CRUD operations on user data. It allows users to create, retrieve, update, and delete user records using GraphQL queries and mutations.

Getting Started
To run this project locally, follow these steps:

Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Access the GraphQL playground:

Open your web browser and navigate to http://localhost:4001 to access the GraphQL playground.

Schema
The GraphQL schema defines the types and operations supported by the API. Here's a brief overview:

User: Represents a user entity with fields id, name, age, and email.
Query: Defines operations for retrieving user data:
users: Retrieves a list of all users.
user(id: ID!): Retrieves a user by their ID.
Mutation: Defines operations for creating, updating, and deleting users:
addUser(user: AddUserInput!): Creates a new user.
deleteUser(id: ID!): Deletes a user by their ID.
updateUser(id: ID!, update: AddUserInput!): Updates a user's information.
Data
The project includes a db.js file with dummy user data. You can modify this file to add, remove, or update user records.

Dependencies
apollo-server: Used for creating GraphQL server.
@apollo/server-standalone: Used for starting the Apollo server standalone.
