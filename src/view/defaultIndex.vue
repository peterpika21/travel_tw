<template>
  <div>
    <p v-for="item in 40">內容</p>
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
