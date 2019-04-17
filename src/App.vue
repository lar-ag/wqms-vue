<template>
  <div>
    <v-app>
      <nav-toolbar></nav-toolbar>
      <nav-drawer></nav-drawer>
      <nav-view></nav-view>
      <footer></footer>
    </v-app>
    <vuenut :store="$store.state"/>
    <dialog-airflow></dialog-airflow>
  </div>
</template>

<script>
// import NavToolbar from "@/components/nav/NavToolbar.vue";
// import NavDrawer from "@/components/nav/NavDrawer.vue";

export default {
  // components: {
  // NavToolbar,
  // NavDrawer
  // },
  methods: {
    goto() {},
    clear() {},
    poweroff() {
      // console.log()
    }
  }
};
</script>

<style lang="stylus">

html {
  font-family: RobotoMono Nerd Font;
  font-size: 12px;
}

</style>


