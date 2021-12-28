<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <a href="dashboard">Dashboard</a> / 
        <a href="notfound">NotFound</a> /
        <a href="about">About</a>
      </header>
      <main>
        <dashboard v-if="page === 'dashboard'" />
        <about v-else-if="page === 'about'" />
        <not-found v-else />
      </main>
    </div>
  </div>
</template>

<script>
import Dashboard from "./views/Dashboard.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

export default {
  components: { Dashboard,About,NotFound },
  name: "App",
  comments: {
    Dashboard,
    About,
    NotFound,
  },
  data() {
    return {
      page: "",
    };
  },
  methods: {
    setPage() {
      this.page = location.pathname.slice(1);
    },
  },
  mounted() {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        history.pushState({}, "", link.href);
        this.setPage();
      });
    });
    this.setPage();
    window.addEventListener("popstate", () => {
      this.setPage();
    });
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
