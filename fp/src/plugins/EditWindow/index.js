export default {
    install(Vue) {
      if (this.installed) {
        return;
      }
  
      this.installed = true;
  
      Vue.prototype.$edit = {
        EventBus: new Vue(),
  
        edit(name, settings) {
          this.EventBus.$emit("edit", { name, settings });
        },
  
        delete(ident) {
          this.EventBus.$emit("delete", ident);
        },
      };
    },
  };
  