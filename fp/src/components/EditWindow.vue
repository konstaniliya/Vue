<template>
  <div class="wrapper">

    <!-- <v-dialog
      v-model="editorIsShow"
      width="100"
    >
      <template v-slot:activator="{on}">
        <v-btn color="teal" dark v-on="on">
         <v-icon>mdi-pencil</v-icon>
      </v-btn>
      </template>
    </v-dialog> -->
    <v-dialog
    v-model="editorIsShow"
    width="500"
    >
      <template v-slot:activator="{on}">
        <v-btn @click="onClickEdit()" id="editShow" v-on="on"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn @click="onClickDelete"><v-icon>mdi-delete</v-icon></v-btn>
      </template>
        <v-card class="text-left pa-8">
          <div class="content">
            <v-text-field v-model="date" label="Date"/>
              <v-select
                :items="categoryList"
                label="Category"
                v-model="category"
              >
              <!-- <option v-for="(category,index) in categoryList" :key="index" :value="category"> {{category}} </option> -->
              </v-select>
            <v-text-field v-model.number="value" label="Value"/>
            <v-card-action>
              <v-btn @click="onClick">Save!</v-btn>
            </v-card-action>
          </div>
        </v-card>
    </v-dialog>
      
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
      editorIsShow: false
    };
  },
  props: {
    ident: Number,
  },
  computed: {
    ...mapGetters({ categoryList: "getCategoryList" }),
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
    ...mapActions(["fetchCategory"]),
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.editPaymentListData({ loadData: data, position: this.ident });
      console.log(data);
      this.editorIsShow = false;
    },
    onClickEdit() {
      this.$edit.edit();
      // this.editShow = !this.editShow;
      // if (document.getElementById("editShow").innerHTML == "Close") {
      //   document.getElementById("editShow").innerHTML = "Edit";
      // } else {
      //   document.getElementById("editShow").innerHTML = "Close";
      // }
    },
    onClickDelete() {
      this.$edit.delete(this.ident);
    },
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


