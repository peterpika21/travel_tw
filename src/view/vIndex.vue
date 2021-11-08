<template>
  <vHotCity></vHotCity>
  <vActivity></vActivity>
  <vRestaurant></vRestaurant>
</template>

<script lang="ts">
import vHotCity from '@/components/vHotCity.vue';
import vActivity from '@/components/vActivity.vue';
import vRestaurant from '@/components/vRestaurant.vue';
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  components: {
    vHotCity,
    vActivity,
    vRestaurant
  },
  setup() {}
});
</script>
