<template>
  <div>
    Not found

    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Education',
        },
        query: { value: 200 },
      }"
      >Add education</router-link
    >
    /
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>