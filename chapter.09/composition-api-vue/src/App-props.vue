<template>
  <div>
    <PropsChild :msg="msg" />
    <!-- <h1>Vue3 Counter</h1>
    <p>count : {{ count }}</p>
    <p>두배로! {{ double }}</p>
    <p>지금까지 계산한 횟수 :{{ totalClick }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button> -->
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import PropsChild from './components/PropsChild.vue';

const msg = ref('props로 전달 될 메세지');

const totalClick = ref(0);
const count = ref(2);
const double = computed(() => {
  totalClick.value++;
  return count.value * 2;
});

function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
</script>
