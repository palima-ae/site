<template>
    
    <!-- CONTENT (v-model should be in v-select)-->
    <v-content 
        >
        <!-- Provides the application the proper gutter -->

      <v-container fluid>

          <v-row justify="space-around">
            <v-col cols="12">
              <!-- 
                If using vue-router 
                router-view can take a key argument, we often need to set it to :
                ':key = "$route.fullPath" to avoid bugs in single page applications
              -->
              <router-view></router-view>
            </v-col>
          </v-row>

      </v-container>

    </v-content>
    <!-- END CONTENT -->

</template>


<script>

import { mapGetters} from 'vuex';

export default {
    name: 'MainContent',

    data () {
        return {
            colors: [
                'primary',
                'blue',
                'success',
                'red',
                'teal',
                'cyan'
            ],
        }        
    },
    // end DATA

    computed: {
      ...mapGetters(['mainColor', 'drawerState', 'darkMode']),
      pickColor: {
        get () {
          return this.$store.state.color
        },
        set (value) {
          this.$store.commit('setColor', value)
        }
      }
    },
    // end COMPUTED
}
// end EXPORT

</script>