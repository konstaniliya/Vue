<template>
  <div class="wrapper">
      <button @click="onClickEdit">Edit</button>
      <button @click="onClickDelete">Delete</button>
  </div>
</template>

<script>

export default {
  props: {
    ident: Number,
  },

    methods: {
        onClickEdit(){
            this.$edit.edit();
        },
        onClickDelete(){
            this.$edit.delete(this.ident);
        }
    }
}
</script>


<style lang="sass" scoped>
.wrapper
  gap: 10px
  display: flex
</style>


