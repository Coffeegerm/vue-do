import pool from "../../db/pool";

export async function todos(_: void, __: void): Promise<any[]> {
  return await pool
    .query("SELECT * FROM todos;")
    .then((response) => response.rows);
}
