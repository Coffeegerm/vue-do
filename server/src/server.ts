import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import depthLimit from "graphql-depth-limit";
import express from "express";
import schema from "./graphql/schema";

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use("*", cors());
app.use(compression());
server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

httpServer.listen({ port: 3000 }, () =>
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:3000/graphql`
  )
);
