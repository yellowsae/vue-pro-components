<script setup lang="ts">
import { Icon } from "vue-pro-components"
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
    <Icon></Icon>
    <Icon icon="这是 ICON" size="50"></Icon>
    <Icon icon="这是 icon ，在 vue-pro-components 中导出的组件， 今天加了一个 size 参数，传入组件改变 icon 的大小" size="40"></Icon>
    <Icon></Icon>
    <Icon></Icon>
    <Icon></Icon>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>
    <i class="iconfont icon-cuowu" style="font-size: 10rem;"></i>
    <i class="iconfont icon-bolanggu" style="font-size: 10rem;"></i>
  </div>
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
