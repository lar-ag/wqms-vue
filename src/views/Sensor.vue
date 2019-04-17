<template>
 <v-container grid-list-xl fluid>
    <!-- <vue-scroll :ops="ops"> -->
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <card-channel name="TC1" unit="ppm"></card-channel>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <card-channel name="TC2" unit="ppm"></card-channel>
        </v-flex>
         <v-flex lg3 sm6 xs12>
          <card-uvlamp title="UV-Lamp" sub-title="Lifeline"></card-uvlamp>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <card-airflow></card-airflow>
        </v-flex>
         <!-- mini statistic  end -->
      </v-layout>
    <!-- </vue-scroll> -->
  </v-container>
  <!-- </scroller> -->
</template>

<script>
// import
export default {
  // data: () => ({
  //   activeIndex: -1,
  //   ops: {
  //     vuescroll: {
  //       mode: "native",
  //       pullRefresh: {
  //         enable: true
  //       },
  //       pushLoad: {
  //         enable: true,
  //         tips: {
  //           beforeDeactive: "Load Successfully!"
  //         }
  //       },
  //       scroller: {
  //         preventDefault: true
  //       }
  //     },
  //     bar: {
  //       showDelay: 500,
  //       onlyShowBarOnScroll: true,
  //       keepShow: false,
  //       background: "#c1c1c1",
  //       opacity: 1,
  //       hoverStyle: false,
  //       specifyBorderRadius: false,
  //       minSize: false,
  //       size: "16px"
  //     }
  //   }
  // }),
  // downfresh(done) {
  //   let b = this.num[0];
  //   for (let i = b; i >= b - 5; i--) {
  //     this.num.unshift(i);
  //   }
  //   done(); // you should call the done to close the loading
  // },
  // upload(done) {
  //   if (this.num[this.num.length - 1] < 25) {
  //     let b = this.num[this.num.length - 1];
  //     for (let i = b + 1; i <= b + 5; i++) {
  //       this.num.push(i);
  //     }
  //     done(); // you should call the done to close the loading
  //   } else {
  //     this.$refs.scroll.closeLoad();
  //   }
  // },
  // showPosition() {
  //   let { x: left, y: top } = this.$refs.scroll.getPosition();
  //   this.left = left;
  //   this.top = top;
  // },
  // goTop() {
  //   this.$refs.scroll.scrollTo(0, true);
  //   this.showPosition();
  // }
};
</script>
