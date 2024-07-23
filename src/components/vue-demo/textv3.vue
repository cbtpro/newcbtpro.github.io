<template>
  <div class="red">hello world, this is {{ text }}</div>
</template>

<!-- <script setup lang="ts"> -->
<script setup>
import { ref, toRefs, watch } from "vue";

// const props = withDefaults(
//   defineProps<{
//     data?: string;
//   }>(),
//   {
//     data: "john",
//   }
// );
const props = defineProps({
  data: {
    type: String,
    default: 'john'
  }
})
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
