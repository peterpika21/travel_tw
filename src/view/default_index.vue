<template>
  <div>
    <p class="m-0 tx-primary">{{ demo }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from '@/utils/axios';

export default defineComponent({
  name: 'default_index',
  setup() {
    let demo = ref(0);

    return { demo };
  }
});
</script>
