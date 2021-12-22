<template>
  <div>
    <input placeholder="date" v-model="date" /> <br />
    <div class="categoryList">
      <select v-model="category">
        <option v-for="(category,index) in categoryList" :key="index" :value="category"> {{category}} </option>
      </select>
    </div>
    <input placeholder="category" v-model="category" /> <br />
    <input placeholder="value" type="number" v-model.number="value" />
    <button @click="onClick">Save!</button>
    <button @click="$emit('clear')">Clear all</button>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
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
    ...mapGetters({categoryList: 'getCategoryList'}),
    getCurrentDate() {
      const today = new Date();
      const m = today.getMonth() + 1;
      const d = today.getDate();
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapMutations(["addPaymentListData"]),
    ...mapActions(['fetchCategory']),
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.$emit("addNewPayment", data);
      this.addPaymentListData(data);
    },
  },
  async mounted(){
    if(!this.fetchCategory?.length){
      await this.fetchCategory();
      this.category = this.categoryList[0];
    }
  }
};
</script>

<style>
</style>