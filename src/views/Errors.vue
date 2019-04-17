<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex v-for="(error,index) in errors" :key="index" lg3 sm6 xs12>
        <card-error></card-error>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { mapState } from "vuex";
export default {
   computed: {
    ...mapState({
      errors: state => state.errors.all,
    }),
   }
};
</script>
