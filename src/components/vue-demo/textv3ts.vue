<template>
  <div class="red">hello world, this is {{ text }}</div>
</template>

<script name="text-v3-ts1" setup lang="ts">
import { ref, toRefs, watch } from "vue";

defineOptions({
  name: 'text-v3-ts2'
})
const props = withDefaults(
  defineProps<{
    data?: string;
  }>(),
  {
    data: "john",
  }
);

const { data } = toRefs(props);
const text = ref(data.value);
watch(data, (value, oldValue) => {
  if (value !== oldValue) {
    text.value = value;
  }
});
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
