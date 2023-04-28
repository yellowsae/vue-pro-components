<script setup lang="ts">
import {Icon} from 'vue-pro-components'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <svg style="width: 30px; height: 50px;">
      <use href="iconfont konglong"></use>
    </svg>
    <Icon icon="cuowu" :size="20"></Icon>
    <Icon icon="bolanggu" size="50"></Icon>
    <Icon icon="konglong" size="50"></Icon>
    <Icon icon="muqin" size="50" color="#3ebbff"></Icon>
    <Icon icon="jimu" size="50" color="#42b883aa"></Icon>
    <Icon icon="shouyaoling" size="50"></Icon>
    <Icon icon="nanying" size="50"></Icon>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
