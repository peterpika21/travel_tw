<template>
  <header class="header">
    <nav class="nav">
      <svg-icon icon-class="logo" className="nav__logo" />

      <ul class="nav__link">
        <li v-for="nav in navData" :key="nav.icon">
          <a class="d-flex align-items-end" :href="nav.href">
            <svg-icon :icon-class="nav.icon" className="nav__icon" />
            <div>
              <span :class="`ml-1 font-m tx-${nav.color}`">
                {{ nav.content }}
              </span>
              <div :class="`nav__iconLine bg-${nav.color}`"></div>
            </div>
          </a>
        </li>
      </ul>
    </nav>

    <div class="search">
      <div class="search__container">
        <svg-icon icon-class="title" className="search__title" />

        <p class="font-m tx-white" style="transform: translateY(-24px)">
          台北、台中、台南、屏東、宜蘭……遊遍台灣
        </p>

        <div class="mb-2 d-flex justify-content-between">
          <input type="text" class="search__input" placeholder="請搜尋關鍵字" />
          <svg-icon icon-class="Frame 44" className="search__icon" />
        </div>

        <div class="d-flex justify-content-between">
          <v-select
            v-model="selectType"
            :option="typeData"
            placeholder="類別"
            class="mr-2 flex-1"
          ></v-select>

          <v-select
            v-model="selectCity"
            :option="cityData"
            placeholder="不分縣市"
            class="flex-1"
          ></v-select>

          <svg-icon icon-class="Frame 45" className="search__icon" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/runtime-core';
import cityInfo from '@/assets/js/cityData.json';

export default defineComponent({
  setup() {
    let selectType = ref('');
    let selectCity = ref('');

    const navData = reactive([
      { icon: 'Frame 41', content: '台灣景點', href: '/', color: 'pink' },
      { icon: 'Frame 42', content: '美食住宿', href: '/', color: 'yellow' },
      { icon: 'Frame 43', content: '景點交通', href: '/', color: 'green' }
    ]);

    const typeData = reactive([
      {
        id: 'ScenicSpot',
        label: '景點'
      },
      {
        id: 'Activity',
        label: '活動'
      },
      {
        id: 'Hotel',
        label: '住宿'
      },
      {
        id: 'Restaurant',
        label: '美食'
      }
    ]);

    const cityData = reactive(cityInfo);

    return { navData, selectType, selectCity, typeData, cityData };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.header {
  background: #fff;
}

.nav {
  padding: 30px 85px;
  display: flex;
  justify-content: space-between;

  &__logo {
    width: 99px;
    height: 57px;
  }

  &__link {
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

.search {
  padding: 130px 0;
  margin: 0 30px 30px;
  background-image: url('@/assets/image/bg1.png');
  background-size: cover;
  background-repeat: no-repeat;

  &__title {
    width: 100%;
    height: auto;
  }

  &__container {
    width: 490px;
    margin: 0 auto;
  }

  &__icon {
    margin-left: 4px;
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  &__input {
    padding: 12px 12px 12px 24px;
    height: 40px;
    display: flex;
    flex: 1;
    border: 0;
    box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
    border-radius: 6px;
    outline: none;

    &::placeholder {
      color: map-get($map: $colors, $key: 'gray-light');
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: map-get($map: $colors, $key: 'gray-light');
    }
  }
}
</style>
