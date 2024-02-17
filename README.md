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
    git clone <repository-url>
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
