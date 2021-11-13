<template>
  <section>
    <div class="title">
      <svg-icon icon-class="top__pink" className="title__icon" />
      <h2 class="title--tx">熱門活動</h2>
    </div>

    <ul class="row">
      <li class="col" v-for="item in state.arrData" :key="item.ID">
        <div class="item h-shadow--word">
          <div class="item__container">
            <img
              :src="item.Picture.PictureUrl1"
              :alt="item.Picture.PictureDescription1"
              loading="lazy"
              class="item__img"
            />
            <div class="item__content">
              <p>{{ item.Name }}</p>
              <p class="item__content--info">{{ item.Description }}</p>
              <div class="d-flex align-items-center">
                <svg-icon icon-class="map_pink" className="title__icon" />
                <p class="ml-3 mr-7 font-m">{{ item.Location }}</p>
                <button @click="openModal(item)" class="item__btn">
                  活動詳情
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <el-dialog
    v-model="showModal"
    width="60%"
    :show-close="false"
    custom-class="modal"
  >
    <template #title>
      <img
        class="modal__img"
        :src="state.active.Picture.PictureUrl1"
        :alt="state.active.Picture.PictureDescription1"
      />
      <svg-icon
        icon-class="modal_close"
        className="modal__icon"
        @click="showModal = false"
      />
    </template>

    <div class="modal__body">
      <p class="font-l tx-black">{{ state.active.Name }}</p>
      <p class="my-5 font-m tx-black">{{ state.active.Description }}</p>
    </div>

    <template #footer>
      <div class="mb-5 d-flex align-items-center">
        <svg-icon icon-class="clock_pink" className="" />
        <span class="ml-2 font-m text-ellipse"
          >{{ state.active.StartTime }}
          至
          {{ state.active.EndTime }}
        </span>
      </div>

      <div class="d-flex align-items-center">
        <svg-icon icon-class="map_pink" className="" />
        <span class="ml-2 font-m text-ellipse">{{ state.active.Address }}</span>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import dayjs from 'dayjs';
import { getAuth } from '@/utils/auth';
import { defineComponent, ref, reactive, onMounted } from 'vue';

interface IAuth {
  ID: string;
  Name: string;
  Description: string;
  Location: string;
  StartTime: string;
  EndTime: string;
  Address: string;
  Picture: {
    PictureUrl1: string;
    PictureDescription1: string;
  };
}

export default defineComponent({
  setup() {
    const showModal = ref(false);
    let state: { arrData: Array<IAuth>; active: IAuth } = reactive({
      arrData: [],
      active: {
        ID: '',
        Name: '',
        Address: '',
        Description: '',
        StartTime: '',
        EndTime: '',
        Location: '',
        Picture: {
          PictureUrl1: '',
          PictureDescription1: ''
        }
      }
    });

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
          state.arrData.forEach(e => {
            e.StartTime = dayjs(e.StartTime).format('YYYY/MM/DD');
            e.EndTime = dayjs(e.EndTime).format('YYYY/MM/DD');
          });
        });
    };

    const openModal = (item: IAuth) => {
      state.active = item;
      showModal.value = true;
    };

    return { state, showModal, openModal };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_mixin';
@import '@/assets/scss/helpers/_variables';
.title {
  margin: 0 auto;
  padding: 0 4px;
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

.row {
  margin: 0 auto 20px auto;
  padding: 4px;
  max-width: 1060px;
  display: flex;
  flex-wrap: wrap;
}

.col {
  width: 50%;
  margin-bottom: 48px;

  &:nth-child(2n + 1) {
    padding-right: 10px;
  }

  &:nth-child(2n + 2) {
    padding-left: 10px;
  }

  @include breakpoint('md') {
    width: 100%;

    &:nth-child(2n + 1) {
      padding-right: 0;
    }

    &:nth-child(2n + 2) {
      padding-left: 0;
    }
  }
}

.item {
  padding: 16px;
  background: #ffffff;

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

.modal {
  &__img {
    width: 100%;
  }

  &__icon {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    right: -50px;
    cursor: pointer;
  }
}
</style>
