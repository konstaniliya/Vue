<template>
  <div class="wrapper">
      <button @click="onClickEdit()" id="editShow">Edit</button>
      <button @click="onClickDelete">Delete</button>
      <div class="content" v-if="editShow">
          <input placeholder="date" v-model="date" /> <br />
          <div class="categoryList">
          <select v-model="category">
           <option v-for="(category,index) in categoryList" :key="index" :value="category"> {{category}} </option>
          </select>
    </div>
    <input placeholder="value" type="number" v-model.number="value" />
    <button @click="onClick">Save!</button>
      </div>
  </div>
</template>

<script>


import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      date: "",
      category: "",
      value: "",
      editShow: false,
    };
  },
  props: {
    ident: Number,
  },
  computed: {
    ...mapGetters({categoryList: 'getCategoryList'}),
    getCurrentDate() {
      const today = new Date();
      const m = today.getMonth() + 1;
      const d = today.getDate();
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapMutations(["editPaymentListData"]),
    ...mapActions(['fetchCategory']),
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.editPaymentListData({loadData: data,
      position: this.ident});
console.log(data)
    },
        onClickEdit(){
            this.$edit.edit();
            this.editShow = !this.editShow;
            if(document.getElementById("editShow").innerHTML == "Close"){
              document.getElementById("editShow").innerHTML = "Edit";
            }
            else{
              document.getElementById("editShow").innerHTML = "Close";
            }
        },
        onClickDelete(){
            this.$edit.delete(this.ident);
        }
  },
    async mounted() {
    await this.fetchCategory();
    
  },
};

</script>


<style lang="sass" scoped>
.wrapper
  gap: 10px
  display: flex
</style>


