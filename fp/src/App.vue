<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
      </header>
      <main>
        <AddPaymentForm
          @addNewPayment="addToPaymentList"
          @clear="paymentsList = []"
        />
        <PaymentsDisplay :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: true,
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 111,
        },
        {
          date: "29.03.2020",
          category: "Food",
          value: 12229,
        },
        {
          date: "30.03.2020",
          category: "Food",
          value: 1323,
        },
      ];
    },
    addToPaymentList(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
