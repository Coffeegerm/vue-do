<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>Vue Do</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <TodosList />
    </v-content>
  </v-app>
</template>

<script>
import TodosList from "./components/TodosList";

export default {
  name: "App",

  components: {
    TodosList
  },

  data: () => ({
    //
  })
};
</script>
