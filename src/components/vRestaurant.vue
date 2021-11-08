<template>
  <section>
    <div class="title">
      <svg-icon icon-class="square_yellow" className="title__icon" />
      <h2 class="title--tx">熱門餐飲</h2>
    </div>

    <div class="wrap">
      <div
        v-for="item in state.arrData"
        :key="item.ID"
        class="box h-shadow--word"
      >
        <div>
          <img
            :src="item.Picture.PictureUrl1"
            :alt="item.Picture.PictureDescription1"
            loading="lazy"
            class="box__img"
          />
          <div>
            <p class="box__name">{{ item.Name }}</p>

            <div class="box__address">
              <svg-icon icon-class="map_pink" className="box__icon" />
              <p class="box__address--tx">{{ item.Address }}</p>
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
  Address: string;
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
        .get(`/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ge%20''`, {
          headers: getAuth()
        })
        .then(function (res) {
          state.arrData = res.data.filter((e: unknown, i: number) => i < 10);
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
  width: 205px;
  padding: 12px;
  margin-bottom: 45px;
  background: #ffffff;

  &__img {
    width: 100%;
    height: 137px;
  }

  &__name {
    margin: 10px 0;
    height: 42px;
    font-size: 14px;
    line-height: 21px;
  }

  &__address {
    display: flex;

    &--tx {
      margin-left: 8px;
      font-size: 12px;
      color: map-get($map: $colors, $key: 'green');
      font-weight: 300;
      line-height: 17px;
    }
  }

  &__icon {
    width: 12px;
    height: 14px;
  }
}
</style>
