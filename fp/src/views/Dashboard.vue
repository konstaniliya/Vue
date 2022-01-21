<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">
              Add new cost <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <add-payment-form @addNewPayment="dialog = false" />
        </v-dialog>

        <!-- <my-button><template #icon>
        <v-icon>mdi-plus</v-icon>
        </template>Click me</my-button>
      <my-button>Push me</my-button> -->

        <payments-display :items="currentElements" />
        <pagination
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="changePage"
        />
        <!-- <button @click="openModal">Add new cost +</button> -->
      </v-col>
      <v-col>
        Chart
        <pie-chart :chart-data="chartdata"/>
      </v-col>
    </v-row>
    <v-btn @click="countAll">Count</v-btn>
  </v-container>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import PaymentsDisplay from "../components/PaymentsDisplay";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
// import MyButton from '../components/MyButton.vue';

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    // MyButton,
    Pagination,
    PieChart
  },
  data() {
    return {
      addFormShow: false,
      dialog: false,
      settings: {
        content: "addPaymentForm",
        header: "Add new cost",
      },
      n: 10,
      page: 1,
      categoryCount: null,
      chartdata: null,
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  methods: {
    ...mapMutations({
      fetch: "setPaymentsListData",
    }),
    ...mapGetters(["countMyCost"]),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
    },
    countAll(){
      this.categoryCount =  this.countMyCost();
      console.log(this.categoryCount);
      this.chartdata = {
        labels: [
          "Entertainment",
          "Sport",
          "Internet",
          "Education",
          "Food",
          "Transport",
        ],
        datasets: [
          {
            label: "Data One",
            data: [
              this.categoryCount.en, 
              this.categoryCount.sp, 
              this.categoryCount.in, 
              this.categoryCount.ed, 
              this.categoryCount.fo, 
              this.categoryCount.tr,
            ],
            backgroundColor: ["#41B883", "#E46651", "#00D8FF","#41E883", "#E43651", "#00DAFF",],
          },
        ],
      }
console.log('in', this.chartdata);
    },
    openModal() {
      this.$modal.show("AddPaymentForm", {
        content: "addPaymentForm",
        header: "Add new cost",
      });
    },
  },
  async created() {
    
    // this.addPayment(this.fetchData());
    // this.$store.dispatch('fetchData');
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }


    // this.$store.commit('setPaymentsListData', this.fetchData());
  },
};

</script>

<style>
canvas{

  width:700px !important;
  height:700px !important;

}
</style>