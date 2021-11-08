<template>
  <section>
    <div class="title">
      <svg-icon icon-class="top__pink" className="title__icon" />
      <h2 class="title--tx">熱門活動</h2>
    </div>

    <div class="wrap">
      <div
        v-for="item in state.arrData"
        :key="item.ID"
        class="box h-shadow--word"
      >
        <div class="box__container">
          <img
            :src="item.Picture.PictureUrl1"
            :alt="item.Picture.PictureDescription1"
            loading="lazy"
            class="box__img"
          />
          <div class="box__content">
            <p>{{ item.Name }}</p>
            <p class="box__content--info">{{ item.Description }}</p>
            <div class="d-flex align-items-center">
              <svg-icon icon-class="map_pink" className="title__icon" />
              <p class="ml-3 mr-7 font-m">{{ item.Location }}</p>
              <button class="box__btn">活動詳情</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import { getAuth } from '@/utils/auth';
import { defineComponent, ref, reactive, onMounted } from 'vue';

interface IAuth {
  ID: string;
  Name: string;
  Description: string;
  Location: string;
  Picture: {
    PictureUrl1: string;
    PictureDescription1: string;
  };
}

export default defineComponent({
  setup() {
    let state: { arrData: Array<IAuth> } = reactive({ arrData: [] });

    onMounted(() => {
      getActivity();
    });

    // 取得活動
    const getActivity = () => {
      axios
        .get(`/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ge%20''`, {
          headers: getAuth()
        })
        .then(function (res) {
          state.arrData = res.data.filter((e: unknown, i: number) => i < 4);
          console.log(state.arrData);
        });
    };

    return { state };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_mixin';
@import '@/assets/scss/helpers/_variables';
.title {
  margin: 85px auto 0 auto;
  max-width: 1060px;
  display: flex;
  align-items: center;

  &--tx {
    margin-left: 8px;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.box {
  width: 49%;
  padding: 16px;
  margin-bottom: 48px;
  background: #ffffff;

  &:nth-child(2n) {
    margin-left: 1%;
  }

  &__container {
    display: flex;
  }

  &__img {
    width: 36%;
    height: 196px;
  }

  &__btn {
    padding: 12px 28px;
    background: #fff;
    color: map-get($map: $colors, $key: 'pink');
    font-size: 14px;
    border: 1px solid map-get($map: $colors, $key: 'pink');
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #fff;
      background: map-get($map: $colors, $key: 'pink');
    }
  }

  &__content {
    margin-left: 16px;

    &--info {
      @include ellipsis(5);
      margin: 14px 0;
      font-size: 14px;
      line-height: 21px;
      color: map-get($map: $colors, $key: 'gray');
    }
  }
}
</style>
