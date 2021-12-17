<template>
  <div>
    <button v-for="i in Math.floor(items.length / 5)" :key="i" @click="$emit('selectorClicked', i)">
      {{ i }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};

</script>

<style>
</style>