<template>
  <div>
    <h1>{{ msg }}</h1>
    <EmitChild @send-msg="emitHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EmitChild from './components/EmitChild.vue';

const msg = ref('자식이 바꿀 메세지');

function emitHandler(value) {
  msg.value = value;
}
</script>
