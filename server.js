const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./src/product/schema");
const resolvers = require("./src/product/resolver");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  const app = express();

  app.use(cors());

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
