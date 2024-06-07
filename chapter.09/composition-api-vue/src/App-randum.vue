<template>
  <div>
    <h1>{{ msg }}</h1>
    <RandomChild :rand="rand" @send-msg="ChangeMsg" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RandomChild from './components/RandomChild.vue';

const msg = ref('랜덤 숫자를 맞춰주세요');
const rand = ref(parseInt(Math.random() * 20));

function ChangeMsg(paylord) {
  paylord.value = paylord;
}
</script>
