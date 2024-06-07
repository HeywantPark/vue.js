<template>
  <div>
    <h2>{{ rand }}</h2>
    <input type="text" v-model.number="inputNum" />
    <button @click="checkAnswer">정답</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const inputNum = ref(0);
const emit = defineEmits('send-msg');

const props = defineProps({
  rand: {
    type: Number,
    required: true,
  },
});

function checkAnswer() {
  const msg = '';
  if (props.rand === inputNum.value) return '정답입니다.';
  if (props.rand > inputNum.value) {
    return 'up';
  } else {
    return 'down';
  }
}
emit('send-msg', msg);
</script>
