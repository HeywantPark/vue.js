<template>
  <div class="main"></div>
  <button @click="showModal">모달 열기</button>
  <Modal :visible="isModalVisible" @close-modal="hideModal"></Modal>
  <h1>잘 내려가니</h1>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';

const isModalVisible = ref(false);
function showModal() {
  isModalVisible.value = true;
}

function hideModal() {
  isModalVisible.value = false;
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
