<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg3 sm6 xs12 v-for="(method,index) in methods" :key="index">
        <card-method :id="method.id" :name="method.name" :unit="method.unit"></card-method>
      </v-flex>
      <v-flex lg3 sm6 xs12>
        <card-uvlamp title="UV-Lamp" sub-title="Lifeline"></card-uvlamp>
      </v-flex>
      <v-flex lg4 sm6 xs12>
        <card-airflow></card-airflow>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("methods/read");
  },
  computed: {
    ...mapState({
      methods: state => state.methods.all
    })
  }
};
</script>