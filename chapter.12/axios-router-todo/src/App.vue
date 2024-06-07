<template>
  <div>
    <nav>
      <router-link to="/">홈페이지</router-link>
      &nbsp;
      <router-link to="/Login">로그인</router-link>
      &nbsp;
      <router-link to="/Todo">Todo</router-link>
      &nbsp;
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>
