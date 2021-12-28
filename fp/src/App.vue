<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <router-link to="/dashboard">Dashboard</router-link> /
        <router-link to="/about">About</router-link> /
        <span @click="goToPageNotFound">notfound</span>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>


export default {
  name: "App",

  data() {
    return {
    };
  },
  methods: {
    goToPageNotFound(){
      if(this.$router.name === 'notfound') return
      this.$router.push({
        name: "notfound"
      });
    }
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 100px;
}
</style>
