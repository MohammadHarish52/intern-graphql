import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//dummy data
import db from "./db.js";

//types
import { typeDefs } from "./schema.js";

//resolvers
const resolvers = {
  Query: {
    users() {
      return db.users;
    },
    user(_, args) {
      return db.users.find((user) => user.id === args.id);
    },
  },

  Mutation: {
    deleteUser(_, args) {
      db.users = db.users.filter((user) => user.id !== args.id);
      return db.users;
    },
    addUser(_, args) {
      let user = {
        ...args.user,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.users.push(user);
      return user;
    },
    updateUser(_, args) {
      db.users = db.users.map((user) => {
        if (user.id === args.id) {
          return { ...user, ...user.update };
        }
        return user;
      });
      return db.users.find((user) => user.id === args.id);
    },
  },
};

//server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`🚀 Server ready at ${url} (local)`);
