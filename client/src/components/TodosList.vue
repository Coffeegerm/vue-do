<template>
  <div id="app">
    <h2>Your Todos</h2>
    <ul v-for="todo in todos" :key="todo.id">
      <v-card id="todo-card">
        <v-card-title>{{ todo.name }}</v-card-title>
      </v-card>
    </ul>
  </div>
</template>

<script>
import { GET_TODOS_QUERY } from "../grapql/queries/Todos";

export default {
  name: "TodosList",
  components: {},
  data: () => ({ todos: [] }),
  methods: {},
  async mounted() {
    this.$apollo.query({ query: GET_TODOS_QUERY }).then(response => {
      response.data.todos.map(todo => {
        this.todos.push({ id: todo.id, name: todo.name });
      });
    });
  }
};
</script>

<style>
#todo-card {
  margin: 10px 0px;
  max-width: 98%;
}
</style>
