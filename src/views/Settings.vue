<template>
  <v-container fluid>
    <v-layout row>
      <v-flex lg3 sm6 xs12>
        <v-card class="parameters">
          <v-card-text>
            <div class="parent">
              <vue-scroll :ops="ops" ref="vs">
                <div class="method-settings" v-for="(method,index) in methods" :key="index">
                  <v-form ref="form" v-model="form" class="pa-3 pt-4">
                    <v-text-field v-model="method.name" color="deep-purple" label="Name"></v-text-field>
                    <v-text-field v-model="method.unit" color="deep-purple" label="Unit"></v-text-field>
                    <parameter-intervals :id="method.id"></parameter-intervals>
                  </v-form>
                  <v-subheader class="pa-0">Where do you live?</v-subheader>
                </div>
              </vue-scroll>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      form: false,
      ops: {
        vuescroll: {
          mode: "slide",
          pullRefresh: {
            enable: true
          }
        }
      },
      time: null,
      modal: []
    };
  },
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

<style lang="stylus" scoped>
.setting {
  padding: 1px;
  width: 100%;
  height: 560;
  margin-top: 1rem;

  /deep/ .child {
    width: 100%;
  }
}
</style>