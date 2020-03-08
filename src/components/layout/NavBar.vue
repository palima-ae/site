<template>

  <!-- APP BAR -->
  <v-app-bar
    app
    clipped-left
    :color="mainColor + ' lighten-4'"
    light
    elevate-on-scroll
  >
    <v-app-bar-nav-icon @click="updateDrawer" />

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

    <v-spacer></v-spacer>

    <Login />

    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>

  </v-app-bar>
  <!-- END APP BAR -->
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import Login from '../content/Login.vue';

export default {
    name: "AppBar",

    // components : {
    //   Login, 
    // },

    computed: mapGetters(['mainColor', 'drawerState']),
    // methods : mapActions(['updateDrawer']),

    // data () {
    //   return {
    //   }
    // },

    methods: {
      ...mapActions(['updateDrawer']),
    },
}
</script>