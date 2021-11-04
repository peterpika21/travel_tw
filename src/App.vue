<template>
  <default-header></default-header>
  <router-view></router-view>
</template>

<script lang="ts">
import defaultHeader from '@/components/defaultHeader.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: {
    defaultHeader
  }
});
</script>
