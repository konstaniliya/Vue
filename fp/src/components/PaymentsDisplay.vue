<template>
  <div>
    <div id="int">

    </div>
    <button v-for="i in Math.floor(items.length / 5)" :key="i" @click="show()">
      {{ i }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    show() {
      document.getElementById("int").innerHTML = `
        <div class="items" v-for="(e, index) in 5" :key="index" id="int" v-html="items[index]">
        
        </div>
      `;
      console.log("Hello")
    },
  },
};
</script>

<style lang="sass">
</style>