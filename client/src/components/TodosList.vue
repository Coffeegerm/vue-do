<template>
  <div id="app">
    <h2>Your Todos</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
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

<style></style>
