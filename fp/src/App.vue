<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
        <div class="total" v-if="total">Total: {{ total }}</div>
      </header>
      <main>
        <AddPaymentForm @clear="paymentsList = []" />
        <PaymentsDisplay :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
  },
  methods: {
    ...mapMutations({ fetch: "setPaymentsListData" }),
    ...mapActions(['fetchData'])
    
  },
  created() {
    // this.addPayment(this.fetchData());
    // this.$store.dispatch('fetchData');
    this.fetchData();
    // this.$store.commit('setPaymentsListData', this.fetchData());
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 100px;
}
</style>
