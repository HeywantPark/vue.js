<template>
  <div>
    <h1>오늘의 기분은?{{ msg }}</h1>
    <img :src="imgSrc" alt="msg" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const mood = ref(currentRoute.params.mood);

watch(
  () => currentRoute.params.mood,
  (newMood) => (mood.value = newMood)
);

const msg = computed(() => (mood.value === 'happy' ? '행복하당~' : '신난당!'));

const imgSrc = computed(() =>
  mood.value === 'happy'
    ? 'https://ilovecharacter.com/news/data/20230301/p1065579695298801_543_thum.jpg'
    : 'https://item.kakaocdn.net/do/eccb8be7f22be731f6b98d2fb5e18b80f604e7b0e6900f9ac53a43965300eb9a'
);
</script>
