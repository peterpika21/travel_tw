<template>
  <vHeader></vHeader>
  <router-view></router-view>
  <vFooter></vFooter>
</template>

<script lang="ts">
import vHeader from '@/components/vHeader.vue';
import vFooter from '@/components/vFooter.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: {
    vHeader,
    vFooter
  }
});
</script>
