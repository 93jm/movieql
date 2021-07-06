//graphql-yoga로 인해 쉽게 시작할 수 있음 CRA와 같은 거라 생각하면 됨

import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// schema는 내가 사용자에게 보내거나 사용자로부터 받을 데이터에 대한 설명
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
