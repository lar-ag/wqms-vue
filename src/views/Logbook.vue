<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Sort log data</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-select v-model="value" :items="messages" attach chips label="Chips" multiple></v-select>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12>
        <v-timeline dense>
          <v-slide-x-reverse-transition group hide-on-leave>
            <v-timeline-item
              v-for="item in items"
              :key="item.id"
              :color="item.color"
              small
              fill-dot
            >
              <v-alert
                :value="true"
                :color="item.color"
                :icon="item.icon"
              >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-alert>
            </v-timeline-item>
          </v-slide-x-reverse-transition>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
const COLORS = ["info", "warning", "error", "success"];
const ICONS = {
  info: "fal fa-info-square",
  warning: "fal fa-exclamation-triangle",
  error: "fal fa-debug",
  success: "fal fa-check-circle"
};

const MESSAGE = ["info","warning","error","changed"]
export default {
  data: () => ({
    interval: null,
    messages: MESSAGE,
    items: [
      {
        id: 1,
        color: "info",
        icon: ICONS["info"]
      }
    ],
    nonce: 2
  }),

  beforeDestroy() {
    this.stop();
  },

  methods: {
    addEvent() {
      let { color, icon } = this.genAlert();

      const previousColor = this.items[0].color;

      while (previousColor === color) {
        color = this.genColor();
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon
      });

      if (this.nonce > 6) {
        this.items.pop();
      }
    },
    genAlert() {
      const color = this.genColor();

      return {
        color,
        icon: this.genIcon(color)
      };
    },
    genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    genIcon(color) {
      return ICONS[color];
    },
    start() {
      this.interval = setInterval(this.addEvent, 3000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>