<template>
  <main>
    <AddPaymentForm @clear="paymentsList = []" />
    <PaymentsDisplay :items="currentElements" />
    <Pagination
      :cur="page"
      :n="n"
      :length="paymentsList.length"
      @paginate="changePage"
    />
  </main>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay";
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
   data() {
    return {
      show: true,
      n: 10,
      page: 1,
    };
  },
};
</script>

<style>
</style>