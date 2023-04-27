<template>
  <i class="icon-style" :style="{
    fontSize: size + 'px'
  }">{{ icon }}</i>
</template>


<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '默认图标'
    },
    size: {
      type: Number,
      default: 16
    }
  }
})

</script>


<style >
  .icon-style {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    font-size: inherit;
    line-height: 1;
    text-transform: none;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
