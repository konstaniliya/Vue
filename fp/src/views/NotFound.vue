<template>
  <div>
    Not found

    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Food',
        },
        query: { value: 200 },
      }"
      >Food 200</router-link
    >
    /
    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Transport',
        },
        query: { value: 50 },
      }"
      >Transport 50</router-link
    >
    /
    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Entertainment',
        },
        query: { value: 2000 },
      }"
      >Entertainment 2000</router-link
    >
    /
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>