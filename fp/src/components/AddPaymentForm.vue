<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date"/>
    <v-select
      :items="categoryList"
      label="Category"
      v-model="category"
    >
    </v-select>
    <v-text-field v-model.number="value" label="Value"/>
    <div>
      <!-- <input placeholder="date" v-model="date" /> <br />
      <div class="categoryList">
        <select v-model="category">
          <option v-for="(category,index) in categoryList" :key="index" :value="category"> {{category}} </option>
        </select>
      </div>
      <input placeholder="value" type="number" v-model.number="value" /> -->
      <v-btn @click="onClick">Save!</v-btn>
      <v-btn @click="$emit('clear')" class="ml-4">Clear all</v-btn>
    </div>
  </v-card>
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
      this.addPaymentListData(data);
      this.$emit("addNewPayment", data);
    },
  },
  async mounted() {
    await this.fetchCategory();
    if(this.$route.params && this.$route.params.category) {
      this.category = this.$route.params.category
    }
    if(this.$route.query?.value){
      this.value = Number(this.$route.query.value)
    }
  },
};
</script>

<style>
</style>