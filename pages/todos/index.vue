<template>
  <ul>
    <li>
      <input placeholder="What to do?" @keyup.enter="addTodo">
    </li>
    <li v-for="(todo, key) in todos" :key="key">
      <input type="checkbox" v-bind:checked="todo.done" v-on:change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
  </ul>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  layout: "logged_in",
  computed: {
    todos() {
      return this.$store.state.todos.list;
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle"
    })
  }
};
</script>
