<template>
  <div class="vSelect" @click="toggle()">
    <p class="vSelect__text">{{ title }}</p>
    <svg-icon icon-class="dropdown" className="vSelect__icon" />

    <div class="vSelect__option" :class="{ show: isOpen }">
      <div
        class="vSelect__optionItem"
        v-for="item in option"
        :key="item.id"
        @click="updateValue(item)"
      >
        <p class="vSelect__text">
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core';

type OptionItemInterface = { id: string; label: string };
type OptionInterface = [OptionItemInterface];

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number]
    },
    option: {
      type: Array as unknown as () => OptionInterface,
      required: true,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    let isOpen = ref(false);
    let title = ref(props.placeholder);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    const updateValue = (item: OptionItemInterface) => {
      title.value = item.label;
      context.emit('update:modelValue', item.id);
    };

    return { isOpen, title, toggle, updateValue };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.vSelect {
  padding: 0 16px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: relative;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;

  &__text {
    width: 64px;
    text-align-last: justify;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__option {
    padding-bottom: 16px;
    display: none;
    background: #fff;
    border-radius: 0 0 6px 6px;
    position: absolute;
    top: 36px;
    left: 0;
    right: 0;

    &.show {
      display: block;
    }
  }

  &__optionItem {
    padding: 8px 16px;

    &:hover {
      color: #fff;
      background: lighten(
        $color: map-get($map: $colors, $key: 'pink'),
        $amount: 20%
      );
    }
  }
}
</style>
