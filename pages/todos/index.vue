<template>
  <ul>
    <li>
      <input placeholder="What to do?" @keyup.enter="addTodo">
    </li>
    <li v-for="todo in todos">
      <input type="checkbox" v-bind:checked="todo.done" v-on:change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  layout: "logged_in",
  customFunct(){

  },
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
    }),
    ...mapActions({
      toggle: "todos/geth"
    })
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
