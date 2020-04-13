import { IResolvers } from "graphql-tools";
import { todos } from "./queries/todos";
import { updateTodo } from "./mutations/todos";

const resolverMap: IResolvers = {
  Query: {
    todos,
  },
  Mutation: {
    updateTodo,
  },
};

export default resolverMap;
