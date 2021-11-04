<template>
  <header class="header">
    <svg-icon icon-class="logo" className="header__logo" />

    <ul class="header__nav">
      <li v-for="nav in navData" :key="nav.icon">
        <a class="d-flex align-items-end" :href="nav.href">
          <svg-icon :icon-class="nav.icon" className="header__icon" />
          <div>
            <span :class="`ml-1 font-m tx-${nav.color}`">
              {{ nav.content }}
            </span>
            <div :class="`header__iconLine bg-${nav.color}`"></div>
          </div>
        </a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    const navData = reactive([
      { icon: 'Frame 41', content: '台灣景點', href: '/', color: 'pink' },
      { icon: 'Frame 42', content: '美食住宿', href: '/', color: 'yellow' },
      { icon: 'Frame 43', content: '景點交通', href: '/', color: 'green' }
    ]);

    return { navData };
  }
});
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 85px;
  display: flex;
  justify-content: space-between;
  background: #fff;

  &__logo {
    width: 99px;
    height: 57px;
  }

  &__nav {
    padding: 0;
    width: 330px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    width: 34px;
    height: 34px;
  }

  &__iconLine {
    height: 1px;
  }
}
</style>
