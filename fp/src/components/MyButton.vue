<template>
  <div class="btn">
    <div class="icon">
        <slot name="icon"/>
    </div>
    <button><slot/></button>
  </div>
</template>

<script>
export default {
    props:['text'],
  data() {
    return {
      counter: 0,
    };
  },
  methods: {

  },
};
</script>
<style lang="sass" scoped>
.btn
    display: flex
    
</style>