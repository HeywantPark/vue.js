<template>
  <div>
    <button @click="decrememt">-1</button>
  </div>
</template>

<script setup>
function decrememt() {
  count.value = count.value - 1;
}
</script>

<style lang="scss" scoped></style>
