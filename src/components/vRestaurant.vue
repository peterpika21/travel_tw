<template>
  <section>
    <div class="title">
      <svg-icon icon-class="square_yellow" className="title__icon" />
      <h2 class="title--tx">熱門餐飲</h2>
    </div>

    <ul class="row">
      <li class="col" v-for="item in state.arrData" :key="item.ID">
        <div class="item h-shadow--word" @click="openModal(item)">
          <div>
            <img
              :src="item.Picture.PictureUrl1"
              :alt="item.Picture.PictureDescription1"
              loading="lazy"
              class="item__img"
            />
            <div>
              <p class="item__name">{{ item.Name }}</p>

              <div class="item__address">
                <svg-icon icon-class="map_pink" className="item__icon" />
                <p class="item__address--tx">{{ item.Address }}</p>
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
      <div class="mb-5 d-flex">
        <div class="width-12 d-flex align-items-center">
          <svg-icon icon-class="clock_pink" className="" />
          <span class="ml-2 font-m text-ellipse">{{
            state.active.OpenTime
          }}</span>
        </div>
        <div class="width-8 d-flex align-items-center">
          <svg-icon icon-class="ticket_pink" className="" />
          <span class="ml-2 font-m text-ellipse">{{ state.active.Class }}</span>
        </div>
      </div>

      <div class="d-flex">
        <div class="width-12 d-flex align-items-center">
          <svg-icon icon-class="map_pink" className="" />
          <span class="ml-2 font-m text-ellipse">{{
            state.active.Address
          }}</span>
        </div>
        <div class="width-8 d-flex align-items-center">
          <svg-icon icon-class="tel_pink" className="" />
          <span class="ml-2 font-m text-ellipse">{{ state.active.Phone }}</span>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import { getAuth } from '@/utils/auth';
import { defineComponent, ref, reactive, onMounted } from 'vue';

interface IAuth {
  ID: string;
  Name: string;
  Address: string;
  Description: string;
  Class: string;
  Phone: string;
  OpenTime: string;
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
        Class: '',
        OpenTime: '',
        Phone: '',
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
        .get(`/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ge%20''`, {
          headers: getAuth()
        })
        .then(function (res) {
          state.arrData = res.data.filter((e: unknown, i: number) => i < 10);
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
  padding: 0 4px;
  margin: 0 auto;
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
  margin: 0 auto 60px;
  max-width: 1060px;
  display: flex;
  flex-wrap: wrap;
}

.col {
  width: 20%;
  padding: 4px;
  margin-bottom: 28px;

  @include breakpoint('md') {
    width: 25%;
  }

  @include breakpoint('xs') {
    width: 50%;
  }
}

.item {
  padding: 12px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

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
    height: 34px;

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
