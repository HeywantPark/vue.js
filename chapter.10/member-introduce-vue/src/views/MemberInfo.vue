<template>
  <div class="mt-5">
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }} {{ member.role }}</h4>
    <p>{{ member.desc }}</p>
    <br /><br />
    <router-link to="/member"> 멤버 목록으로 </router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import members from '@/members.json';

const currentRoute = useRoute();
const id = parseInt(currentRoute.params.id, 10);
const member = members.find((m) => m.id === id);
</script>

<style lang="scss" scoped></style>
