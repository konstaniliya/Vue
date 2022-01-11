<template>
  <div id="paymentsDisplay">
    <div class="items" v-for="item, idx in items" :key="idx" :id="idx">
      {{ item }} 
      <edit-window :ident="idx" />    
    </div>
    <Pagination :items="items" @selectorClicked="showSelected"/>
  </div>
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
      console.log(ident);
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