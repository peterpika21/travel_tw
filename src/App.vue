<template>
  <default-header></default-header>
  <router-view></router-view>
  <default-footer></default-footer>
</template>

<script lang="ts">
import defaultHeader from '@/components/defaultHeader.vue';
import defaultFooter from '@/components/defaultFooter.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: {
    defaultHeader,
    defaultFooter
  }
});
</script>
