<template>
  <v-bottom-nav :active.sync="bottomNav" :value="true" absolute>
    <v-btn color="teal" flat value="recent">
      <span>Recent</span>
      <v-icon>history</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="favorites">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="nearby">
      <span>Nearby</span>
      <v-icon>place</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  data(){
    return {
      bottomNav: "recent"
    };
  },
};
</script>

<style>
/* #core-footer { */
  /* z-index: 0; */
/* } */
</style>
