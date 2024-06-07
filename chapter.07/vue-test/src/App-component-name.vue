<script setup>
import SandNameCom from './components/SandNameCom.vue';
</script>

<template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <SandNameCom v-on:nameChange="nameChangeHandler" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    nameChangeHandler(e) {
      this.name = e.name;
    },
  },
};
</script>

<style scoped></style>
