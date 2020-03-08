<template>
  <v-app>

    <!-- NAVIGATION DRAWER Component-->
    <NavDrawer />
    <!-- END NAVIGATION DRAWER Component -->


    <!-- APP BAR -->
    <NavBar />
    <!-- END APP BAR -->


    <!-- CONTENT (v-model should be in v-select)-->
    <MainContent />
    <!-- END CONTENT -->

  </v-app>
</template>

<script>
import NavDrawer from './components/layout/NavDrawer.vue'
import NavBar from './components/layout/NavBar3.vue'
import MainContent from './components/layout/MainContent.vue'

export default {
  name: 'App4',
  
  components: {
    NavDrawer,
    NavBar,
    MainContent,
  },

  // data () {
  //   return {


  //   }
  // },
  // end DATA
}
// end EXPORT

</script>



