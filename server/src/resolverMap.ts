import { IResolvers } from "graphql-tools";

export class Todo {
  public id!: number;
  public name!: string;
}

interface ISimpleMath {
  initialNumber: number;
}

interface IUpdateTodo {
  todoId: number;
  todoName: string;
}

const todos = [
  { id: 1, name: "test1" } as Todo,
  { id: 2, name: "test2" } as Todo,
  { id: 3, name: "test3" } as Todo,
];

const resolverMap: IResolvers = {
  Query: {
    todos(_: void, __: void): Array<Todo> {
      return todos;
    },
  },
  Mutation: {
    updateTodo(_: void, args: IUpdateTodo): Array<Todo> {
      console.log("updating name for id " + args.todoId);
      return todos.map((todo: Todo) =>
        todo.id === args.todoId ? { ...todo, name: args.todoName } : todo
      );
    },
  },
};

export default resolverMap;
