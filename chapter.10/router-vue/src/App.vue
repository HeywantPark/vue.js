<script setup></script>

<template>
  <div>
    <nav>
      <router-link to="/">홈페이지</router-link>
      &nbsp;
      <router-link to="/about">라우터란?</router-link>
      &nbsp;
      <router-link to="/dynamic/happy">행복하냐</router-link>
      &nbsp;
      <router-link to="/dynamic/exciting">신나냐</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
