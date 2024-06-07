<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2 mb-5 ps-2">
    <span class="navbar-brand">SO(ul)음0해</span>
    <button class="navbar-toggler" type="button" @click="ChangeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="navClass">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/About">소개</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Member">멤버</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Video">영상</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, reactive } from 'vue';

const state = reactive({ isNavShow: false });
const navClass = computed(() =>
  state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
);

const ChangeIsNavShow = () => {
  state.isNavShow = !state.isNavShow;
};
</script>

<style lang="scss" scoped></style>
