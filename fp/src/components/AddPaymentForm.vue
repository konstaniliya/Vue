<template>
  <div>
    <input placeholder="date" v-model="date" /> <br />
    <input placeholder="category" v-model="category" /> <br />
    <input placeholder="value" type="number" v-model.number="value" />
    <button @click="onClick">Save!</button>
    <button @click="$emit('clear')">Clear all</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const m = today.getMonth() + 1;
      const d = today.getDate();
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style>
</style>