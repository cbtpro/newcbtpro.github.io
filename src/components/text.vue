<template>
  <div class="red">hello world, this is {{ text }}</div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: 'john'
    }
  },
  setup() {
    return {
      text: 'peter1'
    }
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
