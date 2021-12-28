<template>
  <main>
    <AddPaymentForm @clear="paymentsList = []" />
    <PaymentsDisplay :items="currentElements" />
    <Pagination
      :cur="page"
      :n="n"
      :length="12"
      @paginate="changePage"
    />
    <router-link to="/dashboard/Food?value=200" @click="newFunc">Food payment 200</router-link> /
    <router-link to="/dashboard/Transport?value=50" @click="newFunc">Transport payment 50</router-link> /
    <router-link to="/dashboard/Entertainment?value=2000" @click="newFunc">Entartainment payment 2000</router-link>
  </main>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      show: true,
      n: 3,
      page: 1,
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElements() {
      return this.paymentsList.slice(this.n * (this.page - 1), this.n * (this.page - 1) + this.n);
    },
  },
  methods: {
    ...mapMutations({
      fetch: "setPaymentsListData",
      addNew: "addPaymentListData",
    }),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
      this.fetchData(p);
    },
    newFunc(){
      
    const data = {
      date: this.getCurrentDate(),
      category: "",
      value: "",
    };
    this.data.category = this.$route.params.category;
    this.data.value = this.$route.query.value;
    this.addNew(data);

    }
  },
  async created() {
    // this.addPayment(this.fetchData());
    // this.$store.dispatch('fetchData');
    await this.fetchData(1);
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }

    // this.$store.commit('setPaymentsListData', this.fetchData());
  },
};
</script>

<style>
</style>