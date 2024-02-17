# GraphQL User CRUD API

## Overview

This project implements a GraphQL API for performing CRUD operations on user data. It allows users to create, retrieve, update, and delete user records using GraphQL queries and mutations.

## Table of Contents

- [Getting Started](#getting-started)
- [Schema](#schema)
- [Data](#data)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/MohammadHarish52/intern-graphql.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    npm start
    ```

4. **Access the GraphQL playground:**
    Open your web browser and navigate to [http://localhost:4001](http://localhost:4001) to access the GraphQL playground.

## Schema

The GraphQL schema defines the types and operations supported by the API. Here's a brief overview:

- **User**: Represents a user entity with fields `id`, `name`, `age`, and `email`.
- **Query**: Defines operations for retrieving user data:
    - `users`: Retrieves a list of all users.
    - `user(id: ID!)`: Retrieves a user by their ID.
- **Mutation**: Defines operations for creating, updating, and deleting users:
    - `addUser(user: AddUserInput!)`: Creates a new user.
    - `deleteUser(id: ID!)`: Deletes a user by their ID.
    - `updateUser(id: ID!, update: AddUserInput!)`: Updates a user's information.

## Data

The project includes a `db.js` file with dummy user data. You can modify this file to add, remove, or update user records.

## Dependencies

- `apollo-server`: Used for creating GraphQL server.
- `@apollo/server-standalone`: Used for starting the Apollo server standalone.

- ## Overview
This API allows you to manage users in the playground environment. You can perform operations like retrieving all users, fetching specific user details, adding a new user, updating existing user information, and deleting a user.

## Queries

### Retrieve All Users
To retrieve all users in the playground, use the following query:

```graphql
query allUser {
  users {
    id
    name
    age
    email
  }
}
```

### Retrieve Specific User
To retrieve details of a specific user, use the following query with variables:

```graphql
query specificUser($id: ID!) {
  user(id: $id) {
    name
    age
    email
  }
}
```
**Variables:**
```json
{
  "id": "ID"
}
```

## Mutations

### Add User
To add a new user, use the following mutation with variables:

```graphql
mutation addUser($user: AddUserInput!) {
  addUser(user: $user) {
    id
    name
    age
    email
  }
}
```
**Variables Example:**
```json
{
  "user": {
    "name": "lion",
    "age": 24,
    "email": "1235@gmail.com"
  }
}
```

### Update User
To update an existing user's information, use the following mutation with variables:

```graphql
mutation editUser($updateUserId: ID!, $update: AddUserInput!) {
  updateUser(id: $updateUserId, update: $update) {
    id
    name
    age
  }
}
```
**Variables Example:**
```json
{
  "update": {
    "name": "Harish",
    "age": 30,
    "email": "hiiii"
  },
  "updateUserId": "4"
}
```

### Delete User
To delete a user, use the following mutation with variables:

```graphql
mutation deleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
    name
    age
    email
  }
}
```
**Variables:**
```json
{
  "deleteUserId": "1"
}
```
