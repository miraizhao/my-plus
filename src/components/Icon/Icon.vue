<template>
  <i class="my-icon">
    <font-awesome-icon v-bind="filiterProps" />
  </i>
</template>

<script setup lang="ts">
import { omit } from 'radash';
import { computed } from 'vue';
defineOptions({
  name: "MyIcon"
})
interface Props {
  icon: string,
  size?: string,
  rotation?: number | string,
  flip?: string,
  beat?: boolean,
  "beat-fade"?: boolean,
  bounce?: boolean,
  fade?: boolean,
  spin?: boolean,
  "spin-reverse"?: boolean,
  "spin-pulse"?: boolean,
  type?: string,
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
</style>