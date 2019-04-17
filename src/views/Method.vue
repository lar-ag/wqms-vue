<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg3 sm6 xs12>
        <card-method-param></card-method-param>
      </v-flex>
      <v-flex lg3 sm6 xs12>
        <vueper-slides class="no-shadow" bullets-outside>
          <v-icon slot="arrowLeft">fal fa-angle-left</v-icon>
          <v-icon slot="arrowRight">fal fa-angle-right</v-icon>
          <vueper-slide v-for="(channel, i) in getMethodChannels" :key="i">
            <div slot="slideContent">
              <v-layout>
                <div class="caption grey--text text-uppercase">{{channel.name}}</div>
                <span class="display-2 font-weight-black" v-text="channel.result"></span>
                <strong>{{unit}}</strong>
                <v-spacer></v-spacer>
                <v-sheet color="transparent">
                  <v-sparkline
                    :smooth="16"
                    :gradient="['#089177']"
                    :line-width="2"
                    :value="data"
                    auto-draw
                    stroke-linecap="round"
                  ></v-sparkline>
                </v-sheet>
              </v-layout>
            </div>
          </vueper-slide>
        </vueper-slides>
      </v-flex>
    </v-layout>
    <v-bottom-nav :active.sync="activeBtn" :value="showNav" absolute color="transparent">
      <v-btn flat color="teal">
        <span>Single measurement</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>Calibration</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>
<script>

import { VueperSlides, VueperSlide } from "vueperslides";
// :key="String(avg)"
// const exhale = ms => new Promise(resolve => setTimeout(resolve, ms));
// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
import "vueperslides/dist/vueperslides.min.css";
import { mapState } from "vuex";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    name: "unknown",
    unit: "ppm",
    activeBtn: 1,
    showNav: true
  }),
  props: {
    id: {
      type: String,
      default: "uvtconly"
    },
    data: []
  },
  created() {
    this.$store.dispatch("methods/read");
  },
  computed: {
    ...mapState({
      getMethod(state) {
        return state.methods.find(m => m.id == this.id);
      },
      getMethodChannels(state) {
        return state.channels.all
          ? state.channels.all.filter(ch => ch.method == this.id)
          : state.channels.all;
      }
    })
    // avg() {
    //   const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
    //   const length = this.heartbeats.length;
    //   if (!sum && !length) return 0;
    //   return Math.ceil(sum / length);
    // }
  },
  methods: {
    // heartbeat() {
    //   return Math.ceil(Math.random() * (120 - 80) + 80);
    // },
    // async takePulse(inhale = true) {
    //   this.checking = true;
    //   inhale && (await exhale(1000));
    //   this.heartbeats = Array.from({ length: 20 }, this.heartbeat);
    //   this.checking = false;
    // }
  }
};
</script>