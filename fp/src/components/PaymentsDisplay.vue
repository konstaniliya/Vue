<template>
  <div id="paymentsDisplay">
    <div class="items" v-for="item, idx in items" :key="idx" id="int">
      {{ item }}
    </div>
    <Pagination :items="items" @selectorClicked="showSelected"/>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  components: {
    Pagination
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    showSelected(items){
      if(items.length<=5) {
        document.getElementById("paymentsDisplay").innerHTML = `
        <div class="items" v-for="(e, index) in 5" :key="index" id="int" v-html="{{ items[index] }}">
        </div>
        `;
      }
    }
  }
};
</script>

<style lang="sass">
</style>