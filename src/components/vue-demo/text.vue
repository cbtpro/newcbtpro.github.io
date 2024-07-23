<template>
  <div class="red">hello world, this is {{ text }}</div>
</template>

<script>
import { ref, toRefs, watch } from 'vue'

export default {
  props: {
    data: {
      type: String,
      default: 'john'
    }
  },
  setup(props) {
    const { data } = toRefs(props)
    const text = ref(data.value)
    watch(data, (value, oldValue) => {
      if (value !== oldValue) {
        text.value = value
      }
    })
    return {
      text
    }
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
