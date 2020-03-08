<template>


    <v-app-bar
        app
        clipped-right
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        :color="navBarColor"
        :dark="darkMode"
    >


        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />


        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-menu
        offset-y
        transition="slide-y-transition"
        bottom
        >
            <template v-slot:activator="{ on }">
              <v-btn
                  active-class="deep-purple--text text--accent-4"
                  class = "hidden-xs-only"
                  text
                  v-on="on"
                  link to='/about'
              >
                Who We Are
            </v-btn>
            </template>
        </v-menu>


        <v-spacer></v-spacer>


        <v-menu
        offset-y
        transition="slide-y-transition"
        bottom
        >
            <template v-slot:activator="{ on }">
              <v-btn
                  class = "hidden-xs-only"
                  text
                  v-on="on"
              >
                What We Do
            </v-btn>
            </template>
        
            <v-list>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link :to="item.route"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
      
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

        </v-menu>
  

        <v-spacer></v-spacer>


  

        <v-switch
          v-model="setDarkMode"
          label="Dark Mode"
          :dark="darkMode"
        ></v-switch>


        <v-app-bar-nav-icon 
          class="hidden-sm-and-up"
          @click.native.stop="updateDrawer"
          >
        </v-app-bar-nav-icon>



      </v-app-bar>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'NavBar',

    data () {
        return {
            // List items
            items : [
            { title: 'Data Mining', icon: 'mdi-home', route: 'whatwedo' },
            { title: 'Performance Advertisting', icon: 'mdi-account', route: '/about' },
            { title: 'Web Technologies Consulting', icon: 'mdi-view-dashboard', route: '/dashboard' },
            { title: 'Contact', icon: 'mdi-file-table', route: '/tradeshistory' },
            ]
        }        
    },
    // end DATA
    
    computed: {
      ...mapGetters(['mainColor', 'drawerState', 'darkMode']),
      setDarkMode: {
        get () {
          return this.$store.state.darkmode
        },
        set (value) {
          this.$store.commit('setDarkMode', value)
        }
      },
      navbarBgColor () {return (this.darkMode ? "black" : "white")},
      navbarTextColor () {return (this.darkMode ? "light" : "dark")}
    },
    // end COMPUTED


    methods: {
      ...mapActions(['updateDrawer']),
    },

}
// end EXPORT

</script>