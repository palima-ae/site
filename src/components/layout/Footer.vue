<template>

<v-footer
      padless
    >
      <v-card
        flat
        tile
        class="white dark--text text-center"
        width=100%
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            class="mx-5"
          >
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
  
  
        <v-card-text>
          <strong> {{ new Date().getFullYear() }} </strong> 
          <span> — </span>  
          <strong>
            <span>Made with <v-icon>mdi-vuejs</v-icon></span>
          </strong>
        </v-card-text>
      </v-card>
</v-footer>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Footer",

    computed: {
      ...mapGetters(["darkMode"]),
      footerClass () { return (this.darkMode ? "white white--text text-center" : "dark--text text-center")}

    },
    // end COMPUTED


    data () {
      return {
        
        // UI elements


        // List icons
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google',
        'mdi-linkedin',
        'mdi-instagram',
        ],

      }
    }
}
</script>