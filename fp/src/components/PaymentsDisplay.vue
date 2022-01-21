<template>
<v-container>
  <v-row>
    <v-col :cols="1">
      #
    </v-col>
    <v-col>
      Date
    </v-col>
    <v-col>
      Category
    </v-col>
    <v-col :cols="2">
      Value
    </v-col>
  </v-row>
  <v-row v-for="(item) in items" :key="item.id">
    <v-col :cols="1">{{item.id}} </v-col>
    <v-col>{{item.date}}</v-col>
    <v-col>{{item.category}}</v-col>
    <v-col :cols="2">{{item.value}}</v-col>
    <edit-window :ident="item.id" /> 



  </v-row>   
    <Pagination :items="items" @selectorClicked="showSelected"/>
  </v-container>
</template>

<script>


import Pagination from "./Pagination.vue";
import { mapMutations } from "vuex";

export default {

  components: {
    Pagination,
    EditWindow: () =>
      import(
        /* webpackChunkName: "Edit" */ "./EditWindow.vue"
      ),

  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    ...mapMutations(["deletePaymentListData"]),
    showSelected(items){
      if(items.length<=5) {
        document.getElementById("paymentsDisplay").innerHTML = `
        <div class="items" v-for="(e, index) in 5" :key="index" id="int" v-html="{{ items[index] }}">
        </div>
        `;
      }
    },
    onEdit(){

    },
    onDelete(ident){
      console.log("ident",ident);
      this.deletePaymentListData({start: ident, count: 1});
    },

  },
  mounted() {
    this.$edit.EventBus.$on("edit", this.onEdit);
    this.$edit.EventBus.$on("delete", this.onDelete);
  },
    beforeDestroy() {
    this.$edit.EventBus.$off("edit", this.onEdit);
    this.$edit.EventBus.$off("delete", this.onDelete);
    }
};
</script>

<style lang="sass">
.items
  display: flex
  justify-content: center
  gap: 10px
</style>