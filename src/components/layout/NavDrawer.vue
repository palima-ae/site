<template>
    
    <!-- NAVIGATION DRAWER -->
        <v-navigation-drawer
          app
          :value="drawerState"
          temporary
          :dark="darkMode"
        >
          <v-list
            nav
            class="py-1"
          >
            <v-list-item two-line class="px-0">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg">
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
            <v-divider></v-divider>
  
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
          </v-list>


          <v-spacer></v-spacer>

          <template v-slot:append >
            <v-list-item 
              link
              @click.stop="updateDrawer"
            > 
              <v-list-item-icon>
                <v-icon>mdi-menu-left</v-icon>
              </v-list-item-icon>
              
              <v-list-item-content>
                <v-list-item-title> Collapse 
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

        </v-navigation-drawer>
    <!-- END NAVIGATION DRAWER -->

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "NavDrawer",

    computed: {
      ...mapGetters(['mainColor', 'drawerState', "darkMode"]),

      // moveDrawer: {
      //   get () {
      //     return this.$store.state.drawer
      //   },
      //   set (value) {
      //     this.$store.commit('setDrawer', value)
      //   }
      // }
    },
    // end COMPUTED

    methods: {
      ...mapActions(['updateDrawer']),
    },
    // end METHODS

    data () {
      return {
        
        // UI elements


        // List items
        items : [
        { title: 'Home', icon: 'mdi-home', route: '/' },
        { title: 'Who We Are', icon: 'mdi-account', route: '/who' },
        { title: 'What We Do', icon: 'mdi-view-dashboard', route: '/expand' },
        { title: 'Contact', icon: 'mdi-file-table', route: '/tradeshistory' },
        ]

      }
    }
}
</script>