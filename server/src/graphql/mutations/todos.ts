import { Todo } from "../../models/Todo";
import pool from "../../db/pool";

interface IUpdateTodo {
  todoId: number;
  todoName: string;
}

// update todo takes in the id and the new name of the todo and updates it based off the id
// if the update fails we return false, otherwise we return true for frontend error checking
export async function updateTodo(_: void, args: IUpdateTodo): Promise<boolean> {
  try {
    pool.query(
      `UPDATE todos SET name = '${args.todoName}' WHERE id = ${args.todoId}`
    );
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
}
