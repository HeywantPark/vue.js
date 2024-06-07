<template>
  <ul>
    <todoListItem
      v-for="todoItem in todoList"
      :todoItem="todoItem"
      :key="todoItem.id"
      @toggleCompleted="$emit('toggleCompleted', $event)"
      @deleteTodo="$emit('deleteTodo', $event)"
    />
  </ul>
</template>

<script>
import TodoListItem from './todoListItem.vue';

export default {
  name: 'todoList',
  props: ['todoList'],
  components: { TodoListItem },
};
</script>

<style lang="scss" scoped></style>
