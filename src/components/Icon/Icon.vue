<template>
  <i class="my-icon" :class="{ [`my-icon--${type}`]: type }">
    <FontAwesomeIcon v-bind="filiterProps" />
  </i>
</template>

<script setup lang="ts">
defineOptions({
  name: "MyIcon"
})
import { omit } from 'radash';
import { computed } from 'vue';
import { type FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';

interface Props extends FontAwesomeIconProps {
  icon: string,
  type?: "primary" | "info" | "success" | "warning" | "danger",
  color?: string,
}
const prpos = defineProps<Props>()

const filiterProps = computed(() => omit(prpos, ['type']))

</script>

<style scoped lang="scss">
.my-icon {
  --my-icon-color: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--my-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  .my-icon--#{$val} {
    --my-icon-color: var(--myplus--color--#{$val});
  }
}
</style>