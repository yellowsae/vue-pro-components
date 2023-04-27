<script lang="ts" setup>
import { props } from './props';

defineProps(props);

</script>


<template>
  <i
    class="iconfont"
    :class="`${iconPrefix}${icon}`" 
    :style="{fontSize: `${size}px`, color: `${color}`}"></i>
</template>
