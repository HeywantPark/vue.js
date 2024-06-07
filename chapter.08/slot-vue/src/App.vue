<script setup>
import ParentScopedSlot from './components/ParentScopedSlot.vue';
</script>

<template>
  <div><ParentScopedSlot></ParentScopedSlot></div>
</template>
<script>
export default {
  name: 'app',
  components: {
    ParentScopedSlot,
  },
};
</script>

<style scoped></style>
