<template>
  <section>
    <div class="title">
      <svg-icon icon-class="top__pink" className="title__icon" />
      <h2 class="title--tx">熱門城市</h2>
    </div>

    <div class="wrap">
      <div
        v-for="(item, index) in city"
        class="box h-shadow--word"
        :class="{ 'box--half': index !== 0 && index % 3 !== 0 }"
        :key="index"
      >
        <div class="relative">
          <div class="box__opacity"></div>
          <img :src="`public/image/${item.img}`" alt="no" />
          <div class="box__container">
            <svg-icon icon-class="map_white" className="box__icon" />
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import hotCtiy from '@/assets/js/hotCity.json';
import axios from '@/utils/axios';
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  setup() {
    const city = reactive(hotCtiy);

    return { city };
  }
});
</script>

<style lang="scss" scoped>
.title {
  margin: 85px auto 0 auto;
  max-width: 1060px;
  display: flex;
  align-items: center;

  &--tx {
    font-size: 20px;
    font-weight: 400;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}

.wrap {
  margin: 0 auto;
  max-width: 1060px;
  height: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.box {
  height: 246px;
  padding: 12px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  background: #fff;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &--half {
    &:nth-child(3n + 2) {
      margin-bottom: 4px;
    }
    padding: 8px;
    height: 121px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__opacity {
    background: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
