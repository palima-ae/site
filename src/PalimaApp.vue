<template>
  <v-app
    :class="apptest"
    :style="appBgColor"
    >

    <!-- NAVIGATION DRAWER -->
    <NavDrawer />

    <!-- APP BAR -->
    <NavBar />

    <!-- CONTENT (v-model should be in v-select)-->
    <MainContent />

    <!-- </v-parallax> -->

    <Footer />
  </v-app>
</template>

<script>
import NavDrawer from './components/layout/NavDrawer.vue'
import NavBar from './components/layout/NavBar3.vue'
import MainContent from './components/layout/MainContent.vue'
import Footer from '@/components/layout/Footer'

import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'App4',

  computed: {
    ...mapGetters(['darkMode', 'isMobile']),
    appBgColor () {return (this.darkMode ? "background-color: black" : "background-color: ghostwhite")},
    currentTime () {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        return (hours + ":" + minutes)
    },
    dw_getWindowDims() {
      var doc = document, w = window;
      var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
              doc.documentElement: doc.body;

      var width = docEl.clientWidth;
      var height = docEl.clientHeight;

      // mobile zoomed in?
      if ( w.innerWidth && width > w.innerWidth ) {
          width = w.innerWidth;
          height = w.innerHeight;
      }
      return {width: width, height: height};
    },
    apptest () {

      var width = this.dw_getWindowDims.width;
      var id_value = (width<960 ? "mobileApp" : "desktopApp")
      console.log(id_value)
      return id_value
    },
    appDeviceID () {return (this.isMobile ? "mobileApp" : "desktopApp")}

  },

  methods: {
    ...mapActions(['updateMobile']),
  },

  components: {
    NavDrawer,
    NavBar,
    MainContent,
    Footer
  },


  mounted() {
      document.getElementById('parallax-hero').style.height = '100%';

      // var doc = document, w = window;
      // var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
      //         doc.documentElement: doc.body;

      // var width = docEl.clientWidth;
      // var height = docEl.clientHeight;

      // mobile zoomed in?
      // if ( w.innerWidth && width > w.innerWidth ) {
      //     width = w.innerWidth;
          // height = w.innerHeight;
      // }

      // var ismobile = width<960 ? true : false;
      // console.log(ismobile);
      // this.updateMobile(ismobile);
      // this.$store.commit('setDarkMode', value)
    }
}
// end EXPORT

</script>

<style lang="scss" scoped>

.desktopApp {
  margin: auto;
  width: 80%
}

.mobileApp {
  margin: auto;
  width: 100%
}

#systembar {
  margin: auto;
  text-align: center;
  left: 0%;
  right: 0%;
  width: 100%;
}

</style>